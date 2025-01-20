# 个人博客项目

这是一个基于 Astro 框架构建的个人博客网站。

## 特性

- 简约的苹果风格设计
- 响应式布局，适配各种设备
- 可自定义背景图片
- 可控制背景和内容透明度
- Markdown 支持
- SEO 友好

## 环境要求

- Node.js 版本：14.x 或更高
- npm 包管理器

## 快速开始

### 本地开发
1. 克隆项目
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
   - 访问 `http://localhost:3000` 查看网站
   - 修改代码后会自动刷新

### 生产构建
1. 构建网站：`npm run build`
2. 启动生产服务器：`npm start`
   - 访问 `http://localhost:80` 查看网站

## 项目结构
```
project/
├── src/
│   ├── components/    # 组件
│   ├── content/       # 博客文章（Markdown）
│   ├── layouts/       # 布局模板
│   └── pages/         # 页面
├── public/           # 静态资源
│   ├── blog-images/  # 博客图片
│   ├── wechat.ico    # 微信图标
│   └── wechaterweima.jpg  # 微信二维码
├── astro.config.mjs  # Astro 配置
├── server.js         # Express 服务器
└── README.md
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
  output: 'server',        // 输出模式：服务端渲染
  adapter: node({          // 使用 Node.js 适配器
    mode: 'standalone'     // 独立模式运行
  }),
  site: 'https://asdfgh20220610.github.io',  // 网站地址
  experimental: {
    assets: false         // 关闭实验性资源功能
  }
});
```

## 依赖说明

主要依赖：
- Astro v2.x：主框架
- Express：生产环境服务器
- @astrojs/node：Node.js 适配器

## 更新日志

### 2024-01-20
- 降级 Astro 版本到 2.x 以兼容 Node.js 14
- 修改静态资源处理方式
- 添加 Express 服务器支持
- 优化部署配置