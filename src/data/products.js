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
    pack: '200 ml | Sugar Free',
    form: 'Syrup',
    benefits: [
      'Supports healthy haemoglobin and red blood cell formation',
      'Helps combat iron-deficiency anaemia and fatigue',
      'Folic acid and B12 for energy and overall vitality',
      'Sugar-free, gentle on the stomach',
    ],
    directions:
      'As directed by the physician or dietician. Shake well before use.',
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
    pack: '200 ml | Sugar Free',
    form: 'Syrup',
    benefits: [
      'Digestive enzymes aid better digestion and absorption',
      'Multivitamins and minerals fill daily nutritional gaps',
      'Antioxidants support immunity and energy',
      'Helps improve appetite — ideal for all ages',
    ],
    directions: 'As directed by the physician. Shake well before use.',
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
    pack: '10 x 1 x 10 Soft Gelatin Capsules',
    form: 'Soft Gelatin Capsules',
    benefits: [
      'Powerful antioxidants combat free-radical damage',
      'Grape seed, lycopene and lutein for skin and eye health',
      'Zinc and selenium strengthen immunity',
      'Supports overall wellness and active lifestyles',
    ],
    directions: 'One capsule daily or as directed by the physician.',
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
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Fast, effective relief from fever',
      'Eases headache, body ache and pains',
      'Well-tolerated 650 mg strength',
      'Trusted everyday analgesic and antipyretic',
    ],
    directions:
      'As directed by the physician. Do not exceed the recommended dose.',
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
    pack: '100 ml | Sugar Free',
    form: 'Syrup',
    benefits: [
      'Cranberry extract supports urinary tract health',
      'D-mannose helps maintain a healthy bladder lining',
      'Potassium magnesium citrate for urinary comfort',
      'Sugar-free, pleasant to take',
    ],
    directions: 'As directed by the physician. Shake well before use.',
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
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Silymarin supports and protects liver cells',
      'Glutathione and NAC aid natural detoxification',
      'Co-Q10 and antioxidants for cellular health',
      'Micronutrients support overall liver function',
    ],
    directions: 'As directed by the physician.',
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
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Multiple enzymes aid complete digestion',
      'Eases bloating, gas and heaviness after meals',
      'Improves absorption of nutrients',
      'Supports everyday digestive comfort',
    ],
    directions: 'As directed by the physician, usually after meals.',
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
    pack: '200 ml | Mint | Sugar Free',
    form: 'Oral Suspension',
    benefits: [
      'Relieves heartburn and acidity in minutes',
      'Long-lasting relief for up to 4 hours',
      'Works for acidity and indigestion',
      'Refreshing mint flavour, sugar free',
    ],
    directions: 'As directed by the physician. Shake well before use.',
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

/**
 * Therapeutic divisions on the company roadmap. These are planned ranges, not
 * yet live in the catalogue — rendered as a "Coming Soon" line-up so partners
 * can see the breadth of segments Haemoon is expanding into.
 *
 * `icon` keys map to lucide-react icons in the Products page.
 */
export const therapeuticDivisions = [
  { name: 'Cardiac Care', icon: 'heartPulse', desc: 'Cardiovascular & blood-pressure therapies' },
  { name: 'Diabetes Care', icon: 'droplets', desc: 'Anti-diabetic & metabolic management' },
  { name: 'Gastroenterology', icon: 'pill', desc: 'Digestive & gut-health formulations' },
  { name: 'Neurology', icon: 'brain', desc: 'Neuro & cognitive-support range' },
  { name: 'Nephrology', icon: 'activity', desc: 'Kidney & renal-care therapies' },
  { name: 'Hormonal', icon: 'atom', desc: 'Hormonal & endocrine treatments' },
  { name: 'Pregnant & Lactating Women', icon: 'baby', desc: 'Specialised maternal nutrition & care' },
  { name: 'Injectables', icon: 'syringe', desc: 'All types of injectable formulations' },
]
