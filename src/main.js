// Dev entry: Vue renders the page live (hot reload), then the same plain-JS
// behavior used in production is attached. Production doesn't use this file;
// see scripts/build.mjs and entry-static.js.
import { createApp } from 'vue'
import App from './App.vue'
import { enhance } from './enhance.js'
import './styles/global.css'

createApp(App).mount('#app')
enhance()
