<script setup>
import { profile } from '../../data/profile.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <span>© {{ year }} {{ profile.name }}</span>
      <span>Built with Vue 3 + Vite</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
  color: var(--muted);
  font-size: 0.875rem;
}
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}
</style>
