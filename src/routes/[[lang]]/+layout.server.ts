import type { LayoutServerLoad } from './$types';

export const load = (({ url }) => {
  return { url: url.pathname };
}) satisfies LayoutServerLoad;

export const prerender = true;
