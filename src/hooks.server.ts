import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';

export const handle: Handle = async ({ event, resolve }) => {
  const lang = event.request.headers.get('accept-language')?.split(',')[0];
  if (lang && !get(locale)) {
    locale.set(lang);
  }
  return resolve(event);
};
