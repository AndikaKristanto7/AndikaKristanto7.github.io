<script setup>
defineProps({
  label: { type: String, required: true },
  isNew: { type: Boolean, default: false },
  size: { type: String, default: 'md' }, // 'md' | 'sm'
})
</script>

<template>
  <li :class="['chip', `chip--${size}`, { 'chip--new': isNew }]">
    <span v-if="isNew" aria-hidden="true">+ </span>{{ label }}<span v-if="isNew" class="visually-hidden"> (new in this chapter)</span>
  </li>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text);
  white-space: nowrap;
}
.chip--md {
  font-size: 0.875rem;
  padding: 6px 14px;
}
.chip--sm {
  font-size: 0.8125rem;
  padding: 3px 11px;
}
.chip--new {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent-ink);
  font-weight: 600;
}
</style>
