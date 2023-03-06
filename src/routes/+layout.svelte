<script lang="ts">
	import { page } from '$app/stores';
	const links = [
		{
			href: '/home',
			title: 'Home'
		},
		{
			href: '/blog',
			title: 'Blog'
		},
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

<div>
	{#each links as { href, title }}
		<a {href} class:active={$page.url.pathname === href}>{title}</a>
	{/each}
</div>

<slot />

<style>
	a.active {
		background: gray;
	}
</style>
