<script setup>
// Static markup in its initial state (chapter 1 focused); src/enhance.js
// updates the count, the bar and the active item while scrolling.
defineProps({
  chapters: { type: Array, required: true },
})
</script>

<template>
  <aside class="rail" aria-label="Journey progress">
    <p class="rail__count" aria-live="polite">
      Chapter <span data-chapter-count>1</span> of {{ chapters.length }}
    </p>
    <div class="rail__bar" aria-hidden="true">
      <div class="rail__fill" data-chapter-fill :style="{ width: `${100 / chapters.length}%` }"></div>
    </div>

    <!-- Desktop only: chapter list (hidden on mobile, see media query). -->
    <ol class="rail__list">
      <li v-for="(c, i) in chapters" :key="c.title">
        <button
          type="button"
          :class="['rail__item', { 'rail__item--active': i === 0 }]"
          :aria-current="i === 0 ? 'step' : undefined"
          :data-chapter-jump="i"
        >
          <span class="rail__year">{{ c.railYear }}</span>
          <span class="rail__title">{{ c.title }}</span>
        </button>
      </li>
    </ol>
  </aside>
</template>

<style scoped>
.rail {
  position: sticky;
  top: calc(var(--nav-h) + 32px);
  align-self: start;
  background: var(--bg);
}
.rail__count {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
}
.rail__bar {
  margin-top: 10px;
  height: 4px;
  border-radius: 2px;
  background: var(--border);
  overflow: hidden;
}
.rail__fill {
  height: 100%;
  background: var(--accent);
  transition: width 0.2s ease;
}
.rail__list {
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.rail__item {
  width: 100%;
  min-height: 44px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border: none;
  border-left: 3px solid var(--border);
  border-radius: 0 8px 8px 0;
  background: transparent;
  color: var(--muted);
  font: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.rail__item:hover {
  color: var(--text);
}
.rail__item--active {
  border-left-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent-ink);
  font-weight: 600;
}
.rail__year {
  font-family: var(--mono);
  font-size: 0.75rem;
}
.rail__title {
  font-size: 0.875rem;
  line-height: 1.35;
}

/*
 * Mobile: collapse to a slim, SOLID progress bar that sticks right under the
 * navbar. The chapter list is hidden so nothing can overlap the cards.
 */
@media (max-width: 860px) {
  .rail {
    top: var(--nav-h);
    z-index: 10;
    margin: 0 calc(var(--gutter) * -1);
    padding: 12px var(--gutter);
    border-bottom: 1px solid var(--border);
  }
  .rail__list {
    display: none;
  }
}
</style>
