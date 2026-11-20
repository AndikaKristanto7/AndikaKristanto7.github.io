// Build-time only: renders App.vue to an HTML string (see scripts/build.mjs).
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import './styles/global.css'

export function render() {
  return renderToString(createSSRApp(App))
}
