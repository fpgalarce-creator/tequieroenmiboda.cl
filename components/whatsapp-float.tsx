import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/56955555555?text=Hola%20quiero%20crear%20mi%20invitaci%C3%B3n%20digital"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/85 px-4 py-3 text-sm text-white shadow-glow transition hover:-translate-y-0.5"
    >
      <MessageCircle className="h-4 w-4 text-gold" />
      WhatsApp
    </Link>
  );
}
