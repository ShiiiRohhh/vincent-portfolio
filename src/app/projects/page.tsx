"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { ProjectDialog } from "@/components/projects/project-dialog";
import { Project, projects } from "@/content/projects";
import { useState } from "react";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-white">Projects</h1>
        <p className="mt-3 max-w-2xl text-white/60">
          A selection of professional and personal projects. Some UI details are
          omitted or marked confidential due to internal usage.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onOpen={() => setSelected(p)}
            />
          ))}
        </div>
      </section>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
