import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://vincentnunez.vercel.app"), // or custom domain
  title: {
    default: "Vincent Nuñez — Full-Stack Developer",
    template: "%s — Vincent Nuñez",
  },
  description:
    "Portfolio of Vincent Nuñez — Full-Stack Developer building workflow-driven web systems and internal tooling.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vincent Nuñez — Full-Stack Developer",
    description:
      "Workflow-driven web systems, internal tooling, and enterprise UX.",
    url: "/",
    siteName: "Vincent Nuñez",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Nuñez — Full-Stack Developer",
    description:
      "Workflow-driven web systems, internal tooling, and enterprise UX.",
    images: ["/og.png"],
  },
};
