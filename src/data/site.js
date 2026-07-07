/**
 * Single source of truth for company-wide details (NAP, hours, socials, nav).
 * Update these once and they propagate to the navbar, footer and contact page.
 */

/**
 * Public site URL — used for canonical links, Open Graph, sitemap and JSON-LD.
 * When the real domain goes live, update this ONE value (and public/robots.txt
 * + public/sitemap.xml) and every SEO tag will point to the correct origin.
 * No trailing slash.
 */
export const SITE_URL = 'https://www.heamoonpharma.com'

/** Default social-share image (relative to SITE_URL). */
export const OG_IMAGE = '/og-image.jpg'

export const company = {
  name: 'Haemoon Pharma Pvt. Ltd.',
  shortName: 'Haemoon',
  legalName: 'Haemoon Pharma Private Limited',
  tagline: 'Advancing Health Through Science',
  email: 'heamoonpharma1960@heamoonpharma.com',
  phone: '+91 98765 43210', // TODO: replace with official phone number
  phoneHref: '+919876543210',
  timing: '9:30 AM – 6:30 PM',

  // Registered office (primary)
  address: {
    line1: 'Ward No. 3, Kucheibudhi, P.O. Rairangpur',
    line2: 'Dist. Mayurbhanj, Odisha 757043, India',
  },

  // Google Maps embed for the registered office (Rairangpur, Odisha).
  // Uses the full address so Google places the pin as precisely as it can.
  mapEmbed:
    'https://www.google.com/maps?q=Kucheibudhi,+Rairangpur,+Mayurbhanj,+Odisha+757043&output=embed',
  mapLink:
    'https://www.google.com/maps?q=Ward+No.+3,+Kucheibudhi,+Rairangpur,+Mayurbhanj,+Odisha+757043',

  // Marketing office
  marketingOffice: {
    line1: 'Ward No. 6, Post Rairangpur',
    line2: 'Dist. Mayurbhanj, Odisha 757043, India',
  },

  // Statutory / registration details (from official records)
  cin: 'U46497OD2024PTC046029',
  gst: '21AAHCH3857Q1Z4',
  registeredOn: '17 March 2025',
}

/**
 * Contract manufacturer of Haemoon Pharma's products. Haemoon is the brand
 * owner / marketer ("Client"); products are manufactured by Walter Healthcare.
 * Shown on the Contact page and footer for regulatory transparency.
 */
export const manufacturer = {
  name: 'Walter Healthcare Private Limited',
  shortName: 'Walter Healthcare',
  office: {
    line1: 'Plot No. 174, Industrial Area Phase IX',
    line2: 'Mohali, Punjab 160062, India',
  },
  site: {
    line1: 'B-29, Industrial Focal Point, Chanalon',
    line2: 'Kurali, Mohali, Punjab 140103, India',
  },
}

export const businessHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:30 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Public Holidays', time: 'Closed' },
]

export const navLinks = [
  { label: 'About Us', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
]

export const productLinks = [
  { label: "Women's Health", to: '/products?category=womens' },
  { label: 'Vitamins & Nutrition', to: '/products?category=vitamins' },
  { label: 'Nutraceuticals', to: '/products?category=nutraceuticals' },
  { label: 'Wellness & Care', to: '/products?category=wellness' },
  { label: 'Haemo Tone Syrup', to: '/products?product=p2' },
  { label: 'Livohae Tablets', to: '/products?product=p5' },
]

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'Twitter / X', href: 'https://www.twitter.com', icon: 'twitter' },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
]
