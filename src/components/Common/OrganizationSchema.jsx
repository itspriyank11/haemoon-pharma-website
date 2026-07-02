import { Helmet } from 'react-helmet-async'

import { company, manufacturer, socials, SITE_URL, OG_IMAGE } from '../../data/site'

/**
 * Site-wide structured data (JSON-LD) rendered once from <App>.
 *
 * Emits an Organization graph (name, logo, contact, address, social profiles)
 * plus a WebSite node — the two schemas Google uses to build a knowledge panel
 * and understand the site. Page-specific schemas (Product, BreadcrumbList) live
 * on their own pages via the <Seo jsonLd={...} /> prop.
 */
export default function OrganizationSchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'MedicalOrganization'],
        '@id': `${SITE_URL}/#organization`,
        name: company.name,
        legalName: company.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}${OG_IMAGE}`,
        description:
          'A research-driven pharmaceutical and nutraceutical company delivering world-class, quality-assured medicines and healthcare products.',
        email: company.email,
        telephone: company.phoneHref,
        foundingDate: '2024',
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.address.line1,
          addressRegion: 'Odisha',
          postalCode: '757043',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: company.phoneHref,
          email: company.email,
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
        sameAs: socials.map((s) => s.href),
        manufacturer: {
          '@type': 'Organization',
          name: manufacturer.name,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  )
}
