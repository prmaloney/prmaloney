<script lang="ts">
	const links = [
		{
			href: '/',
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

<header>
	<nav>
		<ul>
			{#each links as { href, title }}
				<li>
					<a {href}>{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main class="container">
	<slot />
</main>
