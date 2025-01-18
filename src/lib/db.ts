import Database from 'better-sqlite3';

const db = new Database('views.db');

// 创建表
db.exec(`
  CREATE TABLE IF NOT EXISTS article_views (
    slug TEXT PRIMARY KEY,
    views INTEGER DEFAULT 0
  )
`);

export function incrementViews(slug: string) {
  db.prepare(`
    INSERT INTO article_views (slug, views)
    VALUES (?, 1)
    ON CONFLICT(slug) DO UPDATE SET views = views + 1
  `).run(slug);
}

export function getViews(slug: string): number {
  const result = db.prepare('SELECT views FROM article_views WHERE slug = ?').get(slug);
  return result?.views || 0;
}
