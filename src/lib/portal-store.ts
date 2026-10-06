import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { randomBytes } from "crypto";
import type { PortalApplication } from "@/lib/types";

export interface PortalAccount {
  email: string;
  passwordHash: string;
  passwordSalt: string;
  firstName: string;
  lastName: string;
  phone: string;
  zip: string;
  state: string;
  createdAt: string;
}

interface PortalStore {
  sessionSecret: string;
  accounts: Record<string, PortalAccount>;
  applications: PortalApplication[];
}

const STORE_PATH = join(process.cwd(), "data", "portal-store.json");

function emptyStore(): PortalStore {
  return {
    sessionSecret: randomBytes(32).toString("hex"),
    accounts: {},
    applications: [],
  };
}

function loadStore(): { store: PortalStore; persisted: boolean } {
  try {
    const parsed = JSON.parse(readFileSync(STORE_PATH, "utf8")) as PortalStore;
    if (parsed.sessionSecret && parsed.accounts && Array.isArray(parsed.applications)) {
      return { store: parsed, persisted: true };
    }
  } catch {
    // Missing or unreadable store; fall through to a fresh one.
  }
  return { store: emptyStore(), persisted: false };
}

function readStore(): PortalStore {
  return loadStore().store;
}

function writeStore(store: PortalStore) {
  mkdirSync(dirname(STORE_PATH), { recursive: true });
  writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), { mode: 0o600 });
}

export function getSessionSecret() {
  const { store, persisted } = loadStore();
  if (!persisted) writeStore(store);
  return store.sessionSecret;
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function getAccount(email: string) {
  return readStore().accounts[normalizeEmail(email)] || null;
}

export function upsertAccount(account: PortalAccount) {
  const store = readStore();
  store.accounts[normalizeEmail(account.email)] = {
    ...account,
    email: normalizeEmail(account.email),
  };
  writeStore(store);
}

export function addApplication(application: PortalApplication) {
  const store = readStore();
  store.applications.unshift(application);
  writeStore(store);
  return application;
}

export function getApplicationsForEmail(email: string) {
  const key = normalizeEmail(email);
  return readStore().applications.filter((item) => item.email === key);
}

export function getCustomerPortal(email: string) {
  const account = getAccount(email);
  if (!account) return null;
  return {
    customer: {
      email: account.email,
      firstName: account.firstName,
      lastName: account.lastName,
      phone: account.phone,
      zip: account.zip,
      state: account.state,
      createdAt: account.createdAt,
    },
    applications: getApplicationsForEmail(email),
  };
}
