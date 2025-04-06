import { glob } from 'glob'
import prettier from 'prettier'
const { format, resolveConfig } = prettier
import fs from 'fs'
import path from 'path'

export async function Generate() {
    const basePath = 'https://decodeonline.local'
    const prettierConfig = await resolveConfig('./../../prettierrc.js')
    const pages = await glob([
        'pages/**/*.tsx',
        '!pages/**/*.jx',
        '!pages/404.tsx',
    ])

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
              .map((page) => {
                  const path = page
                      .replace('pages', '')
                      .replace('.tsx', '')
                      .replaceAll('\\', '/')
                  const route = path === '/index' ? '' : path
                  return `
                    <url>
                        <loc>${basePath}${route}</loc>
                    </url>
                `
              })
              .join('')}
      </urlset>
      `

    const formatted = format(sitemap, {
        ...prettierConfig,
        parser: 'html',
    })

    const outXLMfile = path.resolve('./', './public/sitemap.xml')    
    fs.writeFileSync(outXLMfile, formatted, {
        encoding: 'utf8',
        flag: 'w',
    })
}

Generate()
