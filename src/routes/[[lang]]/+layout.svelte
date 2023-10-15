<script lang="ts">
	import '../../app.css';
	import '$lib/i18n';
	import Icon from '$components/icon.svelte';
	import { page } from '$app/stores';
	import Burger from '$components/Icons/Burger.svelte';
	import { _, locale, locales } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import LanguageSwitcher from '$components/LanguageSwitcher.svelte';

	function getLinks(lang: string | undefined) {
		const prefix = lang ? `/${lang}` : '';
		return [
			{
				href: prefix + '/',
				titleKey: 'nav.home'
			},
			// blog is not available for now
			// {
			// 	href: '/blog',
			// 	titleKey: 'Blog'
			// },
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

<div class="flex flex-col min-h-screen">
	<header
		class="z-10 sticky top-0 w-full bg-overlay backdrop-filter backdrop-blur-lg bg-opacity-50"
	>
		<div class="hidden md:flex">
			<nav class="px-8 py-4">
				<ul class="flex direction-row gap-4 list-none ml-0">
					{#each links as { href, titleKey }}
						<li>
							<a {href}>{$_(titleKey)}</a>
						</li>
					{/each}
					<LanguageSwitcher onSelect={onLocaleChange} langs={$locales} />
				</ul>
			</nav>
		</div>

		<div class="flex justify-end items-center md:hidden px-8 py-2">
			<Burger>
				<nav>
					<ul class="flex direction-row gap-4 list-none ml-0">
						{#each links as { href, titleKey }}
							<li>
								<a {href}>{$_(titleKey)}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</Burger>
		</div>
	</header>

	<main class="flex-1 px-12 sm:px-20 md:px-40 lg:px-60 xl:px-80 my-8">
		<slot />
	</main>
	<footer class="w-full bg-surface flex flex-col items-center px-8 py-4">
		<div class="flex gap-4 items-center mb-1">
			<h3>{$_('footer.contact')}</h3>
			<a
				class="after:content-none bg-love hover:scale-110 transition ease-in-out duration-300"
				href="https://github.com/prmaloney"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="github" />
			</a>
			<a
				class="after:content-none bg-pine hover:scale-110 transition
          ease-in-out duration-300"
				href="https://linkedin.com/in/prmaloney"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="linkedin" />
			</a>
			<a
				class="after:content-none bg-pine hover:scale-110 transition
          ease-in-out duration-300"
				href="https://twitter.com/prmaloney_dev"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="twitter" />
			</a>
			<a
				class="after:content-none bg-iris hover:scale-110 transition
          ease-in-out duration-300"
				href="mailto:pmaloney16@gmail.com"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="mail" />
			</a>
		</div>
		<span class="text-sm text-muted">© 2023 Patrick Maloney</span>
	</footer>
</div>
