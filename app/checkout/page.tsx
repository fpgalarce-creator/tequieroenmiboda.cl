import { templates } from "@/lib/mock-data";

export default function CheckoutPage() {
  const selectedTemplate = templates[0];
  return (
    <section className="section-shell grid gap-6 lg:grid-cols-[1fr_390px]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="font-serif text-4xl">Checkout premium</h1>
        <p className="mt-2 text-white/70">Flujo mock listo para integración real de pago (Stripe/Mercado Pago).</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input placeholder="Nombre completo" className="rounded-xl border border-white/15 bg-black/60 p-3" />
          <input placeholder="Correo" className="rounded-xl border border-white/15 bg-black/60 p-3" />
          <input placeholder="Teléfono" className="rounded-xl border border-white/15 bg-black/60 p-3" />
          <input placeholder="Código de descuento" className="rounded-xl border border-white/15 bg-black/60 p-3" />
        </div>
        <button className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black">Continuar a pago seguro</button>
        {/* Integración futura:
            1) crear endpoint /api/checkout/session
            2) enviar templateId + customer data
            3) redirigir a Stripe Checkout o iniciar preferencia Mercado Pago
        */}
      </div>
      <aside className="rounded-3xl border border-gold/20 bg-[#120f0a] p-7">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Resumen</p>
        <h2 className="mt-3 font-serif text-3xl">{selectedTemplate.name}</h2>
        <p className="mt-1 text-sm text-white/70">URL personalizada + editor + soporte base.</p>
        <div className="mt-6 space-y-2 text-sm text-white/75">
          <p>Subtotal <span className="float-right">US${selectedTemplate.price}</span></p>
          <p>Soporte premium <span className="float-right">US$29</span></p>
          <p className="border-t border-white/15 pt-3 text-base text-gold">Total <span className="float-right">US${selectedTemplate.price + 29}</span></p>
        </div>
      </aside>
    </section>
  );
}
