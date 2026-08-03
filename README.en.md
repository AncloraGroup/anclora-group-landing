<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./public/anclora-group-landing.png" alt="Anclora Group Landing" width="132" />

# Anclora Group Landing

### Corporate public landing page for the Anclora Group ecosystem

Public landing page presenting the complete Anclora product ecosystem, with its own brand book (navy/signal-blue/command-purple) and multilingual interface.

[Español](./README.md) · **English**

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Category](https://img.shields.io/badge/category-Portfolio%20(exception)-5FA8FF)
![Languages](https://img.shields.io/badge/languages-ES%20%7C%20EN-047857)

</div>

---

> [!IMPORTANT]
> Reduced public repository. It describes the landing page and its conceptual architecture; it does not expose operational logic, secrets, or real data.

## What it is

Anclora Group Landing is the ecosystem's corporate public landing page. Unlike the rest of the portfolio/showcase family, it implements the full Anclora Group brand book (navy/signal-blue/command-purple) instead of the generic editorial theme — it is the only portfolio app governed by the branding Master Contract instead of the portfolio/showcase contract.

## Category in the ecosystem

| Field | Value |
|---|---|
| Category | Portfolio — exception with its own brand book |
| Brand accent | `#5FA8FF` (signal blue) + `#6C63FF` (command purple) |
| Typography | DM Sans + JetBrains Mono |
| Canonical repository | `anclora-group-landing` |

## Key features

- Unified presentation of the entire Anclora product ecosystem
- Applied brand system with unified tokens, logo, and palette
- Multilingual interface with native switcher (6 product languages: ES, EN, CA, DE, FR, IT)
- Founder-led narrative, method, and principles

## Technology stack

| Area | Technology |
|---|---|
| Framework | React 19, Vite, TypeScript |
| Testing | Vitest, Testing Library |
| i18n | Custom system, 6 languages |

## Local setup

```bash
npm install
npm run dev
```

## Supported languages

- Español (default)
- English

> The production product supports 6 languages (ES/EN/CA/DE/FR/IT); this documentation is maintained in ES/EN.

## Documentation and governance

- [Brand book v2](./brand/anclora-group-brand-book-v2.md)
- [Landing master prompt](./brand/anclora-group-prompt-maestro-landing-v3.md)
- Brand and governance contracts: [`docs/standards/`](./docs/standards/)
- Anclora Vault (source of truth): `contracts/` and `docs/governance/`

---

<div align="center">

### Anclora Group

</div>
