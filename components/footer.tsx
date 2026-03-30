import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-white">tequieroenmiboda</p>
          <p className="mt-3 text-sm text-white/65">Invitaciones digitales premium para matrimonios inolvidables.</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-gold">Explorar</p>
          <div className="space-y-2 text-sm text-white/70">
            <Link href="/">Inicio</Link><br />
            <Link href="/plantillas">Plantillas</Link><br />
            <Link href="/checkout">Checkout</Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-gold">Contacto</p>
          <p className="text-sm text-white/70">hola@tequieroenmiboda.cl</p>
          <p className="text-sm text-white/70">+56 9 5555 5555</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-gold">Redes</p>
          <p className="text-sm text-white/70">Instagram · Pinterest · TikTok</p>
        </div>
      </div>
    </footer>
  );
}
