<script lang="ts">
    import '../../app.css';
    import '$lib/i18n';
    import Icon from '$components/icon.svelte';
    import { page } from '$app/stores';
    import Burger from '$components/Icons/Burger.svelte';
    import { _, locale, locales } from 'svelte-i18n';
    import { goto } from '$app/navigation';
    import HeaderItems from '$components/HeaderItems.svelte';
    import LanguageSwitcher from '$components/LanguageSwitcher.svelte';

    function getLinks(lang: string | undefined) {
        const prefix = lang ? `/${lang}` : '';
        return [
            {
                href: prefix + '/',
                titleKey: 'nav.home'
            },
            {
                href: prefix + '/projects',
                titleKey: 'nav.projects'
            },
            {
                href: prefix + '/about',
                titleKey: 'nav.about'
            }
        ];
    }

    let links = getLinks($page.params.lang);

    function onLocaleChange(lang: string) {
        const oldLocale = $page.params.lang;
        $locale = lang;
        links = getLinks(lang || undefined);
        const newUrl = oldLocale
            ? $page.url.pathname.replace(`/${oldLocale}`, `/${lang}`)
            : `/${lang}${$page.url.pathname}`;
        goto(newUrl);
    }
</script>

<svelte:head>
    <title>{$_('meta.title')}</title>
    <meta name="description" content={$_('meta.description')} />
</svelte:head>

<div class="flex flex-col min-h-screen">
    <header
        class="z-10 sticky top-0 w-full bg-surface/70 backdrop-blur-md border-b border-overlay/50 py-3"
    >
        <div class="hidden md:flex items-center justify-between w-full pr-8">
            <HeaderItems {links} />
            <LanguageSwitcher onSelect={onLocaleChange} langs={$locales} />
        </div>

        <div class="flex justify-end items-center md:hidden px-8 py-2">
            <Burger>
                <HeaderItems {links} />
                <div class="px-8 py-2">
                    <LanguageSwitcher onSelect={onLocaleChange} langs={$locales} />
                </div>
            </Burger>
        </div>
    </header>

    <main class="flex-1 px-12 sm:px-20 md:px-40 lg:px-60 xl:px-80 my-10">
        <slot />
    </main>

    <footer class="w-full bg-surface border-t border-overlay flex flex-col items-center px-8 py-6 gap-3">
        <div class="flex gap-3 items-center">
            <a
                class="after:content-none p-2 rounded-lg bg-overlay hover:bg-love/20 hover:text-love border border-transparent hover:border-love/30 transition-all duration-200"
                href="https://github.com/prmaloney"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
            >
                <Icon name="github" />
            </a>
            <a
                class="after:content-none p-2 rounded-lg bg-overlay hover:bg-pine/20 hover:text-pine border border-transparent hover:border-pine/30 transition-all duration-200"
                href="https://linkedin.com/in/prmaloney"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
            >
                <Icon name="linkedin" />
            </a>
            <a
                class="after:content-none p-2 rounded-lg bg-overlay hover:bg-iris/20 hover:text-iris border border-transparent hover:border-iris/30 transition-all duration-200"
                href="mailto:pmaloney16@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="mail"
            >
                <Icon name="mail" />
            </a>
        </div>
        <span class="text-xs text-muted font-mono">© {new Date().getFullYear()} Patrick Maloney</span>
    </footer>
</div>

<style>
    :global(body) {
        font-family: 'JetBrains Mono Variable', monospace;
    }
</style>
