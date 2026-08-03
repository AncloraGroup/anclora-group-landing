<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./public/anclora-group-landing.png" alt="Anclora Group Landing" width="132" />

# Anclora Group Landing

### Landing pública corporativa del ecosistema Anclora Group

Landing pública que presenta el ecosistema completo de productos Anclora, con brand book propio (navy/signal-blue/command-purple) e interfaz multilingüe.

**Español** · [English](./README.en.md)

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Categoría](https://img.shields.io/badge/categoría-Portfolio%20(excepción)-5FA8FF)
![Idiomas](https://img.shields.io/badge/idiomas-ES%20%7C%20EN-047857)

</div>

---

> [!IMPORTANT]
> Repositorio público reducido. Describe la landing y su arquitectura conceptual; no expone lógica operativa, secretos ni datos reales.

## Qué es

Anclora Group Landing es la landing pública corporativa del ecosistema. A diferencia del resto de portfolio/showcase, implementa el brand book completo de Anclora Group (navy/signal-blue/command-purple) en lugar del tema editorial genérico — es la única app portfolio gobernada por el Master Contract de branding en vez del contrato de portfolio/showcase.

## Categoría en el ecosistema

| Campo | Valor |
|---|---|
| Categoría | Portfolio — excepción con brand book propio |
| Acento de marca | `#5FA8FF` (signal blue) + `#6C63FF` (command purple) |
| Tipografía | DM Sans + JetBrains Mono |
| Repositorio canónico | `anclora-group-landing` |

## Funcionalidades principales

- Presentación unificada de todo el ecosistema de productos Anclora
- Sistema de marca aplicado con tokens, logo y paleta unificados
- Interfaz multilingüe con selector nativo (6 idiomas en producto: ES, EN, CA, DE, FR, IT)
- Narrativa founder-led, método y principios

## Stack tecnológico

| Área | Tecnología |
|---|---|
| Framework | React 19, Vite, TypeScript |
| Testing | Vitest, Testing Library |
| i18n | Sistema propio, 6 idiomas |

## Arranque local

```bash
npm install
npm run dev
```

## Idiomas soportados

- Español (predeterminado)
- English

> El producto en producción soporta 6 idiomas (ES/EN/CA/DE/FR/IT); esta documentación se mantiene en ES/EN.

## Documentación y gobernanza

- [Brand book v2](./brand/anclora-group-brand-book-v2.md)
- [Prompt maestro de landing](./brand/anclora-group-prompt-maestro-landing-v3.md)
- Contratos de marca y gobernanza: [`docs/standards/`](./docs/standards/)
- Bóveda Anclora (fuente de verdad): `contracts/` y `docs/governance/`

---

<div align="center">

### Anclora Group

</div>
