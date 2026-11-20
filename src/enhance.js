/**
 * All page interactivity, in plain JS (no Vue). The Vue components only
 * produce the markup; this file adds behavior to it via data attributes.
 * It runs in dev (after Vue mounts, see main.js) and in production
 * (on the pre-rendered HTML, see entry-static.js), so there is one copy.
 *
 * Hooks it expects in the markup:
 *   [data-theme-toggle]      theme button
 *   [data-menu-toggle]       hamburger; controls #site-menu
 *   [data-menu-close]        links that close the mobile menu
 *   [data-nav-link="<id>"]   navbar links, highlighted for the visible section
 *   [data-chapter]           one per Journey chapter (scroll target)
 *   [data-chapter-card]      the card inside it that gets the focused style
 *   [data-chapter-jump="i"]  rail buttons that scroll to chapter i
 *   [data-chapter-count]     "Chapter X" number
 *   [data-chapter-fill]      progress bar fill
 *   [data-copy-email="addr"] copy-to-clipboard button; [data-copy-hint] inside
 */

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function enhance() {
  const root = document.documentElement

  /* ---- Theme ---- */
  function syncThemeLabel() {
    const dark = root.getAttribute('data-theme') === 'dark'
    document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
      b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode')
    })
  }
  function toggleTheme() {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable (private mode): theme still applies for this visit */
    }
    syncThemeLabel()
  }

  /* ---- Mobile menu ---- */
  function setMenu(open) {
    const btn = document.querySelector('[data-menu-toggle]')
    const menu = document.getElementById('site-menu')
    if (!btn || !menu) return
    btn.setAttribute('aria-expanded', String(open))
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    menu.classList.toggle('nav__menu--open', open)
  }

  /* ---- Copy email ---- */
  let copyTimer
  async function copyEmail(btn) {
    const email = btn.getAttribute('data-copy-email')
    const hint = btn.querySelector('[data-copy-hint]')
    try {
      await navigator.clipboard.writeText(email)
      if (hint) hint.textContent = 'Copied!'
      clearTimeout(copyTimer)
      copyTimer = setTimeout(() => hint && (hint.textContent = 'Copy'), 2000)
    } catch {
      // Clipboard blocked (e.g. insecure context): fall back to the mail client.
      window.location.href = `mailto:${email}`
    }
  }

  /* ---- Journey: focus the chapter closest to the viewport middle ---- */
  // Scroll-based (not IntersectionObserver) so it stays correct after
  // jumping straight past the section via a nav link.
  let focused = -1
  function updateChapters() {
    const items = [...document.querySelectorAll('[data-chapter]')]
    if (!items.length) return
    const mid = window.innerHeight / 2
    let best = 0
    let bestDist = Infinity
    items.forEach((el, i) => {
      const r = el.getBoundingClientRect()
      const dist = Math.abs(r.top + r.height / 2 - mid)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    if (best === focused) return
    focused = best

    items.forEach((el, i) => {
      el.querySelector('[data-chapter-card]')?.classList.toggle('step--focused', i === best)
    })
    document.querySelectorAll('[data-chapter-jump]').forEach((b) => {
      const on = Number(b.getAttribute('data-chapter-jump')) === best
      b.classList.toggle('rail__item--active', on)
      if (on) b.setAttribute('aria-current', 'step')
      else b.removeAttribute('aria-current')
    })
    const count = document.querySelector('[data-chapter-count]')
    if (count) count.textContent = String(best + 1)
    const fill = document.querySelector('[data-chapter-fill]')
    if (fill) fill.style.width = `${((best + 1) / items.length) * 100}%`
  }
  function scrollToChapter(i) {
    const el = document.querySelectorAll('[data-chapter]')[i]
    el?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' })
  }

  let frame = 0
  function onScroll() {
    if (!frame) {
      frame = requestAnimationFrame(() => {
        frame = 0
        updateChapters()
      })
    }
  }

  /* ---- Navbar: highlight the section in the middle band of the viewport ---- */
  function setActive(id) {
    document.querySelectorAll('[data-nav-link]').forEach((a) => {
      const on = a.getAttribute('data-nav-link') === id
      a.classList.toggle('nav__link--active', on)
      if (on) a.setAttribute('aria-current', 'true')
      else a.removeAttribute('aria-current')
    })
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    document.querySelectorAll('[data-nav-link]').forEach((a) => {
      const section = document.getElementById(a.getAttribute('data-nav-link'))
      if (section) observer.observe(section)
    })
  }

  /* ---- Wiring (delegated, so it survives dev hot reloads) ---- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest(
      '[data-theme-toggle],[data-menu-toggle],[data-menu-close],[data-chapter-jump],[data-copy-email]',
    )
    if (!t) return
    if (t.hasAttribute('data-theme-toggle')) toggleTheme()
    else if (t.hasAttribute('data-menu-toggle')) setMenu(t.getAttribute('aria-expanded') !== 'true')
    else if (t.hasAttribute('data-menu-close')) setMenu(false)
    else if (t.hasAttribute('data-chapter-jump')) scrollToChapter(Number(t.getAttribute('data-chapter-jump')))
    else if (t.hasAttribute('data-copy-email')) copyEmail(t)
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false)
  })
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })

  syncThemeLabel()
  updateChapters()
}
