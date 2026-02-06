"use client";

import { glass, glassHover, glassInnerHighlight } from "@/components/ui/glass";
import { projects } from "@/content/projects";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function ProjectsPreview() {
  const reduce = useReducedMotion();
  const preview = projects.slice(0, 4);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-white">Projects</h2>
          <p className="mt-2 text-white/60">
            Selected work. Some UI details are omitted due to confidentiality.
          </p>
        </div>

        <Link
          href="/projects"
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-black hover:bg-orange-400 transition"
        >
          All Projects →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {preview.map((p, idx) => (
          <motion.article
            key={p.slug}
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(idx * 0.05, 0.15) }}
            className={`${glass} ${glassHover} ${glassInnerHighlight} p-6`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-white/60">{p.subtitle}</p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {p.year}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href={`/projects/${p.slug}`}
                className="text-sm font-medium text-white/80 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition"
              >
                View case study
              </Link>

              <div className="text-xs text-white/40">Preview</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
