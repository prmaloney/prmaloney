<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import type { LayoutData } from './$types';

	const transitionSpeed = 300;

	export let data: LayoutData;

	const links = [
		{
			href: '/',
			title: 'Home'
		},
		// blog is not available for now
		// {
		// 	href: '/blog',
		// 	title: 'Blog'
		// },
		{
			href: '/projects',
			title: 'Projects'
		},
		{
			href: '/about',
			title: 'About'
		}
	];
</script>

<header class="mb-8">
	<nav class="px-8 py-4">
		<ul class="flex direction-row gap-4">
			{#each links as { href, title }}
				<li>
					<a {href}>{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main class="sm:mx-80 mb-8">
	{#key data.url}
		<div
			in:fly={{ duration: transitionSpeed, y: -50, easing: cubicInOut, delay: transitionSpeed }}
			out:fly={{ duration: transitionSpeed, y: -50 }}
		>
			<slot />
		</div>
	{/key}
</main>
