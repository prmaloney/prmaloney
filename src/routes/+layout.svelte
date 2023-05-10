<script lang="ts">
	import '../app.css';
	import Icon from '../components/icon.svelte';
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

<div class="flex flex-col min-h-screen">
	<header class="sticky top-0 w-full bg-overlay backdrop-filter backdrop-blur-lg bg-opacity-50">
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

	<main class="flex-1 sm:mx-80 my-8">
		{#key data.url}
			<div
				in:fly={{ duration: transitionSpeed, y: -50, easing: cubicInOut, delay: transitionSpeed }}
				out:fly={{ duration: transitionSpeed, y: -50 }}
			>
				<slot />
			</div>
		{/key}
	</main>

	<footer class="w-full bg-surface flex justify-center items-center gap-4 px-8 py-4">
		<h2>Contact me</h2>
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
			class="after:content-none bg-iris hover:scale-110 transition
      ease-in-out duration-300"
			href="mailto:pmaloney16@gmail.com"
			target="_blank"
			rel="noreferrer"
		>
			<Icon name="mail" />
		</a>
	</footer>
</div>
