import { ButtonLink } from "@/components/ui/button";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/plantillas", label: "Plantillas" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-2xl tracking-wide text-white">tequieroenmiboda</Link>
        <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-gold-soft">{link.label}</Link>
          ))}
        </div>
        <ButtonLink href="/plantillas" className="hidden md:inline-flex">Crear mi invitación</ButtonLink>
      </nav>
    </header>
  );
}
