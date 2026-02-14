"use client";

import { glass, glassInnerHighlight } from "@/components/ui/glass";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type LinkItem = {
  label: string;
  href: string;
  hint?: string;
  variant?: "primary" | "secondary";
};

const links: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/ShiiiRohhh",
    hint: "Code & repositories",
    variant: "secondary",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    hint: "Professional profile",
    variant: "secondary",
  },
  {
    label: "Email",
    href: "vincentnunezshiii@gmail.com",
    hint: "Contact me directly",
    variant: "primary",
  },
  {
    label: "Resume (PDF)",
    href: "/Vincent-Nunez-Resume.pdf",
    hint: "Download",
    variant: "secondary",
  },
];

const highlights = [
  "Workflow-driven internal systems (approval, tracking, audit logs)",
  "Frontend–backend integration with structured APIs",
  "Databases, stored procedures, and SQL-first environments",
  "Clean UI with predictable states and maintainable architecture",
];

export default function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Left: About copy */}
          <div>
            <p className="text-orange-400 font-semibold">About Me</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Vincent Nuñez
            </h1>

            <p className="mt-5 text-white/80 text-lg">
              Web Developer <span className="text-white/40">|</span> Software Developer
            </p>

            <p className="mt-6 max-w-2xl leading-7 text-white/65">
              I build clean, reliable web systems focused on real operational use—internal tools,
              workflow-driven platforms, and business applications where correctness and maintainability
              matter. I enjoy turning requirements into predictable user flows, backed by structured APIs
              and data integrity.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              My strength is bridging UI and business logic: clear state handling, practical UX decisions,
              and integration with existing systems (databases, stored procedures, and enterprise constraints).
            </p>

            {/* Highlight list */}
            <div className={`${glass} ${glassInnerHighlight} mt-10 p-6`}>
              <h2 className="text-lg font-semibold text-white">What I’m known for</h2>
              <ul className="mt-4 space-y-2 text-white/75">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Links */}
          <motion.aside
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className={`${glass} ${glassInnerHighlight} p-6 h-fit`}
          >
            <h2 className="text-lg font-semibold text-white">Links</h2>
            <p className="mt-2 text-sm text-white/60">
              Best ways to reach me and view my work.
            </p>

            <div className="mt-6 grid gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className={[
                    "group rounded-xl border border-white/10 px-4 py-3 transition",
                    l.variant === "primary"
                      ? "bg-orange-500 text-black hover:bg-orange-400"
                      : "bg-white/5 text-white/80 hover:bg-white/10",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium">{l.label}</div>
                      {l.hint ? (
                        <div
                          className={[
                            "text-xs mt-0.5",
                            l.variant === "primary" ? "text-black/70" : "text-white/50",
                          ].join(" ")}
                        >
                          {l.hint}
                        </div>
                      ) : null}
                    </div>

                    <div
                      className={[
                        "text-sm transition",
                        l.variant === "primary"
                          ? "text-black/70 group-hover:text-black"
                          : "text-white/40 group-hover:text-white/70",
                      ].join(" ")}
                      aria-hidden
                    >
                      →
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Optional: Current focus */}
            <div className={`${glass} ${glassInnerHighlight} mt-6 p-5`}>
              <div className="text-sm font-semibold text-white">Currently focused on</div>
              <div className="mt-2 text-sm text-white/65 leading-6">
                Shipping polished internal systems, improving UX clarity, and building maintainable
                Next.js portfolio modules.
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vincent Nuñez. All rights reserved.
      </footer>
    </main>
  );
}
