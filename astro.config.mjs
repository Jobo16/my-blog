import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://asdfgh20220610.github.io',
  build: {
    // 启用资源压缩
    minify: true,
    // 生成 sitemap
    sitemap: true
  },
  markdown: {
    // 启用 GitHub Flavored Markdown
    remarkPlugins: ['remark-gfm'],
    // 启用代码块语法高亮
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
