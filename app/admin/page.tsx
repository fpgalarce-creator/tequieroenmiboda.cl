export default function AdminPage() {
  return (
    <section className="section-shell space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Admin · Mock base</p>
        <h1 className="mt-3 font-serif text-4xl">Panel de gestión tequieroenmiboda</h1>
        <p className="mt-2 text-white/70">Base visual lista para autenticar y conectar CRUD de plantillas, RSVP y contenido.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["Textos", "Imágenes", "Links", "Música", "Fechas", "Ubicación", "Respuestas RSVP", "Plantillas", "Publicaciones"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/50 p-5 text-sm text-white/75">Gestionar {item}</div>
        ))}
      </div>
      <div className="rounded-3xl border border-gold/25 bg-[#120f0a] p-8">
        <h2 className="font-serif text-3xl">Acceso mock</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/15 bg-black/60 p-3" placeholder="Usuario" />
          <input type="password" className="rounded-xl border border-white/15 bg-black/60 p-3" placeholder="Contraseña" />
        </div>
        <button className="mt-5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black">Ingresar</button>
      </div>
    </section>
  );
}
