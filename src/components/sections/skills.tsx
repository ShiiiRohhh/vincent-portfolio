"use client";

import { glass, glassHover, glassInnerHighlight } from "@/components/ui/glass";
import { skillGroups } from "@/content/skills";
import { techStack } from "@/content/tech";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

function accentBar(accent: string) {
  switch (accent) {
    case "orange":
      return "bg-orange-500";
    case "cyan":
      return "bg-cyan-400";
    case "white":
      return "bg-white";
    default:
      return "bg-white/40";
  }
}

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Tech stack icon wall */}
        <div>
          <h2 className="text-3xl font-semibold text-white">Tech Stack</h2>

          <div className="mt-8 grid grid-cols-4 gap-4 sm:grid-cols-5">
            {techStack.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: Math.min(idx * 0.02, 0.18) }}
                className={`${glass} ${glassHover} ${glassInnerHighlight} flex items-center justify-center p-4`}
                title={t.name}
              >
                {t.icon ? (
                  <div className="relative h-10 w-10 opacity-90">
                    <Image src={t.icon} alt={`${t.name} icon`} fill className="object-contain" />
                  </div>
                ) : (
                  <span className="text-xs text-white/80">{t.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill proficiency bars */}
        <div>
          <h2 className="text-3xl font-semibold text-white text-center lg:text-left">
            Skill Proficiency
          </h2>

          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3
                  className={[
                    "text-lg font-semibold",
                    group.accent === "orange" ? "text-orange-400"
                    : group.accent === "cyan" ? "text-cyan-400"
                    : group.accent === "white" ? "text-white"
                    : "text-white/45"
                  ].join(" ")}
                >
                  {group.title}
                </h3>

                <div className="mt-4 space-y-4">
                  {group.items.map((s) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between text-sm text-white/80">
                        <span>{s.label}</span>
                        <span className="text-white/60">{s.value}%</span>
                      </div>

                      <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={reduce ? undefined : { width: 0 }}
                          whileInView={reduce ? undefined : { width: `${s.value}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className={`h-full ${accentBar(group.accent)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
