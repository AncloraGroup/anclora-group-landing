export interface MethodStep {
  title: string
  description: string
}

export interface Principle {
  title: string
  description: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    ecosystem: string
    products: string
    method: string
    founder: string
    contact: string
    contactCta: string
  }
  hero: {
    eyebrow: string
    title: string
    tagline: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    microcopy: string
  }
  ecosystem: {
    title: string
    text: string
  }
  products: {
    title: string
    ctaView: string
  }
  infrastructure: {
    title: string
    text: string
  }
  method: {
    title: string
    steps: MethodStep[]
  }
  founder: {
    title: string
    body: string
  }
  principles: {
    title: string
    items: Principle[]
  }
  contact: {
    title: string
    body: string
    email: string
    cta: string
    subject: string
  }
  footer: {
    claim: string
    copyright: string
  }
}
