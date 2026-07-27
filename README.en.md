<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./public/logo.png" alt="Anclora Group" width="120" />

# Anclora Group — Landing

### Public landing page of the Anclora Group ecosystem, documented as a portfolio-showcase-family repository

[Español](./README.md) · **English**

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Landing](https://img.shields.io/badge/landing-React%20%2B%20Vite-BFA46A)
![Languages](https://img.shields.io/badge/i18n-6%20languages-047857)

</div>

---

> [!IMPORTANT]
> Reduced public repository. It describes the landing page and conceptual architecture; it does not expose operational logic, secrets or real data.

## At a glance

| Product challenge | Product response |
| --- | --- |
| Fragmented ecosystem | Single landing that organises and presents every Anclora product |
| Inconsistent brand | Applied brand system with unified tokens, logo and palette |
| Multilingual audience | Interface in 6 languages with a native switcher |
| Trust and credibility | Founder-led narrative, method and principles laid out clearly |

## Conceptual workflow

```text
Brand book / brand tokens
        ↓
React + Vite landing (src/)
        ↓
Sections: Hero, Ecosystem, Products, Method, Founder, Contact
        ↓
Static build
        ↓
Public deployment (group.anclora.com)
```

## What this repository shows

Public landing page of the Anclora Group ecosystem, documented as a portfolio-showcase-family repository.

This README documents the public scope of the product, its position in the Anclora ecosystem
and the right exposure limits for an open repository.

## Structure

| Folder | Content |
| --- | --- |
| [`src/`](./src) | React + Vite landing source (components, sections, i18n, styles) |
| [`public/`](./public) | Static assets served as-is (logo, og-image) |
| [`brand/`](./brand) | Brand book, master prompt, logo/favicon assets and the brand book reference render |
| [`.claude/`](./.claude) | Local agent memory and configuration |

## Technology

| Area | Detail |
| --- | --- |
| React 19 | Landing interface |
| Vite | Build and dev server |
| TypeScript | Strict typing across components, sections and i18n |
| Vitest + Testing Library | Coverage for key components |
| Custom i18n | 6 languages: ES, EN, CA, DE, FR, IT |

## Documentation

- [Brand book v2](./brand/anclora-group-brand-book-v2.md)
- [Landing master prompt](./brand/anclora-group-prompt-maestro-landing-v3.md)
- [Brand book reference render](./brand/render/index.html)

## Brand

- Canonical product: `anclora-group-landing`
- Family: `portfolio_showcase`
- Target visibility: `public`
- Brand asset: `present`

---

<div align="center">

### Antonio Ballesteros · Anclora Group

Software, generative AI and automation for traceable digital products.

</div>
