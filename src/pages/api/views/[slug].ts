import type { APIRoute } from 'astro';
import { incrementViews, getViews } from '../../../lib/db';

export const get: APIRoute = async ({ params }) => {
  const { slug } = params;
  const views = getViews(slug);
  return new Response(JSON.stringify({ views }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const post: APIRoute = async ({ params }) => {
  const { slug } = params;
  incrementViews(slug);
  const views = getViews(slug);
  return new Response(JSON.stringify({ views }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
