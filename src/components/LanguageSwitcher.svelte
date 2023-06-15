<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { slide } from 'svelte/transition';
	import { browser } from '$app/environment';
	import Icon from './icon.svelte';
	export let langs: string[];
	export let onSelect: (lang: string) => void;

	let isOpen = false;

	const toggleOpen = () => {
		isOpen = !isOpen;
	};

	const handleSelect = (lang: string) => {
		isOpen = false;
		onSelect(lang);
	};

	$: {
		if (browser) {
			if (isOpen) {
				document.body.addEventListener('click', toggleOpen);
			} else {
				document.body.removeEventListener('click', toggleOpen);
			}
		}
	}
</script>

<div class="relative text-foam">
	<button class="flex items-center" on:click|stopPropagation={toggleOpen}>
		{$locale}
		<div
			class="transition-transform duration-300 ease-in-out
      {isOpen && '-scale-y-100'}"
		>
			<Icon name="chevron" />
		</div>
	</button>
	{#if isOpen}
		<div class="px-4 py-2 absolute top-full bg-overlay" transition:slide>
			{#each langs as lang}
				<button
					class="hover:text-iris hover:scale-110 transition ease-in-out duration-900"
					on:click={() => handleSelect(lang)}
					>{lang}
				</button>
			{/each}
		</div>
	{/if}
</div>
