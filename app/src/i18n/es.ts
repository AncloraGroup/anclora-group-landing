import type { Dictionary } from './types'
import { principles } from '../data/principles'

const es: Dictionary = {
  meta: {
    title: 'Anclora Group · Tecnología aplicada para operar con claridad',
    description:
      'Anclora Group crea productos digitales propios para fiscalidad, automatización, eficiencia, inteligencia inmobiliaria, contenido y operaciones empresariales.',
  },
  nav: {
    ecosystem: 'Ecosistema',
    products: 'Productos',
    method: 'Método',
    founder: 'Founder',
    contact: 'Contacto',
    contactCta: 'Contactar',
  },
  hero: {
    eyebrow: 'Founder-led technology group',
    title: 'Anclora Group',
    tagline: 'Tecnología aplicada para operar con más claridad, control e inteligencia.',
    subtitle:
      'Creamos productos digitales propios para transformar procesos complejos en sistemas claros, útiles y escalables.',
    ctaPrimary: 'Explorar el ecosistema',
    ctaSecondary: 'Contactar con Antonio',
    microcopy: 'Founder-led technology group · Built from Mallorca · Designed for practical intelligence',
  },
  ecosystem: {
    title: 'Un ecosistema de productos conectados por una misma idea: reducir fricción real.',
    text: 'Anclora Group combina producto, automatización, datos e inteligencia aplicada para construir herramientas prácticas en áreas donde la claridad operativa marca la diferencia.',
  },
  products: {
    title: 'Productos destacados',
    ctaView: 'Ver producto',
  },
  infrastructure: {
    title: 'La capa operativa que conecta el ecosistema.',
    text: 'Bajo cada producto existe una capa común de intake, datos, señales, automatización y control operativo.',
  },
  method: {
    title: 'Método Anclora',
    steps: [
      { title: 'Observar', description: 'Detectar fricción real y contexto operativo.' },
      { title: 'Diseñar', description: 'Convertir el problema en un producto mínimo útil.' },
      { title: 'Anclar', description: 'Crear estructura, datos, flujos y control.' },
      { title: 'Escalar', description: 'Preparar el sistema para crecer sin perder claridad.' },
    ],
  },
  founder: {
    title: 'Founder-led, product-driven.',
    body:
      'Anclora Group está impulsado por Antonio Ballesteros, consultor senior especializado en sistemas Oracle, arquitectura técnica, automatización e inteligencia artificial aplicada. Desde Mallorca, desarrolla un ecosistema de productos digitales propios con una premisa clara: transformar procesos complejos en herramientas útiles, visuales y operativas.',
  },
  principles: {
    title: 'Principios',
    items: principles,
  },
  contact: {
    title: 'Construyamos con claridad.',
    body: 'Para colaboraciones, producto, pilotos o conversaciones estratégicas sobre el ecosistema Anclora, contacta directamente con Antonio.',
    email: 'antonio@anclora.com',
    cta: 'Contactar con Antonio',
    subject: 'Consulta desde Anclora Group',
  },
  footer: {
    claim: 'Anclora Group · Tecnología aplicada para operar con claridad.',
    copyright: `© ${new Date().getFullYear()} Anclora Group. Todos los derechos reservados.`,
  },
}

export default es
