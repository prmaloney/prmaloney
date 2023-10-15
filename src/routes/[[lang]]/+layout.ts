// +layout.ts
import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import { defaultLocale, getEnOrDeLocale } from '$lib/i18n/utils';

export const load: LayoutLoad = async ({ params }) => {
  if (params?.lang) {
    locale.set(params.lang);
  } else if (browser) {
    locale.set(getEnOrDeLocale(window.navigator.language) || defaultLocale);
  }
  await waitLocale();
};
