import { projects } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug: rawSlug } = await params; // ✅ unwrap params Promise
  const slug = decodeURIComponent(rawSlug ?? "").trim().toLowerCase();

  const project = projects.find((p) => p.slug.toLowerCase() === slug);

  if (!slug || !project) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-xl font-semibold">Project not found</h1>
          <p className="mt-2 text-sm text-neutral-600">
            The project slug does not exist:{" "}
            <span className="font-mono">{JSON.stringify(rawSlug ?? "")}</span>
          </p>

          <Link
            href="/projects"
            className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link
            href="/projects"
            className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
          >
            ← Projects
          </Link>

          <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
            {project.year}
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
          {project.subtitle}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-neutral-900">Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-neutral-900">Preview</h2>

            {!project.gallery?.length ? (
              <p className="mt-3 text-sm text-neutral-600">
                Screenshots are omitted or limited due to confidentiality.
              </p>
            ) : (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((img) => (
                  <div
                    key={img.src}
                    className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
