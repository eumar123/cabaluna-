import { AboutMeSection } from "@/components/features/about/AboutMeSection";
import { ExperienceSection } from "@/components/features/about/ExperienceSection";
import { SkillsSection } from "@/components/features/about/SkillsSection";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
