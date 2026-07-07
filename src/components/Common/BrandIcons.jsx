/**
 * Lightweight inline brand/social SVG icons.
 *
 * lucide-react no longer ships third-party brand marks, so we provide our own
 * minimal, consistent set here. Each accepts a `size` prop and inherits the
 * current text color via `fill="currentColor"`.
 */

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
})

export function LinkedinIcon({ size = 18 }) {
  return (
    <svg {...base(size)}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.2H6v7.2h2.34ZM7.17 10.1a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72ZM18 18.34v-4.13c0-2.2-1.18-3.23-2.75-3.23-1.27 0-1.84.7-2.16 1.19v-1.03H10.8c.03.66 0 7.2 0 7.2h2.3v-4.02c0-.2.02-.41.08-.56.16-.41.54-.84 1.18-.84.83 0 1.16.63 1.16 1.56v3.86H18Z" />
    </svg>
  )
}

export function TwitterIcon({ size = 18 }) {
  return (
    <svg {...base(size)}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.69l7.73-8.84L1.26 2.25h6.82l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
    </svg>
  )
}

export function FacebookIcon({ size = 18 }) {
  return (
    <svg {...base(size)}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 18 }) {
  // Outline (stroke) style so the camera reads clearly on the coloured tile —
  // a solid fill would flatten into an unrecognisable blob.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

