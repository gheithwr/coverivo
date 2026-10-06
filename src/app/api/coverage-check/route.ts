import { NextResponse } from "next/server";
import { sampleCoverageCheck } from "@/data/quotes";
import { auditEvent, clientKey, rateLimit, sanitizeText } from "@/lib/security";

export async function POST(request: Request) {
  const limited = rateLimit(`coverage:${clientKey(request)}`, 16);
  if (!limited.allowed) {
    return NextResponse.json({ error: "Too many coverage checks. Please try again shortly." }, { status: 429 });
  }

  const contentType = request.headers.get("content-type") || "";
  let notes = "";
  let fileName = "";

  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    notes = sanitizeText(String(form.get("notes") || ""), 4000);
    const file = form.get("file");
    if (file instanceof File) {
      if (file.size > 8 * 1024 * 1024) {
        return NextResponse.json({ error: "Please upload a file smaller than 8MB." }, { status: 400 });
      }
      fileName = sanitizeText(file.name, 180);
    }
  } else {
    const body = await request.json().catch(() => ({}));
    notes = sanitizeText(body.notes || body.policyText, 4000);
    fileName = sanitizeText(body.fileName, 180);
  }

  auditEvent("coverage-check.requested", { hasFile: Boolean(fileName), notesLength: notes.length });

  return NextResponse.json({
    result: {
      ...sampleCoverageCheck,
      carrier: notes.match(/carrier[:\s]+([A-Za-z0-9 &.-]+)/i)?.[1] || sampleCoverageCheck.carrier,
      summary: `${sampleCoverageCheck.summary}${fileName ? ` Uploaded file: ${fileName}.` : ""}`,
    },
    disclaimer:
      "AI results should be reviewed against the actual policy and discussed with a Coverivo insurance professional. This analysis does not bind coverage or confirm that any gap, duplicate, or savings exists.",
  });
}
