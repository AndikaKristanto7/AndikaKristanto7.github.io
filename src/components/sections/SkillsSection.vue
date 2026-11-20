<script setup>
import { skillGroups } from '../../data/profile.js'
import SkillChip from '../ui/SkillChip.vue'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills">
        <div v-for="group in skillGroups" :key="group.title" class="skills__group">
          <h3 class="skills__title">{{ group.title }}</h3>
          <ul class="skills__list">
            <SkillChip v-for="item in group.items" :key="item" :label="item" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.skills__title {
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 12px;
}
.skills__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
