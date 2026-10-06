import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";

export const alt = "Coverivo — Insurance made smarter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/coverivo-logo-light.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #071B36 0%, #0B376D 55%, #1769FF 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={src} alt="Coverivo" width={280} height={72} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 58, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>
            Smarter Insurance Starts Here.
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
            Independent insurance broker. Licensed professionals. AI-powered guidance.
          </div>
        </div>
        <div style={{ fontSize: 18, color: "#18BFAE" }}>Insurance made smarter. · coverivo.com</div>
      </div>
    ),
    size
  );
}
