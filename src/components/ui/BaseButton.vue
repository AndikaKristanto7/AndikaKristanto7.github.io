<script setup>
defineProps({
  href: { type: String, default: undefined },
  variant: { type: String, default: 'primary' }, // 'primary' | 'secondary'
  external: { type: Boolean, default: false },
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :class="['btn', `btn--${variant}`]"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
  <button v-else type="button" :class="['btn', `btn--${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 8px;
  font: inherit;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.btn--primary {
  background: var(--text);
  color: var(--bg);
}
.btn--primary:hover {
  background: var(--accent);
  color: var(--on-accent);
}
.btn--secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}
.btn--secondary:hover {
  border-color: var(--text);
}
</style>
