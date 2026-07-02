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
    tagline: 'The haematinic for producing blood cells',
    composition: 'Iron, Folic Acid, Vitamin B12 & Taurine Syrup',
    description:
      'A sugar-free haematinic syrup with iron, folic acid, vitamin B12 and taurine — helping the body produce healthy red blood cells that carry oxygen from the blood to tissues and organs.',
    image: productImages.p2,
    badge: 'Bestseller',
    pack: '200 ml | Sugar Free',
    form: 'Syrup',
    benefits: [
      'Iron helps the body produce red blood cells that carry oxygen to tissues and organs',
      'Cyanocobalamin (B12) supports red and white blood cell production, RNA & DNA and a healthy nervous system',
      'Folic acid aids cell division — especially vital during pregnancy and foetal growth',
      'Zinc supports growth, immune response and neurological function',
    ],
    indications: [
      'Treatment of pernicious anaemia',
      'Iron deficiency due to chronic blood loss',
      'Malabsorption, premature babies',
      'Pregnancy and lactation',
      'Menorrhagia',
    ],
    directions:
      'As directed by the physician or dietician. Shake well before use.',
  },
  {
    id: 'p4',
    name: 'Haevit MV',
    category: 'vitamins',
    tagline: 'Tone up impaired digestion',
    composition:
      'Digestive Enzymes, Multivitamin & Multimineral with Antioxidants Syrup',
    description:
      'A sugar-free, world-class enzyme syrup that brings back normalcy of digestion and regulates gastric functions — pairing digestive enzymes with a multivitamin, multimineral and antioxidant blend for indigestion and disturbed digestive normalcy.',
    image: productImages.p4,
    badge: 'Popular',
    pack: '200 ml | Sugar Free',
    form: 'Syrup',
    benefits: [
      'Corrects and improves digestion and regulates gastric & liver functions',
      'Enhances absorption of nutrients and improves gut health',
      'Reduces gastric pain and improves immunity',
      'Multivitamins and lysine strengthen antioxidant defence against oxidative stress',
    ],
    indications: [
      'Impaired digestion',
      'Loss of appetite',
      'Sour stomach',
    ],
    directions: 'As directed by the physician. Shake well before use.',
  },
  {
    id: 'p8',
    name: 'Haevit',
    category: 'vitamins',
    tagline: 'Restorative nutritional support',
    composition:
      'Grape Seed Extract, Lycopene, Lutein, Folic Acid, Zinc, Selenium & Multivitamin Soft Gelatin Capsules',
    description:
      'The antioxidant protector with growth-promoting multivitamins, multiminerals and the power of grape seed extract — restorative nutritional support during phases of growth and deficiencies.',
    image: productImages.p8,
    badge: 'New',
    pack: '10 x 1 x 10 Soft Gelatin Capsules',
    form: 'Soft Gelatin Capsules',
    benefits: [
      'Prevents and treats deficiency diseases and improves normal metabolism',
      'Helps fight mental & physical stress and restores well-being',
      'Improves immunity against diseases and infections',
      'Grape seed extract shows superior antioxidant action, protecting against free radicals and improving ocular health',
    ],
    indications: [
      'Deficiency states',
      'Growth retardation',
      'Debility',
      'Neurological disorders',
      'Adjuvant to antibiotics',
      'Anorexia',
      'General well-being',
    ],
    directions: 'One capsule daily or as directed by the physician.',
  },
  {
    id: 'p1',
    name: 'Paahae 650',
    category: 'wellness',
    tagline: 'Time-tested relief in fever & pain',
    composition: 'Paracetamol Tablets I.P. 650 mg',
    description:
      'Paracetamol 650 mg tablets — a time-tested first-line treatment for fever and pain. One of the best analgesics and antipyretics, with a faster onset of action and a well-tolerated safety profile.',
    image: productImages.p1,
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'One of the best analgesics and antipyretics',
      'Faster onset of action for quick relief',
      'Well-tolerated, safer than ibuprofen',
      'Time-tested first-line treatment for fever and pain',
    ],
    indications: [
      'Headache',
      'Dental pain',
      'Post-traumatic pain',
      'High-grade fever',
      'Post-operative pain',
      'Muscle pain',
    ],
    directions:
      'As directed by the physician. Do not exceed the recommended dose.',
  },
  {
    id: 'p3',
    name: 'Haemo UTI',
    category: 'womens',
    tagline: 'A best alternative to antibiotics',
    composition:
      'Cranberry Extract 200 mg, D-Mannose 300 mg & Potassium Magnesium Citrate 978 mg Syrup',
    description:
      'A sugar-free cranberry, D-mannose and potassium magnesium citrate syrup that improves urinary tract & intestinal health — a promising adjuvant in recurrent UTI prophylaxis and uncomplicated UTI episodes.',
    image: productImages.p3,
    pack: '100 ml | Sugar Free',
    form: 'Syrup',
    benefits: [
      'Cranberry extract makes urine acidic to stop bacterial growth, increase urine flow and kill microbes',
      'D-mannose inhibits P-fimbrial adhesion of E. coli to the bladder, preventing recurrence',
      'Potassium magnesium citrate reduces urine acidity and helps prevent gout and kidney stones',
      'USFDA-approved specific urinary alkaliser',
    ],
    indications: [
      'Urinary tract infections',
      'Bacteriuria',
      'UTIs during pregnancy',
      'Kidney stones, renal calculi',
      'Dysuria',
    ],
    directions: 'As directed by the physician. Shake well before use.',
  },
  {
    id: 'p5',
    name: 'Livohae',
    category: 'nutraceuticals',
    tagline: 'Triple shield for your liver — restore, regenerate, revive',
    composition:
      'Silymarin, L-Ornithine, L-Glutathione, N-Acetyl-L-Cysteine, Co-Q10, Inositol, Antioxidants & Micronutrients Tablets',
    description:
      'Complete liver care in every dose — a triple-shield formula pairing silymarin, L-ornithine L-aspartate and L-glutathione with Co-Q10, inositol and micronutrients to restore, regenerate and revive the liver.',
    image: productImages.p5,
    badge: 'Bestseller',
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Silymarin gives antioxidant protection against free-radical damage and strong anti-inflammatory action on liver tissue',
      'L-ornithine L-aspartate treats high ammonia levels and offers strong hepatoprotective action against chemical-induced liver damage',
      'L-glutathione neutralises free radicals, detoxifies the liver and supports immune health',
      'Slows the progression of end-stage cirrhosis',
    ],
    indications: [
      'Hepatic dysfunction',
      'Drug-induced liver injury',
      'Cirrhosis',
      'Fatty liver',
      'Acute and chronic hepatitis',
      'Jaundice',
    ],
    directions: 'As directed by the physician.',
  },
  {
    id: 'p6',
    name: 'Dizzohae',
    category: 'nutraceuticals',
    tagline: 'Complete digestive enzyme support',
    composition:
      'Protease, Amylase, Lipase, Cellulase, Alpha Galactosidase, Hemicellulase & Phytase Multi-enzyme Tablets',
    description:
      'An advanced multi-enzyme formula for better digestion and nutrient absorption — comprehensive enzyme support for complete digestion care, suited to modern dietary habits and irregular eating patterns.',
    image: productImages.p6,
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Supports healthy digestion — breaks down proteins, fats, carbohydrates and fibres efficiently',
      'Reduces gas & bloating for comfortable digestion after heavy meals',
      'Enhances absorption of essential vitamins and minerals',
      'Improves gut comfort and supports daily digestive wellness',
    ],
    directions: 'As directed by the physician, usually after meals.',
  },
  {
    id: 'p7',
    name: 'Haemoraft',
    category: 'wellness',
    tagline: 'The raft-forming antacid — acts faster, longer, safer',
    composition:
      'Sodium Alginate 500 mg, Sodium Bicarbonate 213 mg & Calcium Carbonate 325 mg (per 10 ml) Oral Suspension',
    description:
      'A mint-flavoured, sugar-free raft-forming antacid with a unique dual mode of action — sodium alginate forms a neutral-pH gel that floats like a raft, giving fast, long-lasting and safe relief from heartburn and acid reflux. Safe throughout pregnancy, from the first to the last trimester.',
    image: productImages.p7,
    pack: '200 ml | Mint | Sugar Free',
    form: 'Oral Suspension',
    benefits: [
      'Acts faster — action starts within 3 minutes',
      'Sodium alginate reacts with acid to form a neutral-pH gel that floats like a raft',
      'Acts safer — non-systemic action, safe for pregnant and lactating women',
      'Sugar-free mint flavour for refreshing, long-lasting relief',
    ],
    indications: [
      'Heartburn',
      'Acid reflux',
      'Dyspepsia',
      'Reflux esophagitis',
      'GERD symptoms',
    ],
    directions:
      'Adults and children above 12 years: 10–20 ml after food and at bedtime. Children 6 to 12 years: 5–10 ml after food and at bedtime. Or as directed by the physician. Shake well before use.',
  },
  {
    id: 'p9',
    name: 'Calhae-D3',
    category: 'womens',
    tagline: 'To prevent calcium deficiency',
    composition: 'Calcium Carbonate 500 mg + Vitamin D3 250 I.U. Tablets',
    description:
      'Calcium Carbonate 500 mg with Vitamin D3 250 I.U. — the most accepted form of calcium, delivering maximum elemental calcium to minimise bone loss and prevent calcium deficiency.',
    image: productImages.p9,
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Calcium carbonate — the most accepted form of calcium',
      'Provides maximum elemental calcium for absorption',
      'Minimises bone loss during pregnancy and lactation',
      'Vitamin D3 boosts intestinal calcium absorption and reduces fracture risk',
    ],
    indications: [
      'Senile osteoporosis',
      'Pregnancy & lactation',
      'Drug-induced osteoporosis',
      'Post-menopausal osteoporosis',
    ],
    directions: 'As directed by the physician.',
  },
  {
    id: 'p10',
    name: 'Cefhae-O',
    category: 'wellness',
    tagline: 'Clear off the dangers of resistance',
    composition: 'Cefixime 200 mg + Ofloxacin 200 mg Tablets',
    description:
      'A dual-antibiotic combination of Cefixime 200 mg and Ofloxacin 200 mg that tackles resistance through two different modes of action, offering excellent sensitivity across a wide variety of bacteria.',
    image: productImages.p10,
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Excellent sensitivity against a wide variety of bacteria',
      'Controls resistance through two different modes of action',
      'Ideal combination therapy for drug-resistant typhoid',
      '90–95% clinical cure rate with least chance of relapse',
    ],
    indications: [
      'Typhoid fever',
      'Nosocomial infections',
      'UTI',
      'Soft tissue infection',
      'RTI',
      'Surgical prophylaxis',
      'Intra-abdominal infections',
    ],
    directions: 'As directed by the physician.',
  },
  {
    id: 'p11',
    name: 'Esmohae D',
    category: 'wellness',
    tagline: 'When acid reflux disturbs',
    composition: 'Esomeprazole 40 mg + Domperidone 30 mg SR Capsules',
    description:
      'Esomeprazole 40 mg with sustained-release Domperidone 30 mg — neutralises gastric acid secretion for complete acid suppression while controlling nausea and facilitating gastric emptying.',
    image: productImages.p11,
    pack: '10 x 10 Capsules',
    form: 'Capsules',
    benefits: [
      'Esomeprazole neutralises gastric acid secretion',
      'Provides complete acid suppression',
      'Domperidone controls the symptoms of nausea',
      'Facilitates gastric emptying for lasting relief',
    ],
    indications: [
      'GERD',
      'Esophagitis',
      'Non-ulcer dyspepsia',
      'Non-erosive reflux disease',
    ],
    directions: 'As directed by the physician.',
  },
  {
    id: 'p12',
    name: 'Haemo On-XT',
    category: 'womens',
    tagline: 'An advanced iron care',
    composition:
      'Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg + Zinc Sulphate 22.5 mg Tablets',
    description:
      'Advanced iron care with Ferrous Ascorbate — the gold standard in iron therapy — plus Folic Acid and Zinc Sulphate to prevent and treat iron-deficiency anaemia in pregnant women and children.',
    image: productImages.p12,
    pack: '10 x 10 Tablets',
    form: 'Tablets',
    benefits: [
      'Ferrous ascorbate — gold standard in iron therapy',
      'World’s most widely recognised reference iron',
      'Folic acid supports healthy red blood cell formation',
      'Zinc sulphate is vital for foetal growth',
    ],
    indications: [
      'Iron deficiency',
      'Anaemia',
      'Lactation',
      'Menorrhagia',
      'Blood loss',
      'Pregnancy',
    ],
    directions: 'As directed by the physician.',
  },
  {
    id: 'p13',
    name: 'Pantohae D',
    category: 'wellness',
    tagline: 'Fast relief in hyper-acidic reflux',
    composition:
      'Pantoprazole (Gastro-Resistant) 40 mg + Domperidone (Prolonged Release) 30 mg Capsules IP',
    description:
      'Gastro-resistant Pantoprazole 40 mg with prolonged-release Domperidone 30 mg — a safe, potent PPI with faster anti-secretory action, delivering relief from sustained release with minimal cross-reaction.',
    image: productImages.p13,
    pack: '10 x 10 Capsules',
    form: 'Capsules',
    benefits: [
      'Safe, effective and potent PPI pantoprazole',
      'Pellets minimise the risk of dose dumping',
      'Faster anti-secretory action than omeprazole',
      'Domperidone controls reflux and improves lower-oesophageal tone',
    ],
    indications: [
      'Dyspepsia',
      'Reflux esophagitis',
      'Chronic gastritis',
      'Peptic ulcer',
      'GERD',
      'Nausea & vomiting',
    ],
    directions: 'As directed by the physician.',
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
