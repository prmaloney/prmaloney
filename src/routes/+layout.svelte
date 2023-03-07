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

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style lang="scss">
	header {
		ul {
			list-style-type: none;
			display: flex;
			gap: 2rem;
		}
	}

	:global(body) {
		background: #191724;
		font-family: Arial, sans-serif;
		color: #e0def4;
	}

	:global(h1) {
		font-size: 4rem;
	}

	:global(img) {
		max-width: 100%;
	}

	:global(a) {
		color: white;
		text-decoration: underline rgba(1, 1, 1, 0);
		text-underline-offset: 0.2em;
		transition: text-decoration-color 300ms, text-underline-offset 300ms;
		&:hover {
			text-decoration-color: rgba(255, 255, 255, 1);
			text-underline-offset: 0.4em;
		}
	}

	.container {
		width: 60%;
		margin: auto;
	}
</style>
