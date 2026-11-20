<script setup>
import { profile } from '../../data/profile.js'
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section id="home" class="hero">
    <div class="container">
      <h1 class="hero__name">{{ profile.name }}</h1>
      <p class="hero__role">{{ profile.role }}</p>
      <p class="hero__tagline">{{ profile.tagline }}</p>
      <p class="hero__location">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        {{ profile.location }}
      </p>

      <div class="hero__actions">
        <BaseButton href="#contact">Get in touch</BaseButton>
        <BaseButton href="#journey" variant="secondary">See my journey</BaseButton>
      </div>

      <ul class="hero__links" aria-label="Profiles">
        <li><a :href="profile.links.github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a :href="profile.links.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a :href="`mailto:${profile.email}`">Email</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: clamp(72px, 12vw, 136px) 0 clamp(64px, 10vw, 112px);
  /* Same divider the other sections use between each other. */
  border-bottom: 1px solid var(--border);
}
.hero__name {
  font-size: clamp(2.5rem, 1.6rem + 4.5vw, 4.25rem);
  font-weight: 750;
  letter-spacing: -0.03em;
}
.hero__role {
  margin-top: 14px;
  font-size: clamp(1.125rem, 1rem + 0.6vw, 1.375rem);
  font-weight: 500;
  color: var(--accent);
}
.hero__tagline {
  margin-top: 20px;
  max-width: 620px;
  font-size: clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem);
  color: var(--muted);
}
.hero__location {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9375rem;
  color: var(--muted);
}
.hero__actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.hero__links {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
}
.hero__links a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.15s ease;
}
.hero__links a:hover {
  color: var(--text);
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
