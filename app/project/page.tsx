import { ProjectFeaturedSection } from "@/components/features/project/ProjectFeaturedSection";
import { ProjectGridSection } from "@/components/features/project/ProjectGridSection";
import { projects } from "@/lib/projects";

export default function ProjectPage() {
  return (
    <>
      <ProjectGridSection />
      <ProjectFeaturedSection project={projects[0]} />
    </>
  );
}
