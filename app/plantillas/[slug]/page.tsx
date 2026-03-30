import { notFound } from "next/navigation";
import { templates } from "@/lib/mock-data";
import { InvitationPreview } from "@/components/invitation/invitation-preview";
import { ButtonLink } from "@/components/ui/button";

export default async function TemplateDemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  if (!template) notFound();

  return (
    <section className="section-shell space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-gold">Demo plantilla</p>
          <h1 className="font-serif text-5xl">{template.name}</h1>
          <p className="mt-2 text-white/70">{template.description}</p>
        </div>
        <ButtonLink href={`/plantillas/${template.slug}/personalizar`}>Personalizar esta plantilla</ButtonLink>
      </div>
      <InvitationPreview
        content={{
          coupleNames: "Valentina & Lucas",
          weddingDate: "2026-11-28T18:00:00",
          welcomeText: "Queremos celebrar el inicio de nuestra nueva etapa junto a quienes más amamos.",
          story: "Después de años de aventuras, decidimos dar el sí en una ceremonia íntima y sofisticada.",
          mapUrl: "https://maps.google.com",
          recommendations: "Llevar abrigo ligero\nZapatos cómodos\nLlegar 30 min antes",
          whatsapp: "https://wa.me/56955555555?text=Confirmo%20mi%20asistencia",
          music: "https://open.spotify.com",
          heroImage: template.image
        }}
      />
    </section>
  );
}
