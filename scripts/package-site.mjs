import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.join(root, 'prototype')
const output = path.join(root, 'build', 'site')

if (output !== path.join(root, 'build', 'site') || !output.startsWith(`${root}${path.sep}`)) {
  throw new Error('Invalid site output path')
}

fs.rmSync(output, { recursive: true, force: true })
fs.mkdirSync(output, { recursive: true })
fs.cpSync(source, output, {
  recursive: true,
  filter: file => {
    const relative = path.relative(source, file)
    if (!relative) return true
    return !relative.split(path.sep).some(part => part.startsWith('.')) && !file.endsWith('.md')
  },
})

for (const required of ['index.html', 'app.js', 'styles.css', 'bonus-tour.js', 'bonus-tour.css', 'activation-screen.css']) {
  if (!fs.existsSync(path.join(output, required))) throw new Error(`Missing ${required} in site package`)
}

fs.writeFileSync(path.join(output, '.nojekyll'), '')
console.log(`GitHub Pages package ready: ${path.relative(root, output)}`)
