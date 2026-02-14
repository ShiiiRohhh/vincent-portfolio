"use client";

import { glass, glassInnerHighlight } from "@/components/ui/glass";
import { Project } from "@/content/projects";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className={`${glass} ${glassInnerHighlight} max-w-3xl w-full p-6`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-white/60">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cover / Confidential */}
          <div className="mt-6">
            {project.confidential || !project.cover ? (
              <div className="flex h-56 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60">
                Confidential Project
              </div>
            ) : (
              <div className="relative h-56 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Tech chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="mt-6 space-y-2 text-white/75">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Links */}
          {project.links && (
            <div className="mt-6 flex gap-4">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  className="text-sm font-medium text-cyan-300 hover:underline"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
