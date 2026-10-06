import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ChatWidget } from "@/components/ai/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AppTabBar } from "@/components/layout/AppTabBar";
import { InstallAppPrompt } from "@/components/pwa/InstallAppPrompt";
import { ServiceWorkerRegister } from "@/components/pwa/ServiceWorkerRegister";
import { SESSION_COOKIE, readSession } from "@/lib/auth";
import { getAccount } from "@/lib/portal-store";
import { siteConfig } from "@/config/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Coverivo | Insurance made smarter",
    template: "%s | Coverivo",
  },
  description: siteConfig.description,
  keywords: [
    "insurance broker",
    "licensed insurance professionals",
    "Coverivo",
    "AI insurance assistant",
    "independent insurance broker",
    "business insurance",
    "employee benefits",
  ],
  openGraph: {
    title: "Coverivo | Insurance made smarter",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Coverivo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coverivo | Insurance made smarter",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  applicationName: "Coverivo",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Coverivo",
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1769FF",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = readSession(token);
  const signedIn = Boolean(session && getAccount(session.email));

  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jakarta.className} antialiased`}>
        <Header signedIn={signedIn} />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <AppTabBar signedIn={signedIn} />
        <InstallAppPrompt />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
