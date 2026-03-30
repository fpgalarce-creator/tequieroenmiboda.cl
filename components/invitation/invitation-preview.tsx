import Image from "next/image";
import { Countdown } from "@/components/invitation/countdown";
import { MapPin, Music2, Gift, MessageCircleHeart } from "lucide-react";

export type InvitationContent = {
  coupleNames: string;
  weddingDate: string;
  welcomeText: string;
  story: string;
  mapUrl: string;
  recommendations: string;
  whatsapp: string;
  music: string;
  heroImage: string;
};

export function InvitationPreview({ content }: { content: InvitationContent }) {
  const recommendations = content.recommendations
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#131313] to-[#090909] shadow-glow">
      <section className="relative min-h-[300px] p-10">
        <Image src={content.heroImage} alt="Portada de invitación" fill className="object-cover opacity-45" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Nuestra boda</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl text-white md:text-5xl">{content.coupleNames}</h2>
          <p className="mt-4 max-w-xl text-white/80">{content.welcomeText}</p>
          <div className="mt-6"><Countdown targetDate={content.weddingDate} /></div>
        </div>
      </section>
      <section className="grid gap-8 p-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 font-serif text-2xl">Nuestra historia</h3>
          <p className="text-sm text-white/75">{content.story}</p>
          <a href={content.mapUrl} className="mt-4 inline-flex items-center gap-2 text-sm text-gold" target="_blank">
            <MapPin className="h-4 w-4" /> Ver ubicación en Google Maps
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h4 className="mb-3 text-sm uppercase tracking-[0.2em] text-gold">Recomendaciones</h4>
          <ul className="space-y-2 text-sm text-white/75">
            {recommendations.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      </section>
      <section className="grid gap-4 border-t border-white/10 p-8 md:grid-cols-3">
        <div className="rounded-xl bg-white/5 p-4"><Gift className="mb-2 h-4 w-4 text-gold" /> Mesa de regalos activa</div>
        <a href={content.music} target="_blank" className="rounded-xl bg-white/5 p-4"><Music2 className="mb-2 h-4 w-4 text-gold" /> Reproducir música</a>
        <a href={content.whatsapp} target="_blank" className="rounded-xl bg-white/5 p-4"><MessageCircleHeart className="mb-2 h-4 w-4 text-gold" /> RSVP por WhatsApp</a>
      </section>
    </article>
  );
}
