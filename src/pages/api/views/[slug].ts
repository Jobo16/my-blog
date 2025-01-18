import type { APIRoute } from 'astro';
import { getViews, incrementViews } from '../../../lib/viewCounter';

export const get: APIRoute = async ({ params }) => {
    const { slug } = params;
    const views = await getViews(slug);
    return new Response(JSON.stringify({ views }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const post: APIRoute = async ({ params }) => {
    const { slug } = params;
    const views = await incrementViews(slug);
    return new Response(JSON.stringify({ views }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
