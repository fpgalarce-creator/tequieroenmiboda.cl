import { PricingTier, Template } from "@/types";

export const templates: Template[] = [
  {
    slug: "clasica-elegante",
    name: "Clásica Elegante",
    style: "Sofisticación atemporal",
    description: "Tipografía editorial, acentos dorados y una experiencia ceremonial impecable.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    price: 149,
    accent: "from-[#c9ab74] to-[#f7ead2]"
  },
  {
    slug: "minimal-editorial",
    name: "Minimal Editorial",
    style: "Limpio y moderno",
    description: "Diseño minimalista con composición premium y navegación fluida para invitados.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    price: 139,
    accent: "from-white to-zinc-500"
  },
  {
    slug: "romance-nocturno",
    name: "Romance Nocturno",
    style: "Dramático y emotivo",
    description: "Fondos oscuros, microanimaciones y presencia visual para eventos de noche.",
    image: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1200&q=80",
    price: 159,
    accent: "from-[#b887ff] to-[#f0d8ff]"
  },
  {
    slug: "dorado-moderno",
    name: "Dorado Moderno",
    style: "Luz y exclusividad",
    description: "Contraste negro/dorado con bloques visuales de alta conversión y estatus premium.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    price: 169,
    accent: "from-gold to-[#fff0ce]"
  },
  {
    slug: "jardin-sofisticado",
    name: "Jardín Sofisticado",
    style: "Natural contemporáneo",
    description: "Texturas orgánicas, fotografía protagonista y narrativa romántica envolvente.",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80",
    price: 149,
    accent: "from-[#9ec89b] to-[#f4f6ef]"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Esencial",
    price: "US$149",
    description: "Para una invitación elegante y funcional en tiempo récord.",
    features: ["1 plantilla premium", "Editor visual", "URL personalizada", "RSVP básico"]
  },
  {
    name: "Premium",
    price: "US$219",
    description: "La opción preferida para experiencias completas y memorables.",
    highlighted: true,
    features: ["Todo en Esencial", "Cuenta regresiva + música", "Mesa de regalos digital", "Soporte prioritario"]
  },
  {
    name: "Signature",
    price: "US$349",
    description: "Curaduría avanzada, personalización total y enfoque de alto impacto.",
    features: ["Todo en Premium", "Ajustes de diseño dedicados", "Integraciones externas", "Acompañamiento concierge"]
  }
];

export const testimonials = [
  {
    quote: "Nuestros invitados quedaron fascinados; parecía una experiencia de marca, no una simple invitación.",
    author: "Camila & Andrés",
    city: "Santiago"
  },
  {
    quote: "El editor fue intuitivo y elegante. En una tarde teníamos nuestra landing lista para compartir.",
    author: "Fernanda & Martín",
    city: "Viña del Mar"
  },
  {
    quote: "La mesa de regalos digital aumentó muchísimo los aportes. Todo se sintió premium y confiable.",
    author: "Paula & Nicolás",
    city: "Concepción"
  }
];

export const faqs = [
  ["¿Cómo funciona el proceso?", "Eliges plantilla, personalizas en vivo, pagas y enviamos a publicación tu URL final."],
  ["¿Puedo personalizar todo?", "Sí. Puedes editar nombres, fecha, texto, galería, música, ubicación y recomendaciones."],
  ["¿Cómo se realiza el pago?", "Hoy el checkout es mock, pero la arquitectura está lista para Stripe o Mercado Pago."],
  ["¿Incluye URL personalizada?", "Sí, cada invitación contempla una URL única para compartir por WhatsApp o correo."],
  ["¿Puedo agregar música?", "Sí, puedes configurar una URL de audio para ambientar la experiencia de tus invitados."],
  ["¿Cómo funciona el RSVP?", "Incluimos formulario y envío rápido a WhatsApp; luego puede conectarse a panel administrador."],
  ["¿Incluye mesa de regalos?", "Sí, con ítems sugeridos y aportes libres o montos definidos por los novios."],
  ["¿Cuánto demora?", "Con contenido listo, puedes publicar en horas; también ofrecemos personalización asistida." ]
];
