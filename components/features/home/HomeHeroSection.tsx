import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export function HomeHeroSection() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-center sm:px-6 lg:gap-16 lg:py-20">
        <div className="mx-auto w-full max-w-[220px] sm:mx-0">
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-sm">
            <Image
              src="/profile-photo.png"
              alt="Profile photo"
              width={440}
              height={550}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-center text-xs text-[var(--muted-foreground)] sm:text-left">
            profile
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 sm:text-4xl">
            Welcome To My Profile
          </h1>
          <p className="text-lg text-[var(--muted-foreground)]">{SITE.tagline}</p>
          <div>
            <Link
              href="/project"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-8 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            >
              View my Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
