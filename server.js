import { handler } from './dist/server/entry.mjs';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 80;

// 静态文件服务
app.use(express.static(join(__dirname, 'dist/client')));

// 所有请求都交给 Astro 处理
app.use(handler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
