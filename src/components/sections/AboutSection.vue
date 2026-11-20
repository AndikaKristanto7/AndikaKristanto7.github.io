<script setup>
import { about } from '../../data/profile.js'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="about__text">{{ about }}</p>
    </div>
  </section>
</template>

<style scoped>
.about__text {
  max-width: 760px;
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--muted);
}
</style>
