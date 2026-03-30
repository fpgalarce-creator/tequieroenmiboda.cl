export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-white/70">{subtitle}</p> : null}
    </div>
  );
}
