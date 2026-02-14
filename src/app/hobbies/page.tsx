"use client";

import { glass, glassHover, glassInnerHighlight } from "@/components/ui/glass";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        {subtitle ? <p className="text-white/60">{subtitle}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function HobbyCard({
  emoji,
  title,
  description,
  chips,
  imageSrc,
  delay = 0,
}: {
  emoji: string;
  title: string;
  description: string;
  chips: string[];
  imageSrc: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease, delay }}
      className={`${glass} ${glassHover} ${glassInnerHighlight} overflow-hidden`}
    >
      {/* Image header */}
      <div className="relative h-40 w-full border-b border-white/10">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover opacity-90"
          priority={false}
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span aria-hidden>{emoji}</span>
          <span>{title}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-white/65 leading-7">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function HobbiesPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start"
        >
          <div>
            <p className="text-orange-400 font-semibold">Beyond coding</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Hobbies & Interests
            </h1>

            <p className="mt-6 max-w-2xl leading-7 text-white/65">
              I’m not only a “code person”. I enjoy exploring and seeing outputs
              come to life when systems are deployed—but outside of work, I’m
              competitive by nature, deeply music-driven, and I value time with
              close friends.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              I’m usually at home practicing guitar or playing games. I go out
              when it’s with friends—especially for anime conventions and shared
              events.
            </p>

            {/* Quick chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Competitive gamer",
                "Guitar is my passion",
                "Anime + conventions",
                "Home-focused",
                "Friends-first outings",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Favorites panel */}
          <motion.aside
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className={`${glass} ${glassInnerHighlight} p-6`}
          >
            <h3 className="text-lg font-semibold text-white">Favorites</h3>
            {/* <p className="mt-2 text-sm text-white/60">
              Placeholder for now — we can replace with your real list later.
            </p> */}

            <div className="mt-5 space-y-5">
              <div>
                <div className="text-white/80 font-medium">Games</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Ranked", "Competitive FPS", "MOBA", "RPG"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-white/80 font-medium">Guitar</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Electric", "Practice sessions", "Riffs", "Technique"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-white/80 font-medium">Anime</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Action", "Slice of life", "Conventions", "Friends"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </section>

      {/* FEATURE CARDS */}
      <Section
        title="What I do outside work"
        subtitle="These hobbies keep me sharp, focused, and creatively grounded."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <HobbyCard
            emoji="🎮"
            title="Competitive Gaming"
            imageSrc="/hobbies/gaming.jpg"
            description="I like ranking high in every game I play. I’m competitive because I believe I can improve with discipline—practice, iteration, and learning from mistakes."
            chips={["Focus", "Adaptation", "Performance mindset"]}
            delay={0}
          />

          <HobbyCard
            emoji="🎸"
            title="Guitar"
            imageSrc="/hobbies/guitar.jpg"
            description="Music is extremely important to me—honestly, it’s more important than programming. Guitar is my passion and my reset button. It keeps me calm, consistent, and creative."
            chips={["Discipline", "Creativity", "Consistency"]}
            delay={0.05}
          />

          <HobbyCard
            emoji="🗾"
            title="Anime & Conventions"
            imageSrc="/hobbies/anime.jpg"
            description="I watch anime and attend conventions during leisure time—usually with friends. It’s how I recharge socially and enjoy shared experiences outside work."
            chips={["Community", "Inspiration", "Leisure"]}
            delay={0.1}
          />
        </div>
      </Section>

      {/* WORK TRANSLATION */}
      <Section
        title="How these hobbies translate to work"
        subtitle="A quick bridge between personality and engineering habits."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease }}
            className={`${glass} ${glassInnerHighlight} p-6`}
          >
            <h3 className="text-lg font-semibold text-white">
              Competitive mindset → iterative improvement
            </h3>
            <p className="mt-3 text-white/65 leading-7">
              Ranking systems reward consistency and learning. I bring that same
              approach to engineering: measure, adjust, improve—then ship.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease, delay: 0.05 }}
            className={`${glass} ${glassInnerHighlight} p-6`}
          >
            <h3 className="text-lg font-semibold text-white">
              Music practice → discipline + focus
            </h3>
            <p className="mt-3 text-white/65 leading-7">
              Practicing guitar teaches patience, repetition, and precision—skills
              that map directly to debugging, refactoring, and building stable
              systems.
            </p>
          </motion.div>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vincent Nuñez. All rights reserved.
      </footer>
    </main>
  );
}
