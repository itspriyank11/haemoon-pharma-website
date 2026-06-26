# Haemoon Pharma Pvt. Ltd. — Pharmaceutical Company Website

A modern, premium, fully responsive pharmaceutical company website built with
**React + Vite**, **React Router**, **Framer Motion** and **Lucide-style
icons**. It features a polished blue/teal/white design system, glassmorphism,
soft gradients, scroll-triggered animations, animated counters and
micro-interactions throughout.

> All imagery and copy are professional placeholders, structured so they can be
> swapped for real company assets without touching any layout.

## Pages

| Route       | Page         | Highlights                                                                 |
| ----------- | ------------ | -------------------------------------------------------------------------- |
| `/`         | About Us     | Hero, About + Vision/Mission/Values, Why Choose Us, Stats, Categories, CTA |
| `/products` | Products     | Hero banner, search, category filter, animated responsive product grid     |
| `/contact`  | Contact Us   | Contact cards, validated form, business hours, map placeholder             |

## Tech Stack

- **React 19 + Vite** — fast dev server & optimized builds
- **React Router DOM** — client-side routing with animated page transitions
- **Framer Motion** — entrance, scroll-reveal, stagger, counter & hover animations
- **CSS Modules + global design tokens** — clean, scalable, no heavy UI library
- **Custom inline SVG icons** + Lucide React for UI icons

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Project Structure

```text
src/
├── assets/
│   ├── images/          # drop real image assets here
│   └── icons/
├── components/
│   ├── Navbar/          # sticky responsive nav + mobile hamburger menu
│   ├── Footer/          # footer + newsletter + back-to-top
│   ├── Hero/            # landing hero with animated entrance
│   ├── ProductCard/     # reusable product card
│   ├── CTA/             # call-to-action banner
│   ├── Stats/           # animated counters
│   ├── ContactForm/     # validated contact form
│   └── Common/          # Reveal, StaggerGroup, AnimatedCounter, Logo,
│                        # SectionHeading, SmartImage, PageHero, BrandIcons…
├── pages/
│   ├── About.jsx        # landing page
│   ├── Products.jsx     # products page
│   └── Contact.jsx      # contact page
├── data/
│   ├── products.js      # 12 products across 6 categories
│   ├── images.js        # central image registry (swap placeholders here)
│   └── site.js          # company NAP, hours, nav & social links
├── styles/
├── App.jsx              # routes + layout
├── main.jsx             # app entry (BrowserRouter)
└── index.css            # design tokens + global styles
```

## Replacing Placeholder Content

Everything is centralized for easy hand-off to a real brand:

- **Images** — edit URLs in [`src/data/images.js`](src/data/images.js). To use
  local files, drop them in `src/assets/images/`, import them at the top of that
  file, and replace the string values. Layout never needs to change — every
  image renders through `<SmartImage>` with a reserved aspect ratio.
- **Company details** (name, address, phone, email, hours, socials) —
  [`src/data/site.js`](src/data/site.js).
- **Products & categories** — [`src/data/products.js`](src/data/products.js).
- **Brand colors & typography** — CSS custom properties at the top of
  [`src/index.css`](src/index.css).
- **Logo** — [`src/components/Common/Logo.jsx`](src/components/Common/Logo.jsx)
  and `public/favicon.svg`.
- **Contact form** — wire the `handleSubmit` in
  [`ContactForm.jsx`](src/components/ContactForm/ContactForm.jsx) to your email
  service / backend (marked with a `TODO`).
- **Google Map** — replace the placeholder block in
  [`Contact.jsx`](src/pages/Contact.jsx) with an `<iframe>` embed; the space is
  already reserved.

## Deployment

The build outputs a static SPA to `dist/`. SPA routing fallbacks are included:

- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`

For other static hosts, route all unknown paths to `index.html`.

## Accessibility & Performance

- Semantic HTML, labelled form fields, descriptive `alt` text and ARIA roles
- Keyboard-visible focus styles and a "skip to top" control
- `prefers-reduced-motion` respected across all animations
- Lazy-loaded images with shimmer skeletons to avoid layout shift
```
