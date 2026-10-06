type IntegrationName =
  | "crm"
  | "ams"
  | "carrier"
  | "rater"
  | "email"
  | "sms"
  | "calendar"
  | "esign"
  | "documents"
  | "auth";

interface IntegrationConfig {
  name: IntegrationName;
  url?: string;
  configured: boolean;
}

function env(name: string) {
  return process.env[name] || "";
}

export function getIntegrations(): IntegrationConfig[] {
  return [
    { name: "crm", url: env("CRM_API_URL"), configured: Boolean(env("CRM_API_URL") && env("CRM_API_KEY")) },
    { name: "ams", url: env("AMS_API_URL"), configured: Boolean(env("AMS_API_URL") && env("AMS_API_KEY")) },
    {
      name: "carrier",
      url: env("CARRIER_API_URL"),
      configured: Boolean(env("CARRIER_API_URL") && env("CARRIER_API_KEY")),
    },
    { name: "rater", url: env("RATER_API_URL"), configured: Boolean(env("RATER_API_URL") && env("RATER_API_KEY")) },
    { name: "email", configured: Boolean(env("EMAIL_PROVIDER_API_KEY")) },
    { name: "sms", configured: Boolean(env("SMS_PROVIDER_API_KEY")) },
    {
      name: "calendar",
      url: env("CALENDAR_API_URL"),
      configured: Boolean(env("CALENDAR_API_URL") && env("CALENDAR_API_KEY")),
    },
    {
      name: "esign",
      url: env("ESIGN_API_URL"),
      configured: Boolean(env("ESIGN_API_URL") && env("ESIGN_API_KEY")),
    },
    {
      name: "documents",
      url: env("DOCUMENT_STORAGE_URL"),
      configured: Boolean(env("DOCUMENT_STORAGE_URL") && env("DOCUMENT_STORAGE_KEY")),
    },
    { name: "auth", configured: Boolean(env("AUTH_SECRET")) },
  ];
}

export async function dispatchLead(payload: Record<string, unknown>) {
  const crmUrl = env("CRM_API_URL");
  const crmKey = env("CRM_API_KEY");
  if (!crmUrl || !crmKey) {
    return { queued: true, destination: "local-intake" as const, payload };
  }
  return { queued: true, destination: "crm" as const };
}
