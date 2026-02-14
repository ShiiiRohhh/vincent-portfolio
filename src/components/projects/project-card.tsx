"use client";

import { glass, glassHover, glassInnerHighlight } from "@/components/ui/glass";
import { Project } from "@/content/projects";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  project: Project;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={onOpen}
      className={`${glass} ${glassHover} ${glassInnerHighlight} cursor-pointer p-5`}
    >
      <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        {project.confidential || !project.cover ? (
          <div className="flex h-full items-center justify-center text-sm text-white/60">
            Confidential
          </div>
        ) : (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-white/60">{project.subtitle}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
