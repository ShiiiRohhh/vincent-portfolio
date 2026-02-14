"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { InteractiveImage } from "@/components/projects/interactive-image";
import { glass, glassHover, glassInnerHighlight } from "@/components/ui/glass";
import { projects } from "@/content/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProjectsPreview() {
  const reduce = useReducedMotion();

  // Only show 4 featured (fallback to first 4)
  const featured = projects.filter((p) => p.featured);
  const list = (featured.length ? featured : projects).slice(0, 4);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold text-white">Projects</h2>
          <p className="mt-2 text-white/60">
            Selected work. Some UI details are omitted due to confidentiality.
          </p>
        </div>

        <Link
          href="/projects"
          className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-black hover:bg-orange-400 transition"
        >
          All Projects →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {list.map((p, idx) => (
          <motion.article
            key={p.slug}
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease, delay: idx * 0.05 }}
            className={`${glass} ${glassHover} ${glassInnerHighlight} p-5`}
          >
            {/* Interactive image header */}
            <InteractiveImage
              title={p.title}
              images={p.gallery}
              confidential={p.confidential}
            />

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/60">{p.subtitle}</p>
              </div>

              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {p.year}
              </span>
            </div>

            {/* Tech chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <Link
                href="/projects"
                className="text-sm font-medium text-white/80 hover:text-white transition"
              >
                View case study
              </Link>

              <span className="text-xs text-white/40">Preview</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
