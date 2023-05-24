import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import { get } from 'svelte/store';

export const load: LayoutLoad = async ({ params }) => {
	if (browser && !params?.lang) {
		console.log('set +layout.ts', get(locale));
		locale.set(window.navigator.language);
	} else {
		locale.set(params.lang);
	}
	await waitLocale();
};
