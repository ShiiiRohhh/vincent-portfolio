import { ExperienceAndRecommendations } from "@/components/sections/experience-recommendations";
import { Hero } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Hero />
      <SkillsSection />
      <ProjectsPreview />
      <ExperienceAndRecommendations />

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vincent Nuñez. All rights reserved.
      </footer>
    </main>
  );
}
