/**
 * Single source of truth for company-wide details (NAP, hours, socials, nav).
 * Update these once and they propagate to the navbar, footer and contact page.
 */

export const company = {
  name: 'Haemoon Pharma Pvt. Ltd.',
  shortName: 'Haemoon',
  legalName: 'Haemoon Pharma Private Limited',
  tagline: 'Advancing Health Through Science',
  email: 'care@haemoonpharma.com',
  phone: '+91 98765 43210', // TODO: replace with official phone number
  phoneHref: '+919876543210',

  // Registered office (primary)
  address: {
    line1: 'Ward No. 3, Kucheibudhi, P.O. Rairangpur',
    line2: 'Dist. Mayurbhanj, Odisha 757043, India',
  },

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
  { label: "Women's Health", to: '/products' },
  { label: 'Vitamins & Nutrition', to: '/products' },
  { label: 'Nutraceuticals', to: '/products' },
  { label: 'Wellness & Care', to: '/products' },
  { label: 'Haemo Tone Syrup', to: '/products' },
  { label: 'Livohae Tablets', to: '/products' },
]

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'Twitter / X', href: 'https://www.twitter.com', icon: 'twitter' },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
]
