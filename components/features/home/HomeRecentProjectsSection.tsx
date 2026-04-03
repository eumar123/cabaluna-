import { RecentProjectsClient } from "@/components/features/home/RecentProjectsClient";
import { projects } from "@/lib/projects";

export function HomeRecentProjectsSection() {
  const recent = projects.slice(0, 3);

  return (
    <section className="bg-[var(--background)] py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <RecentProjectsClient projects={recent} />
      </div>
    </section>
  );
}
