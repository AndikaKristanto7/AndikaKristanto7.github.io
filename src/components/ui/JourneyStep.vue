<script setup>
import SkillChip from './SkillChip.vue'
// step--focused is toggled by src/enhance.js; chapter 1 starts focused.

defineProps({
  chapter: { type: Object, required: true },
  index: { type: Number, required: true },
})
</script>

<template>
  <article :class="['step', { 'step--focused': index === 0 }]" data-chapter-card>
    <header class="step__head">
      <span class="step__label">
        Chapter {{ index + 1 }}<template v-if="chapter.current"> · Today</template>
      </span>
      <span class="step__year">{{ chapter.year }}</span>
    </header>
    <h3 class="step__title">{{ chapter.title }}</h3>
    <p class="step__where">{{ chapter.where }}</p>
    <p class="step__story">{{ chapter.story }}</p>
    <ul v-if="chapter.known.length || chapter.new.length" class="step__chips" aria-label="Skills">
      <SkillChip v-for="s in chapter.known" :key="s" :label="s" size="sm" />
      <SkillChip v-for="s in chapter.new" :key="`n-${s}`" :label="s" size="sm" is-new />
    </ul>
  </article>
</template>

<style scoped>
.step {
  padding: clamp(20px, 4vw, 32px);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  opacity: 0.35;
  transition: opacity 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}
.step--focused {
  opacity: 1;
  border-color: var(--accent);
  background: var(--bg);
  box-shadow: var(--shadow);
}
.step__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 4px 12px;
}
.step__label {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--muted);
}
.step--focused .step__label {
  color: var(--accent);
}
.step__year {
  font-family: var(--mono);
  font-size: 0.875rem;
  color: var(--accent);
}
.step__title {
  margin-top: 6px;
  font-size: clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.step__where {
  margin-top: 4px;
  font-size: 0.875rem;
  color: var(--muted);
}
.step__story {
  margin-top: 14px;
  font-size: 1rem;
  line-height: 1.75;
  max-width: 680px;
}
.step__chips {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (prefers-reduced-motion: reduce) {
  .step {
    opacity: 1;
  }
}
</style>
