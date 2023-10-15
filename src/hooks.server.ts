// hooks.server.ts
import { defaultLocale, getEnOrDeLocale } from '$lib/i18n/utils';
import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
  const lang = event.request.headers.get('accept-language')?.split(',')[0];
  if (lang) {
    locale.set(getEnOrDeLocale(lang) || defaultLocale);
  }
  return resolve(event);
};
