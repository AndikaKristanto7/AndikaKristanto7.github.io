<script setup>
import { profile, nav } from '../../data/profile.js'
// Behavior (theme, menu, active link) is attached by src/enhance.js.
</script>

<template>
  <header class="nav">
    <div class="container nav__inner">
      <a href="#home" class="nav__logo" aria-label="Back to top" data-menu-close>{{ profile.initials }}</a>

      <nav id="site-menu" class="nav__menu" aria-label="Main">
        <a
          v-for="item in nav"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav__link"
          :data-nav-link="item.id"
          data-menu-close
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="nav__actions">
        <button type="button" class="icon-btn" aria-label="Toggle dark mode" data-theme-toggle>
          <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>
        <button
          type="button"
          class="icon-btn nav__toggle"
          aria-expanded="false"
          aria-controls="site-menu"
          aria-label="Open menu"
          data-menu-toggle
        >
          <svg class="icon-open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg class="icon-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  height: var(--nav-h);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.nav__logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--text);
  color: var(--bg);
  font-weight: 700;
  font-size: 0.9375rem;
  text-decoration: none;
  flex-shrink: 0;
}
.nav__menu {
  display: flex;
  gap: 4px;
}
.nav__link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 8px;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
}
.nav__link:hover {
  color: var(--text);
}
.nav__link--active {
  color: var(--accent);
  font-weight: 600;
}
.nav__actions {
  display: flex;
  gap: 8px;
}
.icon-btn {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
  color: var(--text);
  cursor: pointer;
}
.icon-btn:hover {
  border-color: var(--text);
}
.nav__toggle {
  display: none;
}
/* Icon swaps are pure CSS, driven by the theme attribute / aria-expanded. */
.icon-sun,
.icon-close {
  display: none;
}
:root[data-theme='dark'] .icon-sun,
.nav__toggle[aria-expanded='true'] .icon-close {
  display: block;
}
:root[data-theme='dark'] .icon-moon,
.nav__toggle[aria-expanded='true'] .icon-open {
  display: none;
}

/* Mobile: menu becomes a solid drawer under the bar (never transparent). */
@media (max-width: 760px) {
  .nav__toggle {
    display: grid;
  }
  .nav__menu {
    display: none;
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 8px var(--gutter) 16px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
  }
  .nav__menu--open {
    display: flex;
  }
  .nav__link {
    padding: 0 8px;
    font-size: 1rem;
  }
}
</style>
