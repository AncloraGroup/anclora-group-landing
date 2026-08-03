<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./public/anclora-group-landing.png" alt="Anclora Group Landing" width="132" />

# Anclora Group Landing

### Landing pública corporativa de l'ecosistema Anclora Group

Landing pública que presenta l'ecosistema complet de productes Anclora, amb brand book propi (navy/signal-blue/command-purple) i interfície multilingüe.

[Español](./README.md) · **Català** · [English](./README.en.md) · [Deutsch](./README.de.md) · [Français](./README.fr.md) · [Italiano](./README.it.md)

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Categoria](https://img.shields.io/badge/categoria-Portfolio%20(excepció)-5FA8FF)
![Idiomes](https://img.shields.io/badge/idiomes%20producte-6-047857)

</div>

---

> [!IMPORTANT]
> Repositori públic reduït. Descriu la landing i la seva arquitectura conceptual; no exposa lògica operativa, secrets ni dades reals.

## Què és

Anclora Group Landing és la landing pública corporativa de l'ecosistema. A diferència de la resta de portfolio/showcase, implementa el brand book complet d'Anclora Group (navy/signal-blue/command-purple) en lloc del tema editorial genèric — és l'única app portfolio governada pel Master Contract de branding en comptes del contracte de portfolio/showcase.

## Categoria a l'ecosistema

| Camp | Valor |
|---|---|
| Categoria | Portfolio — excepció amb brand book propi |
| Accent de marca | `#5FA8FF` (signal blue) + `#6C63FF` (command purple) |
| Tipografia | DM Sans + JetBrains Mono |
| Repositori canònic | `anclora-group-landing` |

## Funcionalitats principals

- Presentació unificada de tot l'ecosistema de productes Anclora
- Sistema de marca aplicat amb tokens, logo i paleta unificats
- Interfície multilingüe amb selector natiu (6 idiomes al producte: ES, EN, CA, DE, FR, IT)
- Narrativa founder-led, mètode i principis

## Stack tecnològic

| Àrea | Tecnologia |
|---|---|
| Framework | React 19, Vite, TypeScript |
| Testing | Vitest, Testing Library |
| i18n | Sistema propi, 6 idiomes |

## Inici local

```bash
npm install
npm run dev
```

## Idiomes suportats

El producte en producció admet 6 idiomes: Español (predeterminat), Català, English, Deutsch, Français, Italiano (`LOCALES`, `src/i18n/index.ts`). Aquesta documentació es manté en els 6 idiomes del producte.

## Documentació i governança

- [Brand book v2](./brand/anclora-group-brand-book-v2.md)
- [Prompt mestre de landing](./brand/anclora-group-prompt-maestro-landing-v3.md)
- Contractes de marca i governança: [`docs/standards/`](./docs/standards/)
- Bóveda Anclora (font de veritat): `contracts/` i `docs/governance/`

---

<div align="center">

### Anclora Group

</div>
