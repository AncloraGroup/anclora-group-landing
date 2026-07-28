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
    instrumentCaption: 'Cada marca del anillo representa una línea de negocio activa del ecosistema Anclora.',
  },
  ecosystem: {
    title: 'Un ecosistema de productos conectados por una misma idea: reducir fricción real.',
    text: 'Anclora Group combina producto, automatización, datos e inteligencia aplicada para construir herramientas prácticas en áreas donde la claridad operativa marca la diferencia.',
    lines: {
      'fiscal-compliance': { name: 'Fiscalidad y Cumplimiento', description: 'Fiscalidad, facturación y cumplimiento.' },
      'operational-automation': { name: 'Automatización Operativa', description: 'Automatización documental y operativa.' },
      'energy-efficiency': { name: 'Energía y Eficiencia', description: 'Eficiencia energética y análisis.' },
      'real-estate-intelligence': { name: 'Inteligencia Inmobiliaria', description: 'Inteligencia inmobiliaria y activos premium.' },
      'publishing-digital-knowledge': { name: 'Publicaciones y Conocimiento Digital', description: 'Contenido, conocimiento y editorial.' },
    },
  },
  products: {
    title: 'Productos destacados',
    ctaView: 'Ver producto',
    items: {
      'anclora-fiscal': { description: 'Fiscalidad, facturación y cumplimiento para operaciones digitales.', status: 'ecosistema interno' },
      'anclora-syncxml': { description: 'Automatización documental para hospedajes y generación XML oficial.', status: 'ecosistema interno' },
      'anclora-energyscan': { description: 'Informes digitales para analizar ahorro y eficiencia energética.', status: 'ecosistema interno' },
      'anclora-private-estates': { description: 'Línea inmobiliaria premium centrada en Mallorca y activos selectos.', status: 'ecosistema interno' },
      'anclora-insights': { description: 'Sello editorial y productos digitales de conocimiento aplicado.', status: 'ecosistema interno' },
      'anclora-nexus': { description: 'Capa de intake, señales y orquestación del ecosistema.', status: 'ecosistema interno' },
      'anclora-command-center': { description: 'Cabina central para visualizar operaciones, productos y prioridades.', status: 'ecosistema interno' },
      'anclora-synergi': { description: 'Inteligencia comercial y automatización aplicada al entorno inmobiliario.', status: 'ecosistema interno' },
      'anclora-data-lab': { description: 'Análisis de datos e inteligencia aplicada para decisiones estratégicas.', status: 'ecosistema interno' },
    },
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
    copyright: `© ${new Date().getFullYear()} Anclora Group — Todos los derechos reservados.`,
    legalLinks: {
      privacy: 'Privacidad',
      terms: 'Términos',
      legal: 'Aviso legal',
      cookies: 'Cookies',
    },
  },
  cookies: {
    bannerText:
      'Este sitio solo utiliza cookies técnicas necesarias para su funcionamiento. No usamos cookies de analítica ni de marketing.',
    understood: 'Entendido',
    moreInfo: 'Más información',
    modalTitle: 'Gestión de cookies',
    modalIntro:
      'Anclora Group solo utiliza cookies técnicas, imprescindibles para el funcionamiento del sitio. No usamos cookies de analítica ni de marketing.',
    closeLabel: 'Cerrar',
    necessaryTitle: 'Cookies necesarias',
    necessaryDescription:
      'Imprescindibles para el funcionamiento del sitio: gestión de sesión, seguridad y preferencia de idioma. No requieren consentimiento y no pueden desactivarse.',
    necessaryAlwaysOn: 'Siempre activas',
  },
  legal: {
    pendingNotice: 'Este contenido está pendiente de revisión legal definitiva. Se actualizará antes del lanzamiento público.',
    backHome: 'Volver al inicio',
    privacy: {
      title: 'Política de Privacidad',
      body: 'Este documento describirá cómo Anclora Group recopila, utiliza y protege los datos personales de las personas que visitan group.anclora.com. Para cualquier consulta sobre privacidad, escribe a antonio@anclora.com.',
    },
    terms: {
      title: 'Términos y Condiciones',
      body: 'Este documento describirá las condiciones de uso del sitio group.anclora.com y de los servicios ofrecidos por Anclora Group. Para cualquier consulta, escribe a antonio@anclora.com.',
    },
    legal: {
      title: 'Aviso Legal',
      body: 'Este documento incluirá la información legal de identificación de Anclora Group como titular de este sitio web, conforme a la normativa aplicable. Para cualquier consulta, escribe a antonio@anclora.com.',
    },
    cookiesPage: {
      title: 'Política de Cookies',
      body: 'Este documento describirá en detalle el uso de cookies en group.anclora.com. Actualmente el sitio solo utiliza cookies técnicas necesarias para su funcionamiento; no se usan cookies de analítica ni de marketing. Para cualquier consulta, escribe a antonio@anclora.com.',
    },
  },
}

export default es
