// +layout.ts
import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
  if (params?.lang) {
    locale.set(params.lang);
  } else if (browser) {
    console.log('setting locale', window.navigator)
    locale.set(window.navigator.language.split('-')[0]);
  }
  await waitLocale();
};
