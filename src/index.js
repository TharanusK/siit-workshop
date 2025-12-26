export default {
  async fetch(request, env, ctx) {
    // Try to serve static assets first
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    // Fallback or custom logic here
    return new Response('Not Found', { status: 404 });
  },
};
