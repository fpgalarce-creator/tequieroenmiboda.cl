import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL("https://tequieroenmiboda.cl"),
  title: "tequieroenmiboda | Invitaciones digitales premium",
  description: "Plataforma premium para crear invitaciones digitales de matrimonio personalizables con URL propia.",
  openGraph: {
    title: "tequieroenmiboda",
    description: "Plantillas premium, editor en vivo y checkout listo para integración de pago.",
    url: "https://tequieroenmiboda.cl",
    siteName: "tequieroenmiboda"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
