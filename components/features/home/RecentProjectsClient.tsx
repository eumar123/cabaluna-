"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCoverImage } from "@/components/ui/project-cover-image";
import { Input } from "@/components/ui/input";

type Props = {
  projects: Project[];
};

export function RecentProjectsClient({ projects }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q),
    );
  }, [projects, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Recent Projects
        </h2>
        <label className="flex w-full max-w-xs items-center gap-2 sm:justify-end">
          <span className="sr-only">Search projects</span>
          <span className="text-[var(--muted-foreground)]" aria-hidden>
            🔍
          </span>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            aria-label="Search recent projects"
          />
        </label>
      </div>

      <ul className="space-y-6">
        {filtered.map((project, index) => (
          <li key={`${project.slug}-${index}`}>
            <article className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 sm:grid-cols-[120px_1fr_auto] sm:items-center">
              <div className="mx-auto w-full max-w-[120px] sm:mx-0">
                <ProjectCoverImage
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.title}
                  sizes="120px"
                />
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="text-lg font-semibold underline decoration-[var(--border)] underline-offset-4">
                  <Link
                    href={`/project/${project.slug}`}
                    className="text-[var(--foreground)] hover:text-[var(--accent)]"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {project.shortDescription}
                </p>
              </div>
              <div className="flex justify-end gap-2 sm:flex-col sm:items-end">
                <a
                  href={`https://github.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] hover:bg-[var(--muted)]"
                  aria-label="Repository"
                >
                  GH
                </a>
                <Link
                  href={`/project/${project.slug}`}
                  className="flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] hover:bg-[var(--muted)]"
                  aria-label="Open project"
                >
                  →
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="text-sm text-[var(--muted-foreground)]">
          No projects match “{query}”. Clear the search to see all items.
        </p>
      ) : null}
    </div>
  );
}
