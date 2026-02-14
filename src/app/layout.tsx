import type { Metadata } from "next";
import "./globals.css";

import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://vincent-portfolio-sable.vercel.app"),
  title: {
    default: "Vincent Nuñez — Full-Stack Developer",
    template: "%s — Vincent Nuñez",
  },
  description:
    "Portfolio of Vincent Nuñez — Full-Stack Developer building workflow-driven web systems and internal tooling.",
  alternates: { canonical: "/" },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
