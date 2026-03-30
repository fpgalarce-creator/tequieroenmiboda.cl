import Image from "next/image";
import { Template } from "@/types";
import { ButtonLink } from "@/components/ui/button";

export function TemplateCard({ template }: { template: Template }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-gold/50">
      <div className="relative h-56 overflow-hidden">
        <Image src={template.image} alt={template.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">{template.style}</p>
        <h3 className="mt-2 font-serif text-2xl">{template.name}</h3>
        <p className="mt-2 text-sm text-white/70">{template.description}</p>
        <p className="mt-4 text-sm text-gold">Desde US${template.price}</p>
        <div className="mt-5 flex gap-3">
          <ButtonLink href={`/plantillas/${template.slug}`} variant="secondary" className="px-4 py-2 text-xs">Ver demo</ButtonLink>
          <ButtonLink href={`/plantillas/${template.slug}/personalizar`} className="px-4 py-2 text-xs">Personalizar</ButtonLink>
        </div>
      </div>
    </article>
  );
}
