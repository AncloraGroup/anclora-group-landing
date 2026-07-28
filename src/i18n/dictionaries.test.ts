import { describe, it, expect } from 'vitest'
import { dictionaries, LOCALES } from './index'
import { ecosystemLines } from '../data/ecosystem'
import { products } from '../data/products'

// Guarda de regresión: si se añade una línea o un producto nuevo sin traducirlo en
// los 6 locales, ProductCard/EcosystemCard caerían silenciosamente al fallback ES
// (ver fallback en ambos componentes). Este test lo convierte en un fallo explícito.
describe('i18n dictionary coverage', () => {
  it('has a translated entry for every ecosystem line in all locales', () => {
    for (const locale of LOCALES) {
      for (const line of ecosystemLines) {
        expect(dictionaries[locale].ecosystem.lines[line.id], `${locale}: ecosystem.lines['${line.id}']`).toBeDefined()
      }
    }
  })

  it('has a translated entry for every product in all locales', () => {
    for (const locale of LOCALES) {
      for (const product of products) {
        expect(dictionaries[locale].products.items[product.id], `${locale}: products.items['${product.id}']`).toBeDefined()
      }
    }
  })
})
