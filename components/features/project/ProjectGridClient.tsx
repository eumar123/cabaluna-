"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCoverImage } from "@/components/ui/project-cover-image";
import { Button } from "@/components/ui/button";

type Props = {
  projects: Project[];
  initialCount?: number;
};

export function ProjectGridClient({ projects, initialCount = 6 }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects.length : Math.min(initialCount, projects.length);
  const canExpand = projects.length > initialCount;

  const items = projects.slice(0, visible);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, index) => (
          <article
            key={`${project.slug}-${index}`}
            className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]"
          >
            <Link href={`/project/${project.slug}`} className="block">
              <ProjectCoverImage
                src={project.imageSrc}
                alt={project.imageAlt ?? project.title}
                aspectClassName="aspect-[4/3]"
                className="rounded-none border-0"
                sizes="(max-width: 1024px) 50vw, 320px"
              />
            </Link>
            <div className="space-y-2 p-4">
              <h3 className="font-semibold text-[var(--foreground)]">
                <Link
                  href={`/project/${project.slug}`}
                  className="hover:text-[var(--accent)]"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                Project {index + 1}
              </p>
              <div className="space-y-1">
                <p className="h-2 rounded bg-[var(--muted)]" />
                <p className="h-2 w-4/5 rounded bg-[var(--muted)]" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {canExpand ? (
        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show fewer projects" : "View More Projects"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
