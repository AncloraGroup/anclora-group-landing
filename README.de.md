<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./public/anclora-group-landing.png" alt="Anclora Group Landing" width="132" />

# Anclora Group Landing

### Öffentliche Unternehmens-Landingpage des Anclora-Group-Ökosystems

Öffentliche Landingpage, die das gesamte Anclora-Produktökosystem präsentiert, mit eigenem Brand Book (navy/signal-blue/command-purple) und mehrsprachiger Oberfläche.

[Español](./README.md) · [Català](./README.ca.md) · [English](./README.en.md) · **Deutsch** · [Français](./README.fr.md) · [Italiano](./README.it.md)

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Kategorie](https://img.shields.io/badge/kategorie-Portfolio%20(Ausnahme)-5FA8FF)
![Sprachen](https://img.shields.io/badge/produktsprachen-6-047857)

</div>

---

> [!IMPORTANT]
> Reduziertes öffentliches Repository. Es beschreibt die Landingpage und ihre konzeptionelle Architektur, ohne operative Logik, Geheimnisse oder reale Daten offenzulegen.

## Was es ist

Anclora Group Landing ist die öffentliche Unternehmens-Landingpage des Ökosystems. Anders als der Rest der Portfolio/Showcase-Familie implementiert sie das vollständige Anclora-Group-Brand-Book (navy/signal-blue/command-purple) statt des generischen editoriellen Themes — sie ist die einzige Portfolio-App, die dem Branding-Master-Contract statt dem Portfolio/Showcase-Vertrag unterliegt.

## Kategorie im Ökosystem

| Feld | Wert |
|---|---|
| Kategorie | Portfolio — Ausnahme mit eigenem Brand Book |
| Markenakzent | `#5FA8FF` (signal blue) + `#6C63FF` (command purple) |
| Typografie | DM Sans + JetBrains Mono |
| Kanonisches Repository | `anclora-group-landing` |

## Kernfunktionen

- Einheitliche Präsentation des gesamten Anclora-Produktökosystems
- Angewandtes Markensystem mit einheitlichen Tokens, Logo und Palette
- Mehrsprachige Oberfläche mit nativem Umschalter (6 Produktsprachen: ES, EN, CA, DE, FR, IT)
- Founder-geführte Erzählung, Methode und Prinzipien

## Technologie-Stack

| Bereich | Technologie |
|---|---|
| Framework | React 19, Vite, TypeScript |
| Tests | Vitest, Testing Library |
| i18n | Eigenes System, 6 Sprachen |

## Lokaler Start

```bash
npm install
npm run dev
```

## Unterstützte Sprachen

Das Produkt unterstützt in der Produktion 6 Sprachen: Español (Standard), Català, English, Deutsch, Français, Italiano (`LOCALES`, `src/i18n/index.ts`). Diese Dokumentation wird in allen 6 Produktsprachen gepflegt.

## Dokumentation und Governance

- [Brand Book v2](./brand/anclora-group-brand-book-v2.md)
- [Master-Prompt der Landingpage](./brand/anclora-group-prompt-maestro-landing-v3.md)
- Marken- und Governance-Verträge: [`docs/standards/`](./docs/standards/)
- Anclora Vault (Quelle der Wahrheit): `contracts/` und `docs/governance/`

---

<div align="center">

### Anclora Group

</div>
