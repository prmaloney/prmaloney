<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from './icon.svelte';

	export let locale: string;
	export let onSelect: (locale: string) => void;

	let showMenu = false;

	const onClick = () => {
		showMenu = !showMenu;
	};

	const onOptionClick = (option: string) => {
		showMenu = false;
		onSelect(option);
	};

	$: {
		if (showMenu) {
			document.body.addEventListener('click', onClick);
		} else {
			document.body.removeEventListener('click', onClick);
		}
	}
</script>

<div class="relative">
	<button class="flex items-center text-foam" on:click|stopPropagation={onClick}>
		{locale}
		<Icon name="chevron-down" />
	</button>
	{#if showMenu}
		<ul transition:slide class="absolute top-full left-0">
			<li>
				<button
					class="text-foam transition-colors hover:text-gold "
					on:click={() => onOptionClick('en')}>en</button
				>
			</li>
			<li>
				<button
					class="text-foam transition-colors hover:text-gold"
					on:click={() => onOptionClick('de')}>de</button
				>
			</li>
		</ul>
	{/if}
</div>
