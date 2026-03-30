import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { templates, pricingTiers, testimonials, faqs } from "@/lib/mock-data";
import { TemplateCard } from "@/components/sections/template-card";
import { Check, HeartHandshake, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="bg-hero">
        <div className="section-shell grid items-center gap-8 py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-gold">Invitaciones digitales premium</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-white sm:text-6xl">Haz que su primer clic también sea inolvidable.</h1>
            <p className="mt-5 max-w-xl text-white/70">Diseños de alto impacto, personalización en vivo y una experiencia pensada para emocionar a cada invitado.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/plantillas">Ver plantillas</ButtonLink>
              <ButtonLink href="/plantillas/clasica-elegante/personalizar" variant="secondary">Crear la mía</ButtonLink>
            </div>
          </div>
          <div className="relative rounded-3xl border border-white/10 p-3 shadow-glow">
            <div className="relative h-[460px] overflow-hidden rounded-2xl">
              <Image src={templates[0].image} alt="Mockup premium" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-4 sm:grid-cols-3">
        {[
          ["+1.800", "Parejas que eligieron tequieroenmiboda"],
          ["+120k", "Invitados impactados"],
          ["98%", "Tasa de satisfacción de experiencia"]
        ].map(([value, label]) => (
          <div key={label} className="glass rounded-2xl p-6 text-center">
            <p className="font-serif text-4xl text-gold">{value}</p><p className="mt-2 text-sm text-white/70">{label}</p>
          </div>
        ))}
      </section>

      <section id="como-funciona" className="section-shell">
        <SectionTitle eyebrow="Cómo funciona" title="Simple para ustedes, memorable para todos." />
        <div className="grid gap-5 md:grid-cols-3">
          {["Elige tu diseño", "Personaliza tu invitación", "Comparte y gestiona tu gran día"].map((step, i) => (
            <div key={step} className="glass rounded-2xl p-8">
              <p className="text-xs text-gold">Paso {i + 1}</p><h3 className="mt-2 font-serif text-3xl">{step}</h3>
              <p className="mt-3 text-white/70">Flujo guiado y elegante para publicar en horas, no semanas.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow="Catálogo" title="Plantillas diseñadas para bodas con identidad" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => <TemplateCard key={template.slug} template={template} />)}
        </div>
      </section>

      <section className="section-shell grid gap-8 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Editor en vivo" title="Personaliza cada detalle en tiempo real" subtitle="Sube fotos, edita textos, integra música, ubicación y recomendaciones en minutos." />
          <div className="grid gap-3 sm:grid-cols-2">
            {["Subir foto", "Cambiar nombres", "Editar fecha", "Actualizar texto", "Agregar música", "Agregar galería", "Añadir ubicación"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm"><Check className="h-4 w-4 text-gold" />{item}</div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-black p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Antes / Después</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/50 p-4 text-sm text-white/65">Texto genérico, fecha sin estilo y experiencia plana.</div>
            <div className="rounded-2xl border border-gold/30 bg-black/70 p-4 text-sm text-white">Narrativa emocional, tipografía premium y personalización de marca.</div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow="Funcionalidades" title="Todo lo que necesita una invitación digital de alto nivel" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {["Portada / Hero", "Cuenta regresiva", "Historia de la pareja", "Fecha + ubicación Google Maps", "Recomendaciones con iconos", "Mesa de regalos", "Música integrada", "Galería de fotos", "WhatsApp directo", "RSVP", "URL personalizada"].map((feature) => (
            <div key={feature} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">{feature}</div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-3xl border border-gold/20 bg-gradient-to-r from-[#16120b] to-[#0d0d0d] p-10">
          <SectionTitle eyebrow="Mesa de regalos digital" title="Convierte buenos deseos en experiencias memorables" subtitle="Tus invitados pueden aportar montos definidos o personalizados en una experiencia clara y confiable." />
          <div className="grid gap-4 md:grid-cols-3">
            {["Viaje a la luna", "Nuestra luna de miel", "Cena soñada"].map((gift) => (
              <div key={gift} className="rounded-2xl border border-gold/25 bg-black/40 p-6">
                <HeartHandshake className="h-5 w-5 text-gold" /><p className="mt-3 font-serif text-2xl">{gift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="section-shell">
        <SectionTitle eyebrow="Precios" title="Elige el nivel ideal para tu boda" />
        <div className="grid gap-5 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article key={tier.name} className={`rounded-3xl border p-7 ${tier.highlighted ? "border-gold bg-white/10 shadow-glow" : "border-white/10 bg-white/5"}`}>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">{tier.name}</p>
              <p className="mt-3 font-serif text-4xl">{tier.price}</p>
              <p className="mt-2 text-sm text-white/70">{tier.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">{tier.features.map((f) => <li key={f}>• {f}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow="Testimonios" title="Historias reales, emociones reales" />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="glass rounded-2xl p-6">
              <p className="text-white/80">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-gold">{item.author} · {item.city}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle eyebrow="FAQ" title="Resolvemos lo importante antes de empezar" />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer text-white">{q}</summary>
              <p className="mt-3 text-sm text-white/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <Sparkles className="mx-auto h-6 w-6 text-gold" />
          <h3 className="mt-4 font-serif text-4xl">¿Listos para crear algo extraordinario?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">Conecta diseño, emoción y tecnología para anunciar su gran día con una presencia inolvidable.</p>
          <div className="mt-6 flex justify-center gap-4">
            <ButtonLink href="/plantillas">Explorar plantillas</ButtonLink>
            <ButtonLink href="/contacto" variant="secondary">Hablar con un asesor</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
