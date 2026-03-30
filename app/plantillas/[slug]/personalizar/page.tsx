import { notFound } from "next/navigation";
import { templates } from "@/lib/mock-data";
import { EditorExperience } from "@/components/editor/editor-experience";

export default async function PersonalizePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  if (!template) notFound();

  return <EditorExperience />;
}
