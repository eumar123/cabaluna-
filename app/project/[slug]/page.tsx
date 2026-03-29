import { notFound } from "next/navigation";
import { ProjectFeaturedSection } from "@/components/features/project/ProjectFeaturedSection";
import { getProjectBySlug } from "@/lib/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectFeaturedSection project={project} />;
}
