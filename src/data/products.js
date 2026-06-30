import { productImages } from './images'

/**
 * Product catalogue — 8 real Haemoon Pharma products (3D packshot renders).
 *
 * The first 4 also feed the About-page "Featured products" strip via
 * slice(0, 4). Each product references an image by key from `productImages`
 * (see `images.js`). `accent` drives the per-category color used on cards.
 */

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'womens', name: "Women's Health", accent: '#e0599b' },
  { id: 'vitamins', name: 'Vitamins & Nutrition', accent: '#f5a623' },
  { id: 'nutraceuticals', name: 'Nutraceuticals', accent: '#7c5cff' },
  { id: 'wellness', name: 'Wellness & Care', accent: '#0b6e8f' },
]

/** Quick lookup: category id -> meta */
export const categoryMap = categories.reduce((acc, c) => {
  acc[c.id] = c
  return acc
}, {})

export const products = [
  {
    id: 'p2',
    name: 'Haemo Tone',
    category: 'womens',
    tagline: 'Iron, B12 & Taurine syrup',
    composition: 'Iron, Folic Acid, Vitamin B12 & Taurine Syrup',
    description:
      'A sugar-free haematinic syrup with iron, folic acid, vitamin B12 and taurine to support healthy haemoglobin, fight anaemia and restore energy.',
    image: productImages.p2,
    badge: 'Bestseller',
  },
  {
    id: 'p4',
    name: 'Haevit MV',
    category: 'vitamins',
    tagline: 'Multivitamin + enzymes',
    composition: 'Digestive Enzymes, Multivitamin & Multimineral Syrup',
    description:
      'A sugar-free syrup blending digestive enzymes, multivitamins, multiminerals and antioxidants for daily nutrition, immunity and appetite.',
    image: productImages.p4,
    badge: 'Popular',
  },
  {
    id: 'p8',
    name: 'Haevit',
    category: 'vitamins',
    tagline: 'Antioxidant capsules',
    composition: 'Grape Seed, Lycopene, Lutein, Zinc & Multivitamin Capsules',
    description:
      'Soft gelatin capsules with grape seed extract, lycopene, lutein, folic acid, zinc and selenium — complete antioxidant and immunity support.',
    image: productImages.p8,
    badge: 'New',
  },
  {
    id: 'p1',
    name: 'Paahae 650',
    category: 'wellness',
    tagline: 'Pain & fever relief',
    composition: 'Paracetamol Tablets I.P. 650 mg',
    description:
      'Paracetamol 650 mg tablets for fast, effective relief from fever, headache and everyday body aches and pains.',
    image: productImages.p1,
  },
  {
    id: 'p3',
    name: 'Haemo UTI',
    category: 'womens',
    tagline: 'Urinary tract care',
    composition: 'Cranberry Extract, D-Mannose & Potassium Magnesium Citrate',
    description:
      'A sugar-free cranberry and D-mannose syrup that supports urinary tract health and helps maintain a healthy bladder.',
    image: productImages.p3,
  },
  {
    id: 'p5',
    name: 'Livohae',
    category: 'nutraceuticals',
    tagline: 'Advanced liver support',
    composition: 'Silymarin, L-Ornithine, L-Glutathione, NAC & Co-Q10',
    description:
      'A comprehensive liver-support tablet with silymarin, glutathione, NAC, Co-Q10 and antioxidants to protect and detoxify the liver.',
    image: productImages.p5,
    badge: 'Bestseller',
  },
  {
    id: 'p6',
    name: 'Dizzohae',
    category: 'nutraceuticals',
    tagline: 'Multi-enzyme digestion',
    composition: 'Multi-enzyme Tablets',
    description:
      'A multi-enzyme tablet that aids digestion, eases bloating and helps the body break down and absorb nutrients efficiently.',
    image: productImages.p6,
  },
  {
    id: 'p7',
    name: 'Haemoraft',
    category: 'wellness',
    tagline: 'Antacid suspension',
    composition: 'Sodium Alginate, Sodium Bicarbonate & Calcium Carbonate',
    description:
      'A mint-flavoured oral suspension giving fast, long-lasting relief from heartburn, acidity and indigestion — sugar free.',
    image: productImages.p7,
  },
]

/**
 * Featured category previews for the About-page “Product Categories” section.
 * Each pulls a representative product image from the catalogue automatically.
 */
export const featuredCategories = [
  {
    id: 'womens',
    name: "Women's Health",
    description:
      'Haematinics and urinary-care formulations crafted to support women’s energy, vitality and wellbeing at every stage.',
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Nutrition',
    description:
      'Multivitamin syrups and antioxidant capsules that fill nutritional gaps and support everyday immunity and energy.',
  },
  {
    id: 'nutraceuticals',
    name: 'Nutraceuticals',
    description:
      'Liver-support and multi-enzyme formulations for healthy digestion, detoxification and active recovery.',
  },
  {
    id: 'wellness',
    name: 'Wellness & Care',
    description:
      'Everyday relief essentials — from pain and fever to acidity and indigestion — you can rely on.',
  },
]
