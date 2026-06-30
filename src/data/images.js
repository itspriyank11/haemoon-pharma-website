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

// Real Haemoon Pharma product renders (3D packshots, white background)
import paahae650 from '../assets/images/rx-paahae-650.jpeg'
import haemoTone from '../assets/images/rx-haemo-tone.jpeg'
import haemoUti from '../assets/images/rx-haemo-uti.jpeg'
import haevitMv from '../assets/images/rx-haevit-mv.jpeg'
import livohae from '../assets/images/rx-livohae.jpeg'
import dizzohae from '../assets/images/rx-dizzohae.jpeg'
import haemoraft from '../assets/images/rx-haemoraft.jpeg'
import haevit from '../assets/images/rx-haevit.jpeg'

// Contact "Connect with us" panel image
import connectImg from '../assets/images/connect.jpg'
// CTA banner image (colourful medicines)
import ctaPills from '../assets/images/cta-pills.jpg'
// About company image (pharmacy / medicines)
import aboutImg from '../assets/images/about-pharmacy.jpg'
// Hero image (vertical pharmacy / medicines)
import heroImg from '../assets/images/hero-pharmacy.jpg'
// Products page hero image
import productsHeroImg from '../assets/images/products-hero.jpg'

const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80&h=${h}`

export const images = {
  // Hero — pharmacy / medicines (vertical)
  hero: heroImg,

  // Products page hero
  productsHero: productsHeroImg,

  // About company — pharmacy / medicines
  about: aboutImg,

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

  // Contact — realistic globe (global reach)
  globe: u('1451187580459-43490279c0fa', 1000, 1000),

  // Contact "Connect with us" panel
  connect: connectImg,

  // CTA banner side image
  ctaPills,

  // Contact map placeholder backdrop
  mapBg: u('1524661135-423995f22d0b', 1400, 800),
}

/**
 * Per-product imagery. Keyed to product ids from `products.js`.
 *
 * All entries are real Haemoon Pharma 3D product renders on a white background,
 * so every id is a "packshot" — <ProductCard> renders these contained on a
 * clean panel with a subtle 3D tilt rather than cropping.
 */
export const productImages = {
  p1: paahae650, // Paahae 650 — Paracetamol Tablets IP
  p2: haemoTone, // Haemo Tone — Iron, Folic Acid, B12 & Taurine Syrup
  p3: haemoUti, // Haemo UTI — Cranberry, D-Mannose & Potassium Syrup
  p4: haevitMv, // Haevit MV — Multivitamin + enzyme Syrup
  p5: livohae, // Livohae — Liver support Tablets
  p6: dizzohae, // Dizzohae — Multi-enzyme Tablets
  p7: haemoraft, // Haemoraft — Antacid Oral Suspension
  p8: haevit, // Haevit — Multivitamin Soft Gelatin Capsules
}

/** Product ids whose image is a packshot (render "contained" on white). */
export const packshotIds = new Set(['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'])
