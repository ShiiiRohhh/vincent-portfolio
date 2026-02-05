"use client";

import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";
import { useMemo, useState } from "react";

function uniqTags() {
  const set = new Set<string>();
  for (const p of projects) for (const t of p.tags) set.add(t);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export default function ProjectsPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("All");

  const tags = useMemo(() => ["All", ...uniqTags()], []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesText =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));

      const matchesTag = tag === "All" || p.tags.includes(tag);

      return matchesText && matchesTag;
    });
  }, [q, tag]);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Reveal>
            <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
            <p className="mt-2 text-sm text-neutral-600">
              Case-study style summaries. Some UI details are intentionally omitted due to confidentiality.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search projects, tags, keywords..."
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900 sm:max-w-sm"
              />

              <div className="flex flex-wrap gap-2">
                {tags.map((t) => {
                  const active = t === tag;
                  return (
                    <button
                      key={t}
                      onClick={() => setTag(t)}
                      className={
                        active
                          ? "rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white"
                          : "rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
                      }
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((p, idx) => (
            <Reveal key={p.slug} delay={Math.min(idx * 0.03, 0.18)}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
