import { ProjectCoverImage } from "@/components/ui/project-cover-image";
import type { Project } from "@/lib/projects";

export function ProjectFeaturedSection({ project }: { project: Project }) {
  return (
    <section className="border-t border-[var(--border)] py-12 sm:py-16">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start">
        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <ProjectCoverImage
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            aspectClassName="aspect-square"
            sizes="280px"
          />
        </div>
        <div className="min-w-0 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {project.title}
            </h2>
            <div className="mt-3 h-px w-full bg-[var(--border)]" />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
              descriptions
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--foreground)]">
              {project.descriptions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
              Key Features
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--foreground)]">
              {project.keyFeatures.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
