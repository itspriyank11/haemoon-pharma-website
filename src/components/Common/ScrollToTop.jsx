import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position to the very top instantly whenever the route changes,
 * so each page opens at the top with no scroll animation. Runs in a layout
 * effect (before paint) to avoid any visible jump from the previous position.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
