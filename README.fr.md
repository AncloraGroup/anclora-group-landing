<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./public/anclora-group-landing.png" alt="Anclora Group Landing" width="132" />

# Anclora Group Landing

### Page d'atterrissage publique corporative de l'écosystème Anclora Group

Page d'atterrissage publique présentant l'écosystème complet des produits Anclora, avec son propre brand book (navy/signal-blue/command-purple) et une interface multilingue.

[Español](./README.md) · [Català](./README.ca.md) · [English](./README.en.md) · [Deutsch](./README.de.md) · **Français** · [Italiano](./README.it.md)

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Catégorie](https://img.shields.io/badge/catégorie-Portfolio%20(exception)-5FA8FF)
![Langues](https://img.shields.io/badge/langues%20produit-6-047857)

</div>

---

> [!IMPORTANT]
> Dépôt public réduit. Décrit la landing page et son architecture conceptuelle ; n'expose pas de logique opérationnelle, de secrets ni de données réelles.

## Ce que c'est

Anclora Group Landing est la page d'atterrissage publique corporative de l'écosystème. Contrairement au reste de la famille portfolio/showcase, elle implémente le brand book complet d'Anclora Group (navy/signal-blue/command-purple) au lieu du thème éditorial générique — c'est la seule application portfolio régie par le Master Contract de branding plutôt que par le contrat portfolio/showcase.

## Catégorie dans l'écosystème

| Champ | Valeur |
|---|---|
| Catégorie | Portfolio — exception avec brand book propre |
| Accent de marque | `#5FA8FF` (signal blue) + `#6C63FF` (command purple) |
| Typographie | DM Sans + JetBrains Mono |
| Dépôt canonique | `anclora-group-landing` |

## Fonctionnalités principales

- Présentation unifiée de l'ensemble de l'écosystème de produits Anclora
- Système de marque appliqué avec tokens, logo et palette unifiés
- Interface multilingue avec sélecteur natif (6 langues produit : ES, EN, CA, DE, FR, IT)
- Récit porté par le fondateur, méthode et principes

## Stack technologique

| Domaine | Technologie |
|---|---|
| Framework | React 19, Vite, TypeScript |
| Tests | Vitest, Testing Library |
| i18n | Système propre, 6 langues |

## Démarrage local

```bash
npm install
npm run dev
```

## Langues prises en charge

Le produit en production prend en charge 6 langues : Español (par défaut), Català, English, Deutsch, Français, Italiano (`LOCALES`, `src/i18n/index.ts`). Cette documentation est maintenue dans les 6 langues du produit.

## Documentation et gouvernance

- [Brand book v2](./brand/anclora-group-brand-book-v2.md)
- [Prompt maître de la landing](./brand/anclora-group-prompt-maestro-landing-v3.md)
- Contrats de marque et de gouvernance : [`docs/standards/`](./docs/standards/)
- Anclora Vault (source de vérité) : `contracts/` et `docs/governance/`

---

<div align="center">

### Anclora Group

</div>
