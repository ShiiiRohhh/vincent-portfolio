export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="text-sm font-semibold tracking-tight">Vincent</div>
          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a className="hover:text-neutral-900" href="#projects">
              Projects
            </a>
            <a className="hover:text-neutral-900" href="#about">
              About
            </a>
            <a className="hover:text-neutral-900" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-600">
            Full-Stack Developer • Analyst • Systems Builder
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            I build clean, reliable web systems that ship.
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            I focus on enterprise-grade workflows, forms portals, and internal
            tooling—designed for speed, clarity, and maintainability.
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
              className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
          Featured Projects
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          A few things I’ve built recently.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Forms Portal",
              desc: "Workflow-driven forms system with role-based access and auditability.",
              tags: ["Next.js", "Tailwind", "Enterprise UX"],
            },
            {
              title: "Timekeeping Kiosk",
              desc: "Kiosk flow for employees to confirm scheduled TK entries quickly.",
              tags: ["UX", "Kiosk", "Speed"],
            },
            {
              title: "Temporary ID Issuance",
              desc: "Guard-driven issuance/return tracking with scan-first UI and logs.",
              tags: ["Angular", "API", "Audit Log"],
            },
            {
              title: "Line Distribution",
              desc: "Dynamic filtering UI with stored procedure-backed endpoints.",
              tags: [".NET", "Angular", "SP-driven"],
            },
          ].map((p) => (
            <article key={p.title} className="rounded-xl border p-5">
              <h3 className="text-base font-semibold text-neutral-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
          About
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-700">
          I build software with a product mindset: clear requirements, clean UI,
          strong logging, and maintainable architecture. I’m comfortable across
          front-end, backend, and integrations—especially in enterprise
          environments.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
          Contact
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Email me and I’ll reply quickly.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:your.email@company.com"
            className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            your.email@company.com
          </a>
          <a
            href="https://github.com/"
            className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Vincent. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
