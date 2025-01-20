# 个人博客项目

这是一个基于 Astro 框架构建的个人博客网站。

## 特性

- 简约的苹果风格设计
- 响应式布局，适配各种设备
- 可自定义背景图片
- 可控制背景和内容透明度
- Markdown 支持
- SEO 友好
- 快速加载（静态生成）

## 环境要求

- Node.js 版本：14.17.0 或更高
- npm 包管理器

## 快速开始

### 本地开发
1. 克隆项目
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
   - 访问 `http://localhost:3000` 查看网站
   - 修改代码后会自动刷新

### 生产预览
1. 构建网站：`npm run build`
2. 预览构建结果：`npm start` 或 `npm run preview`
   - 访问 `http://localhost:4321` 查看网站

## 项目结构
```
project/
├── src/
│   ├── components/    # 组件
│   │   ├── Header.astro   # 导航栏组件
│   │   └── Card.astro     # 文章卡片组件
│   ├── content/       # 博客文章（Markdown）
│   │   └── blog/         # 博客文章目录
│   ├── layouts/       # 布局模板
│   └── pages/         # 页面
│       ├── blog/      # 博客相关页面
│       └── about.astro # 关于页面
├── public/           # 静态资源
│   ├── blog-images/  # 博客图片
│   ├── wechat.ico    # 微信图标
│   └── wechaterweima.jpg  # 微信二维码
└── astro.config.mjs  # Astro 配置
```

## 如何添加新文章

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

## 部署说明

### 腾讯云 Web 应用托管

1. 在腾讯云 Web 应用托管中创建新应用
2. 配置构建参数：
   - 构建命令：`npm run build`
   - 安装命令：`npm install`
   - 产物目录：`dist`
3. 部署应用

### 注意事项

- 静态资源（如图片）请放在 `public` 目录下
- 在组件中引用静态资源时使用绝对路径，例如：
  ```html
  <img src="/wechat.ico" alt="微信图标" />
  ```

## 配置说明

### Astro 配置 (astro.config.mjs)

```javascript
export default defineConfig({
  site: 'https://asdfgh20220610.github.io'  // 网站地址
});
```

## 主要依赖

- Astro v1.9.2：主框架，用于构建静态网站
- @astrojs/markdown-remark v1.2.0：Markdown 支持
- remark-gfm：增强的 Markdown 功能

## 更新日志

### 2024-01-20
- 降级 Astro 版本到 1.9.2 以兼容 Node.js 14.17.0
- 简化项目配置，移除实验性功能
- 优化项目结构，采用纯静态生成模式
- 改进静态资源处理方式

## 常见问题

### 1. 开发模式与生产模式的区别
- 开发模式（`npm run dev`）：
  - 支持热重载（修改代码后自动刷新）
  - 运行在 3000 端口
  - 适合本地开发

- 生产模式（`npm start`）：
  - 运行编译后的静态文件
  - 运行在 4321 端口
  - 用于预览生产环境

### 2. 静态资源处理
- 所有静态文件（图片、图标等）都应放在 `public` 目录
- 访问时使用根路径，如 `/wechat.ico`

### 3. 文章编写
- 支持所有标准 Markdown 语法
- 支持 GFM（GitHub Flavored Markdown）
- 可以使用 frontmatter 添加元数据