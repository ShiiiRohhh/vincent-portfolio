"use client";

import { glass, glassInnerHighlight } from "@/components/ui/glass";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // ✅ typed cubic-bezier (easeOut-like)
    },
  },
};


export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pt-14 pb-16">
      <div className="flex items-center justify-center">
        {/* Pill nav (mockup-like) */}
        <div className={`${glass} ${glassInnerHighlight} rounded-full px-2 py-2`}>
          <div className="flex items-center gap-2 text-sm">
            <a className="rounded-full bg-white/10 px-4 py-2 text-white" href="#home">Home</a>
            <a className="rounded-full px-4 py-2 text-white/75 hover:text-white" href="#projects">Projects</a>
            <a className="rounded-full px-4 py-2 text-white/75 hover:text-white" href="#hobbies">Hobbies</a>
            <a className="rounded-full px-4 py-2 text-white/75 hover:text-white" href="#about">About Me</a>
          </div>
        </div>
      </div>

      <motion.div
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
        className="mt-20 grid items-center gap-10 lg:grid-cols-2"
      >
        <div>
          <motion.p variants={item} className="text-orange-400 font-semibold">
            Hi there, I’m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            Vincent Nuñez
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg text-white/80">
            <span className="text-cyan-400 font-semibold">Web Developer</span>{" "}
            <span className="text-white/50">|</span>{" "}
            <span className="text-orange-400 font-semibold">Software Developer</span>
            <span className="text-white/50"> • </span>
            <span className="text-white/70">Graphic Designer | Guitarist</span>
          </motion.p>

          {/* Hero paragraphs (your drafted copy) */}
          <motion.p variants={item} className="mt-6 max-w-xl leading-7 text-white/65">
            I’m a software developer focused on building clean, reliable, and maintainable web
            systems. I specialize in internal applications, workflow-driven platforms, and real-world
            tools where clarity, performance, and long-term stability matter.
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl leading-7 text-white/65">
            I’ve worked extensively with Blazor WebAssembly, ASP.NET Core APIs, and modern frontend
            frameworks—integrating business logic with structured backend systems. Outside of coding,
            design and music keep my thinking sharp and grounded.
          </motion.p>
        </div>

        {/* Right photo / PNG block */}
        <motion.div variants={item} className="flex justify-center lg:justify-end">
          <div className={`${glass} ${glassInnerHighlight} w-[280px] sm:w-[320px] p-4`}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
              {/* Put your image in public/profile.png */}
              <Image
                src="/profile.png"
                alt="Vincent Nuñez"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll down */}
      <div className="mt-16 flex justify-center text-white/50">
        <div className="flex items-center gap-2 text-sm">
          <span>Scroll Down</span>
          <span aria-hidden>↓</span>
        </div>
      </div>
    </section>
  );
}
