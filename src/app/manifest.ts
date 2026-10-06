import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Coverivo",
    short_name: "Coverivo",
    description:
      "Apply for insurance from your phone. Coverivo is an independent insurance broker with licensed professionals and AI-powered guidance.",
    start_url: "/quote",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#071B36",
    theme_color: "#1769FF",
    categories: ["finance", "business", "productivity"],
    lang: "en-US",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      {
        name: "Apply for insurance",
        short_name: "Apply",
        description: "Start a Coverivo quote application on your phone.",
        url: "/quote",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "My applications",
        short_name: "Status",
        description: "Check the status of your Coverivo applications.",
        url: "/dashboard",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Ask Coverivo AI",
        short_name: "Ask AI",
        description: "Ask a coverage question.",
        url: "/ai-assistant",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
