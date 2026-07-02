import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import { company, SITE_URL, OG_IMAGE } from '../../data/site'

/**
 * Per-page SEO head tags: title, meta description, canonical URL and full
 * Open Graph + Twitter Card sets. Drop `<Seo ... />` at the top of any page.
 *
 * Title is composed as "<title> — Haemoon Pharma" unless it already contains
 * the brand name. The canonical/OG URL is derived from the current route so it
 * always matches the page the user is on.
 *
 * @param {string} title        page title (without brand suffix)
 * @param {string} description  meta description (~150–160 chars)
 * @param {string} image        social-share image path (defaults to OG_IMAGE)
 * @param {string} type         Open Graph type (default "website")
 * @param {boolean} noindex     set true to keep a page out of search results
 * @param {object} jsonLd       optional structured-data object (JSON-LD)
 */
export default function Seo({
  title,
  description,
  image = OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const { pathname } = useLocation()
  const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`

  const brand = company.name
  const fullTitle =
    title && !title.includes('Haemoon') ? `${title} — ${brand}` : title || brand

  const imageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brand} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
