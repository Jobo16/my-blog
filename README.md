# 个人博客项目

这是一个基于 Astro 框架构建的个人博客网站。

## 特性

- 🎨 简约的苹果风格设计
- 📱 响应式布局，适配各种设备
- 🖼️ 可自定义背景图片
- 🎭 可控制背景和内容透明度
- 📝 Markdown 支持
- 🔍 SEO 友好

## 🚀 快速开始

1. 克隆项目
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 构建网站：`npm run build`
5. 预览构建结果：`npm run preview`

### 目录结构
```
project/
├── src/
│   ├── components/    # 组件
│   ├── content/       # 博客文章（Markdown）
│   ├── layouts/       # 布局模板
│   └── pages/         # 页面
├── public/
│   └── blog-images/   # 博客图片
└── README.md
```
## 📝 如何添加新文章

1. 在 `src/content/blog` 目录下创建新的 Markdown 文件
2. 文件名将作为文章的 URL slug
3. 在文件开头添加 frontmatter 信息：

```markdown
---
title: '文章标题'
date: '2024-02-01'
summary: '文章摘要，会显示在首页的卡片中'
---

这里是文章内容...
```

## 🎨 自定义样式

### 主题颜色
在 `src/layouts/Layout.astro` 中修改 CSS 变量：
```css
:root {
  --primary-color: #007AFF;
  --text-primary: #333333;
  --text-secondary: #666666;
  --background: #FFFFFF;
  --card-background: #F5F5F7;
}
```

### 关于页面背景
1. 将背景图片放在 `public` 目录下
2. 在 `src/layouts/Layout.astro` 中更新背景图片变量：
```css
--about-bg-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/your-image.jpg');
```

## 🔗 社交链接

在 `src/components/Header.astro` 中更新社交媒体链接：

```astro
<a href="mailto:asdfgh20220610@gmail.com" title="Email">
<a href="your-wechat-link" title="WeChat">
<a href="https://twitter.com/BJO221238954295" title="X (Twitter)">
<a href="https://github.com/asdfgh20220610" title="GitHub">
```

## 📄 关于页面

编辑 `src/pages/about.astro` 更新个人信息：

1. 更新个人简介
2. 修改技能列表
3. 更新联系方式
4. 自定义页面样式

## 📱 响应式设计

网站已针对移动设备优化，支持：
- 自适应布局
- 合理的字体大小
- 优化的间距和布局

## 🔍 SEO

- 每个页面都有合适的标题和描述
- 使用语义化 HTML
- 支持 Open Graph 标签

## 🛠 技术栈

- Astro.js
- TypeScript
- Markdown
- CSS3

## 📦 部署

网站可以部署到任何支持静态网站的平台：
- Netlify
- Vercel
- GitHub Pages




## 自定义设置

### 背景图片控制
在页面组件中，你可以通过以下属性控制背景图片：

```astro
<Layout 
    title="页面标题"
    showBackground={true}  // 是否显示背景图片
    backgroundImage="/path/to/image.png"  // 背景图片路径
    contentOpacity={0.9}  // 内容区域透明度（0-1）
>
```



## 部署说明

本项目使用 GitHub Actions 自动部署到 GitHub Pages。确保：

1. 仓库设置中启用了 GitHub Pages
2. 部署源设置为 GitHub Actions
3. 禁用了 Jekyll（通过添加 .nojekyll 文件）

## 注意事项

- 图片资源请放在 `public/blog-images` 目录下
- 博客文章请放在 `src/content/blog` 目录下
- 背景图片透明度和内容区域透明度可以根据需要调整

## 技术栈

- [Astro](https://astro.build/)
- TypeScript
- Markdown

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📝 许可证

MIT