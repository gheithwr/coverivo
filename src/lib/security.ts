const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30;
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = MAX_REQUESTS) {
  const now = Date.now();
  const current = hits.get(key);
  if (!current || now > current.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: limit - 1 };
  }
  if (current.count >= limit) {
    return { allowed: false, remaining: 0 };
  }
  current.count += 1;
  return { allowed: true, remaining: limit - current.count };
}

export function sanitizeText(value: unknown, max = 4000) {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, max);
}

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

export function auditEvent(event: string, details: Record<string, unknown>) {
  const entry = {
    at: new Date().toISOString(),
    event,
    details: {
      ...details,
      email: details.email ? "[redacted]" : undefined,
      phone: details.phone ? "[redacted]" : undefined,
    },
  };
  if (process.env.NODE_ENV !== "production") {
    console.info("[coverivo-audit]", entry.event);
  }
  return entry;
}
