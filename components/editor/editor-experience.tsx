"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { InvitationPreview, InvitationContent } from "@/components/invitation/invitation-preview";

const initialContent: InvitationContent = {
  coupleNames: "Isidora & Tomás",
  weddingDate: "2026-12-18T18:30:00",
  welcomeText: "Celebremos juntos el inicio de nuestra historia más importante.",
  story: "Nos conocimos en una cafetería del barrio Lastarria. Entre conversaciones infinitas y viajes espontáneos, descubrimos que nuestro lugar favorito siempre sería el mismo: estar juntos.",
  mapUrl: "https://maps.google.com",
  recommendations: "Traer abrigo para la noche\nCalzado cómodo para jardín\nRepelente para exteriores",
  whatsapp: "https://wa.me/56955555555?text=Confirmo%20mi%20asistencia",
  music: "https://open.spotify.com",
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
};

export function EditorExperience() {
  const [content, setContent] = useState<InvitationContent>(initialContent);

  const fields = useMemo(
    () => [
      { key: "coupleNames", label: "Nombres" },
      { key: "weddingDate", label: "Fecha (ISO)" },
      { key: "welcomeText", label: "Bienvenida" },
      { key: "story", label: "Historia" },
      { key: "mapUrl", label: "Link Google Maps" },
      { key: "recommendations", label: "Recomendaciones (una por línea)" },
      { key: "whatsapp", label: "WhatsApp" },
      { key: "music", label: "Música" }
    ] as const,
    []
  );

  const onChange = (key: keyof InvitationContent, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const localUrl = URL.createObjectURL(file);
    setContent((prev) => ({ ...prev, heroImage: localUrl }));
  };

  return (
    <div className="section-shell grid gap-6 lg:grid-cols-[370px_1fr]">
      <aside className="glass h-fit rounded-2xl p-6">
        <h1 className="font-serif text-3xl">Personaliza tu invitación</h1>
        <p className="mt-2 text-sm text-white/65">Editor mock funcional listo para conectar persistencia por API.</p>
        <div className="mt-6 space-y-4">
          {fields.map((field) => (
            <label key={field.key} className="block text-sm">
              <span className="mb-2 block text-white/80">{field.label}</span>
              {field.key === "story" || field.key === "recommendations" || field.key === "welcomeText" ? (
                <textarea
                  className="w-full rounded-xl border border-white/15 bg-black/60 p-3"
                  value={content[field.key]}
                  rows={field.key === "recommendations" ? 4 : 3}
                  onChange={(e) => onChange(field.key, e.target.value)}
                />
              ) : (
                <input
                  className="w-full rounded-xl border border-white/15 bg-black/60 p-3"
                  value={content[field.key]}
                  onChange={(e) => onChange(field.key, e.target.value)}
                />
              )}
            </label>
          ))}
          <label className="block text-sm">
            <span className="mb-2 block text-white/80">Subir portada</span>
            <input type="file" accept="image/*" onChange={onUpload} className="w-full text-sm text-white/70" />
          </label>
        </div>
      </aside>
      <InvitationPreview content={content} />
    </div>
  );
}
