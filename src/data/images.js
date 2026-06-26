/**
 * Central image registry.
 *
 * Every image used across the site is referenced from here so that swapping
 * placeholder imagery for real company assets later is a single-file change —
 * no layout edits required.
 *
 * Section/hero imagery uses high-quality, royalty-free Unsplash photos themed
 * around pharmaceutical manufacturing, laboratories and healthcare. Real
 * Haemoon Pharma product photography is imported from `src/assets/images/`.
 */

// Real product photography (Haemoon Pharma Pvt. Ltd.)
import calhaeD3 from '../assets/images/product-calhae-d3.jpeg'
import cefhaeO from '../assets/images/product-cefhae-o.jpeg'
import haemoOnXt from '../assets/images/product-haemo-on-xt.jpeg'
import pantohaeD from '../assets/images/product-pantohae-d.jpeg'

const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80&h=${h}`

export const images = {
  // Hero — modern laboratory / research
  hero: u('1581093588401-fbb62a02f120', 1400, 1100),

  // About company — scientists collaborating
  about: u('1576091160550-2173dba999ef', 1200, 1000),

  // CTA banner backdrop — clean medical facility
  ctaBg: u('1532187863486-abf9dbad1b69', 1600, 900),

  // Why-choose / mission accents
  lab: u('1559757175-5700dde675bc', 1200, 900),
  research: u('1582719478250-c89cae4dc85b', 1200, 900),

  // Product category previews (About page)
  catNutrition: u('1490645935967-10de6ba17061', 900, 700),
  catWomens: u('1505751172876-fa1923c5c528', 900, 700),
  catNutra: u('1607619056574-7b8d3ee536b2', 900, 700),
  catVitamins: u('1550572017-edd951b55104', 900, 700),

  // Contact map placeholder backdrop
  mapBg: u('1524661135-423995f22d0b', 1400, 800),
}

/**
 * Per-product imagery. Keyed to product ids from `products.js`.
 *
 * Some entries are real Haemoon Pharma product packshots (white-background box
 * photos). Those ids are listed in `packshotIds` so <ProductCard> can render
 * them on a clean white panel with `object-fit: contain` rather than cropping.
 */
export const productImages = {
  p1: u('1607619056574-7b8d3ee536b2', 800, 640),
  p2: u('1550572017-edd951b55104', 800, 640),
  p3: haemoOnXt, // Haemo On-XT — Ferrous Ascorbate, Folic Acid & Zinc
  p4: u('1607301406259-dfb186e15de8', 800, 640),
  p5: u('1490645935967-10de6ba17061', 800, 640),
  p6: u('1556909211-36987daf7b4d', 800, 640),
  p7: calhaeD3, // Calhae D3 — Calcium Carbonate & Vitamin D3
  p8: u('1512069772995-ec65ed45afd6', 800, 640),
  p9: u('1559757148-5c350d0d3c56', 800, 640),
  p10: u('1584308666744-24d5c474f2ae', 800, 640),
  p11: pantohaeD, // Pantohae D — Pantoprazole + Domperidone
  p12: cefhaeO, // Cefhae-O — Cefixime & Ofloxacin
}

/** Product ids whose image is a real packshot (render "contained" on white). */
export const packshotIds = new Set(['p3', 'p7', 'p11', 'p12'])
