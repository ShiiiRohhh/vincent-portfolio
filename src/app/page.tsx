import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/content/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Vincent
          </Link>

          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#projects" className="hover:text-neutral-900">
              Projects
            </a>
            <a href="#about" className="hover:text-neutral-900">
              About
            </a>
            <a href="#contact" className="hover:text-neutral-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="text-sm font-medium text-neutral-500">
            Full-Stack Developer · Analyst · Systems Builder
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            I build clean, reliable web systems that ship.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            I focus on enterprise-grade workflows, portals, and internal tooling—designed
            for speed, clarity, and long-term maintainability.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              View Projects
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              All Projects
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Featured Projects</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Selected work focused on enterprise UX, workflow design, and reliability.
              </p>
            </div>

            <Link
              href="/projects"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900"
            >
              View all
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((p, idx) => (
            <Reveal key={p.slug} delay={Math.min(idx * 0.04, 0.16)}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <h2 className="text-lg font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
            I build systems with a product mindset: clear requirements, predictable behavior,
            audit-friendly flows, and maintainable architecture. I’m comfortable across frontend,
            backend, and integrations—especially in enterprise environments.
          </p>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Email me and I’ll respond promptly.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:your.email@domain.com"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              your.email@domain.com
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Vincent. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
