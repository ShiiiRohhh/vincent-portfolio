import { HoverCard } from "@/components/motion/hover-card";
import type { Project } from "@/content/projects";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <HoverCard>
      <article className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-neutral-900">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {project.subtitle}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
            {project.year}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900"
          >
            View case study
          </Link>
        </div>
      </article>
    </HoverCard>
  );
}
