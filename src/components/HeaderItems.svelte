<script lang="ts">
	import LanguageSwitcher from '$components/LanguageSwitcher.svelte';
	import { _, locales } from 'svelte-i18n';

    export let links: { href: string; titleKey: string }[];
    export let onLocaleChange: (lang: string) => void;
</script>

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
