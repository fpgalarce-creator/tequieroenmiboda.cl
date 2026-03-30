export default function ContactPage() {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Contacto</p>
        <h1 className="mt-3 font-serif text-5xl">Hablemos de su boda</h1>
        <p className="mt-3 text-white/70">Cuéntanos su visión y diseñamos una experiencia digital a la altura del gran día.</p>
        <a href="https://wa.me/56955555555" className="mt-6 inline-flex rounded-full border border-gold/40 px-5 py-3 text-sm text-gold">Hablar por WhatsApp</a>
      </div>
      <form className="glass rounded-3xl p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/15 bg-black/50 p-3" placeholder="Nombre" />
          <input className="rounded-xl border border-white/15 bg-black/50 p-3" placeholder="Correo" />
        </div>
        <input className="mt-4 w-full rounded-xl border border-white/15 bg-black/50 p-3" placeholder="Fecha tentativa" />
        <textarea className="mt-4 w-full rounded-xl border border-white/15 bg-black/50 p-3" rows={5} placeholder="Cuéntanos tu idea" />
        <button className="mt-5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black">Enviar consulta</button>
      </form>
    </section>
  );
}
