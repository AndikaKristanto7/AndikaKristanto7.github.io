// Production build: outputs plain HTML + CSS + a small JS file, with no Vue
// runtime shipped.
//   1. SSR-build App.vue (+ its CSS) into .ssr/ and render it to an HTML string.
//   2. Client-build index.html with that HTML inlined, the CSS linked, and
//      src/entry-static.js (plain-JS behavior) instead of the Vue entry.
import { build } from 'vite'
import { readdir, rm, copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const ssrDir = resolve(root, '.ssr')

// 1. Server build → render to string
await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.js',
    outDir: ssrDir,
    emptyOutDir: true,
    ssrEmitAssets: true, // emit the component CSS, which step 2 picks up
    cssCodeSplit: false,
  },
})

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const appHtml = (await render())
  // Drop Vue's fragment/placeholder comments; nothing hydrates this HTML.
  .replace(/<!--\[-->|<!--\]-->|<!---->/g, '')

const assets = await readdir(resolve(ssrDir, 'assets')).catch(() => [])
const cssFile = assets.find((f) => f.endsWith('.css'))
if (!cssFile) throw new Error('SSR build emitted no CSS')
await copyFile(resolve(ssrDir, 'assets', cssFile), resolve(ssrDir, 'app.css'))

// 2. Client build of the static page
await build({
  root,
  plugins: [
    {
      name: 'static-page',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          const out = html
            .replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
            .replace('/src/main.js', '/src/entry-static.js')
            .replace('</head>', '  <link rel="stylesheet" href="/.ssr/app.css" />\n  </head>')
          if (out.includes('<div id="app"></div>') || !out.includes('/src/entry-static.js')) {
            throw new Error('index.html placeholders not found')
          }
          return out
        },
      },
    },
  ],
})

await rm(ssrDir, { recursive: true, force: true })
