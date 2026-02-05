export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HEADER */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="text-sm font-semibold tracking-tight">
            Vincent
          </div>

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

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">
            Full-Stack Developer · Analyst · Systems Builder
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            I build clean, reliable web systems that ship.
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            I focus on enterprise-grade workflows, forms portals, and internal
            tooling—designed for speed, clarity, and long-term maintainability.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-lg font-semibold tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          A few things I’ve built recently.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Forms Portal",
              desc:
                "Workflow-driven forms system with role-based access and auditability.",
              tags: ["Next.js", "Tailwind", "Enterprise UX"],
            },
            {
              title: "Timekeeping Kiosk",
              desc:
                "Kiosk flow for employees to confirm scheduled TK entries quickly.",
              tags: ["UX", "Kiosk", "Speed"],
            },
            {
              title: "Temporary ID Issuance",
              desc:
                "Guard-driven issuance and return tracking with scan-first UI and logs.",
              tags: ["Angular", "API", "Audit Log"],
            },
            {
              title: "Line Distribution",
              desc:
                "Dynamic filtering UI with stored procedure-backed endpoints.",
              tags: [".NET", "Angular", "SP-driven"],
            },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-neutral-200 p-5 transition-shadow hover:shadow-sm"
            >
              <h3 className="text-base font-semibold">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {project.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-lg font-semibold tracking-tight">
          About
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
          I build software with a strong product mindset—clear requirements,
          predictable behavior, and maintainable architecture. I’m comfortable
          across frontend, backend, and system integrations, especially in
          enterprise environments.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-lg font-semibold tracking-tight">
          Contact
        </h2>

        <p className="mt-2 text-sm text-neutral-600">
          Reach out and I’ll respond promptly.
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
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Vincent. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
