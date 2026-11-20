<script setup>
import { profile, contact } from '../../data/profile.js'
import BaseButton from '../ui/BaseButton.vue'
// Copy-to-clipboard is attached by src/enhance.js.
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">{{ contact.title }}</h2>
      <p class="contact__lead">{{ contact.lead }}</p>

      <div class="contact__actions">
        <button type="button" class="email" :data-copy-email="profile.email">
          <span class="email__address">{{ profile.email }}</span>
          <span class="email__hint" aria-live="polite" data-copy-hint>Copy</span>
        </button>
        <BaseButton :href="profile.links.github" variant="secondary" external>GitHub</BaseButton>
        <BaseButton :href="profile.links.linkedin" variant="secondary" external>LinkedIn</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__lead {
  color: var(--muted);
  font-size: 1.0625rem;
}
.contact__actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.email {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  max-width: 100%;
  padding: 0 8px 0 20px;
  border: none;
  border-radius: 8px;
  background: var(--text);
  color: var(--bg);
  font: inherit;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
}
.email__address {
  overflow-wrap: anywhere;
  text-align: left;
}
.email__hint {
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bg) 18%, transparent);
  font-size: 0.8125rem;
}
.email:hover {
  background: var(--accent);
  color: var(--on-accent);
}
</style>
