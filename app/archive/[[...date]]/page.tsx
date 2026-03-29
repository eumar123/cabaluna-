import { ArchiveBrowseSection } from "@/components/features/archive/ArchiveBrowseSection";

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ date?: string[] }>;
}) {
  const { date } = await params;

  return <ArchiveBrowseSection segments={date} />;
}
