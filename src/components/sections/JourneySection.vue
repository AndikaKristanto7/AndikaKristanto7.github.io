<script setup>
import { journey } from '../../data/profile.js'
import JourneyRail from '../ui/JourneyRail.vue'
import JourneyStep from '../ui/JourneyStep.vue'
</script>

<template>
  <section id="journey" class="section">
    <div class="container">
      <h2 class="section-title">My Journey</h2>

      <div class="journey">
        <JourneyRail :chapters="journey.chapters" />

        <ol class="journey__steps">
          <li
            v-for="(chapter, i) in journey.chapters"
            :key="chapter.title"
            data-chapter
            class="journey__item"
          >
            <JourneyStep :chapter="chapter" :index="i" />
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 48px;
  align-items: start;
}
.journey__steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
/* Desktop: each chapter gets room so one sits in focus at a time. */
.journey__item {
  min-height: 38vh;
  display: flex;
  align-items: center;
}
.journey__item > * {
  width: 100%;
}

/* Mobile: single column; rail becomes the sticky progress bar above cards. */
@media (max-width: 860px) {
  .journey {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    margin-top: 28px;
  }
  .journey__item {
    min-height: 0;
  }
  .journey__steps {
    gap: 16px;
  }
}
</style>
