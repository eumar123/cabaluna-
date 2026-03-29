import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGridClient } from "@/components/features/project/ProjectGridClient";
import { projects } from "@/lib/projects";

export function ProjectGridSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading>My Project</SectionHeading>
        <ProjectGridClient projects={projects} initialCount={6} />
      </div>
    </section>
  );
}
