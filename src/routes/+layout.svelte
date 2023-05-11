<script lang="ts">
	import '../app.css';
	import Icon from '../components/icon.svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import type { LayoutData } from './$types';
	import Burger from '../components/Icons/Burger.svelte';

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

	let navbaropen = false;
</script>

<div class="flex flex-col min-h-screen">
	<header
		class="z-10 sticky top-0 w-full bg-overlay backdrop-filter backdrop-blur-lg bg-opacity-50"
	>
		<div class="hidden md:flex">
			<nav class="px-8 py-4">
				<ul class="flex direction-row gap-4">
					{#each links as { href, title }}
						<li>
							<a {href}>{title}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<div class="flex justify-end items-center md:hidden px-8 py-2 ">
			<Burger>
				<nav>
					<ul class="flex direction-row gap-4">
						{#each links as { href, title }}
							<li>
								<a {href}>{title}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</Burger>
		</div>
	</header>

	<main class="flex-1 px-10 sm:px-30 md:px-40 lg:px-60 xl:px-80 my-8">
		{#key data.url}
			<div
				in:fly={{ duration: transitionSpeed, y: -50, easing: cubicInOut, delay: transitionSpeed }}
				out:fly={{ duration: transitionSpeed, y: -50 }}
			>
				<slot />
			</div>
		{/key}
	</main>

	<footer class="w-full bg-surface flex flex-col items-center px-8 py-4">
		<div class="flex gap-4 items-center mb-1">
			<h3>Let's get in contact:</h3>
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
		</div>
		<span class="text-sm text-muted">© 2023 Patrick Maloney</span>
	</footer>
</div>
