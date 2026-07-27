export interface PrincipleEntry {
  title: string
  description: string
}

// Principios — sección 11.8 del brand book. Copy canónico en español, fuente única de verdad
// para el locale ES. Otros locales mantienen su propia traducción en /i18n hasta revisión
// por hablante nativo.
export const principles: PrincipleEntry[] = [
  {
    title: 'Claridad antes que complejidad.',
    description: 'La tecnología debe ordenar, no añadir ruido.',
  },
  {
    title: 'IA aplicada, no decorativa.',
    description:
      'La inteligencia artificial solo tiene sentido cuando mejora una decisión, una tarea o un proceso.',
  },
  {
    title: 'Producto antes que promesa.',
    description: 'Cada iniciativa debe resolver una fricción concreta.',
  },
  {
    title: 'Control por diseño.',
    description:
      'Privacidad, trazabilidad y gobernanza forman parte del producto, no son añadidos posteriores.',
  },
  {
    title: 'Ejecución antes que narrativa.',
    description: 'Una idea solo cuenta cuando se convierte en sistema, interfaz o flujo útil.',
  },
]
