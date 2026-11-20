<script setup>
import NavBar from './components/layout/NavBar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import JourneySection from './components/sections/JourneySection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <NavBar />
  <main id="main">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <JourneySection />
    <ContactSection />
  </main>
  <AppFooter />
</template>

<style>
.skip-link {
  position: absolute;
  left: 16px;
  top: -48px;
  z-index: 100;
  padding: 8px 14px;
  border-radius: 8px;
  background: var(--text);
  color: var(--bg);
  text-decoration: none;
  font-weight: 600;
}
.skip-link:focus {
  top: 12px;
}
</style>
