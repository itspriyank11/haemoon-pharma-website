import { productImages } from './images'

/**
 * Product catalogue (8 products).
 *
 * Ordered intentionally: the 4 real Haemoon Pharma packshots come FIRST (these
 * also feed the About-page "Popular right now" featured strip via slice(0, 4)),
 * followed by 4 demo products arranged category-wise.
 *
 * Each product references an image by key from `productImages` (see
 * `images.js`). `accent` drives the per-category color used on cards/badges.
 */

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'pediatric', name: 'Pediatric Nutrition', accent: '#13b6c9' },
  { id: 'womens', name: "Women's Health", accent: '#e0599b' },
  { id: 'nutraceuticals', name: 'Nutraceuticals', accent: '#7c5cff' },
  { id: 'vitamins', name: 'Vitamins', accent: '#f5a623' },
  { id: 'protein', name: 'Protein Supplements', accent: '#2eb872' },
  { id: 'wellness', name: 'Wellness Products', accent: '#0b6e8f' },
]

/** Quick lookup: category id -> meta */
export const categoryMap = categories.reduce((acc, c) => {
  acc[c.id] = c
  return acc
}, {})

export const products = [
  // ---- Real Haemoon Pharma products (also the featured strip on About) ----
  {
    id: 'p3',
    name: 'Haemo On-XT',
    category: 'womens',
    tagline: 'Iron, folic acid & zinc',
    composition: 'Ferrous Ascorbate, Folic Acid & Zinc Sulphate Tablets',
    description:
      'A haematinic tablet combining ferrous ascorbate, folic acid and zinc to support healthy haemoglobin, combat anaemia and restore energy.',
    image: productImages.p3,
    badge: 'Bestseller',
  },
  {
    id: 'p7',
    name: 'Calhae D3',
    category: 'vitamins',
    tagline: 'Calcium & Vitamin D3',
    composition: 'Calcium Carbonate & Vitamin D3 Tablets IP',
    description:
      'Calcium carbonate with vitamin D3 to support strong bones and teeth, improve calcium absorption and maintain bone density.',
    image: productImages.p7,
    badge: 'Popular',
  },
  {
    id: 'p11',
    name: 'Pantohae D',
    category: 'wellness',
    tagline: 'Acidity & gastro care',
    composition: 'Pantoprazole Sodium (EC) & Domperidone (SR) Capsules',
    description:
      'Pantoprazole with domperidone for effective relief from acidity, heartburn, reflux and indigestion.',
    image: productImages.p11,
    badge: 'New',
  },
  {
    id: 'p12',
    name: 'Cefhae-O',
    category: 'wellness',
    tagline: 'Broad-spectrum antibiotic',
    composition: 'Cefixime & Ofloxacin Tablets',
    description:
      'A dual-action antibiotic combining cefixime and ofloxacin to treat a broad range of bacterial infections. Rx only.',
    image: productImages.p12,
  },

  // ---- Supporting range, arranged category-wise ----
  {
    id: 'p1',
    name: 'NivoGrow Junior',
    category: 'pediatric',
    tagline: 'Complete growth nutrition',
    description:
      'A scientifically balanced nutritional drink supporting healthy growth, immunity and cognitive development in children aged 2–10.',
    image: productImages.p1,
    badge: 'Bestseller',
  },
  {
    id: 'p5',
    name: 'CurcuPure Active',
    category: 'nutraceuticals',
    tagline: 'Advanced turmeric extract',
    description:
      'High-bioavailability curcumin with piperine, delivering powerful antioxidant and joint-comfort support.',
    image: productImages.p5,
    badge: 'Bestseller',
  },
  {
    id: 'p8',
    name: 'VitaComplete Multi',
    category: 'vitamins',
    tagline: '23 essential nutrients',
    description:
      'A comprehensive daily multivitamin and mineral complex engineered to fill nutritional gaps and sustain energy.',
    image: productImages.p8,
    badge: 'Popular',
  },
  {
    id: 'p9',
    name: 'ProWhey Isolate',
    category: 'protein',
    tagline: '90% pure protein',
    description:
      'Fast-absorbing whey protein isolate with a full amino-acid profile to fuel recovery and lean muscle growth.',
    image: productImages.p9,
    badge: 'Bestseller',
  },
]

/** Featured subset for the About-page “Product Categories Preview”. */
export const featuredCategories = [
  {
    id: 'pediatric',
    name: 'Pediatric Nutrition',
    description:
      'Gentle, science-backed nutrition that supports healthy growth and immunity from the very first years.',
  },
  {
    id: 'womens',
    name: "Women's Health",
    description:
      'Targeted formulations crafted to support women’s energy, bone strength and vitality at every stage.',
  },
  {
    id: 'nutraceuticals',
    name: 'Nutraceuticals',
    description:
      'High-bioavailability botanical and omega extracts for everyday wellbeing and active recovery.',
  },
  {
    id: 'protein',
    name: 'Protein Supplements',
    description:
      'Premium whey and plant proteins engineered for clean fuel, recovery and lean muscle support.',
  },
]
