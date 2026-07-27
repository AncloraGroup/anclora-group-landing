<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./app/public/logo.png" alt="Anclora Group" width="120" />

# Anclora Group — Landing

### Landing page publica del ecosistema Anclora Group, documentada como repositorio de familia matrix

**Español** · [English](./README.en.md)

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Landing](https://img.shields.io/badge/landing-React%20%2B%20Vite-BFA46A)
![Languages](https://img.shields.io/badge/i18n-6%20idiomas-047857)

</div>

---

> [!IMPORTANT]
> Repositorio publico reducido. Describe la landing y su arquitectura conceptual; no expone logica operativa, secretos ni datos reales.

## Vista rapida

| Problema | Respuesta de producto |
| --- | --- |
| Ecosistema disperso | Landing unica que ordena y presenta todos los productos Anclora |
| Marca inconsistente | Sistema de marca aplicado con tokens, logo y paleta unificados |
| Audiencia multilingue | Interfaz en 6 idiomas con selector nativo |
| Confianza y credibilidad | Narrativa founder-led, metodo y principios expuestos con claridad |

## Flujo conceptual

```text
Brand book / tokens de marca
        ↓
Landing React + Vite (app/)
        ↓
Secciones: Hero, Ecosistema, Productos, Metodo, Founder, Contacto
        ↓
Build estatico
        ↓
Despliegue publico (group.anclora.com)
```

## Que muestra este repositorio

Landing page publica del ecosistema Anclora Group, documentada como repositorio de familia matrix.

El README presenta el alcance publico del producto, su posicionamiento dentro del ecosistema
Anclora y los limites de exposicion adecuados para un repositorio abierto.

## Estructura

| Carpeta | Contenido |
| --- | --- |
| [`app/`](./app) | Aplicacion React + Vite de la landing (componentes, secciones, i18n, estilos, tests) |
| [`brand/`](./brand) | Brand book, prompt maestro, assets de logo/favicons y render de referencia del brand book |
| [`tools/`](./tools) | Toolkit `impeccable` usado como asistente de diseno/calidad durante la construccion |
| [`.claude/`](./.claude) | Memoria y configuracion local de agentes |

## Tecnologia

| Area | Detalle |
| --- | --- |
| React 19 | Interfaz de la landing |
| Vite | Build y dev server |
| TypeScript | Tipado estricto en componentes, secciones e i18n |
| Vitest + Testing Library | Cobertura de componentes clave |
| i18n propio | 6 idiomas: ES, EN, CA, DE, FR, IT |

## Documentacion

- [Brand book v2](./brand/anclora-group-brand-book-v2.md)
- [Prompt maestro de landing](./brand/anclora-group-prompt-maestro-landing-v3.md)
- [Render de referencia del brand book](./brand/render/index.html)

## Marca

- Producto canonico: `anclora-group-landing`
- Familia: `matrix`
- Visibilidad objetivo: `public`
- Asset de marca: `presente`

---

<div align="center">

### Antonio Ballesteros · Anclora Group

Software, IA generativa y automatizacion para productos digitales trazables.

</div>
