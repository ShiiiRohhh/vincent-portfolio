"use client";

import { glass, glassInnerHighlight } from "@/components/ui/glass";
import { experience } from "@/content/experience";
import { recommendations } from "@/content/recommendations";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function ExperienceAndRecommendations() {
  const reduce = useReducedMotion();

  return (
    <section id="hobbies" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold text-white">Work Experience</h2>

      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`${glass} ${glassInnerHighlight} mt-8 p-8`}
      >
        <div className="grid gap-6 lg:grid-cols-[80px_1fr]">
          {/* Vertical role */}
          <div className="flex items-center justify-center">
            <div className="text-orange-400 font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180">
              {experience.role}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* optional: company logo */}
                <div className="text-white font-semibold text-xl">{experience.company}</div>
              </div>

              <div className="text-white/80 font-semibold">{experience.period}</div>
            </div>

            <ul className="mt-5 space-y-2 text-white/75">
              {experience.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tech icons row (expects icons, falls back to text) */}
            <div className="mt-7 flex flex-wrap gap-3">
              {experience.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recommendations */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-white">Recommendations</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {recommendations.map((r, idx) => (
            <motion.figure
              key={r.name}
              initial={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(idx * 0.05, 0.15) }}
              className={`${glass} ${glassInnerHighlight} p-6`}
            >
              <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/10">
                  {/* dummy avatar */}
                  <Image
                    src="/avatar-placeholder.png"
                    alt={`${r.name} avatar`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="text-cyan-300 font-semibold">{r.name}</div>
                  <div className="text-white/50 text-sm">{r.role}</div>
                  <blockquote className="mt-3 text-white/75 leading-7">
                    “{r.quote}”
                  </blockquote>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
