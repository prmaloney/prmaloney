import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';
import { defaultLocale, getEnOrDeLocale } from './utils';

register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? getEnOrDeLocale(window.navigator.language) : defaultLocale
});
