import { SectionTitle } from "@/components/ui/section-title";
import { templates } from "@/lib/mock-data";
import { TemplateCard } from "@/components/sections/template-card";

export default function TemplatesPage() {
  return (
    <section className="section-shell">
      <SectionTitle eyebrow="Catálogo completo" title="Elige la plantilla que mejor cuenta su historia" subtitle="Cinco estilos premium listos para personalizar y publicar con URL propia." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => <TemplateCard key={template.slug} template={template} />)}
      </div>
    </section>
  );
}
