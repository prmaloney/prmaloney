<script lang="ts">
	const links = [
		{
			href: '/',
			title: 'Home'
		},
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
		background: #26233a;
		padding: 1rem 0;
		ul {
			list-style-type: none;
			display: flex;
			gap: 2rem;
		}
	}

	:global(body) {
		background: #191724;
		font-family: Arial, sans-serif;
		font-size: 1.2rem;
		color: #e0def4;
		margin: 0;
	}

	:global(h1) {
		font-size: 5rem;
	}

	:global(h2) {
		font-size: 2rem;
		color: #ebbcba;
	}

	:global(h3) {
		font-size: 1.5rem;
		color: #ebbcba;
	}

	:global(img) {
		max-width: 100%;
	}

	:global(a) {
		color: #e0def4;
		text-decoration: underline rgba(1, 1, 1, 0);
		text-underline-offset: 0;
		transition: text-decoration-color 300ms, text-underline-offset 300ms;
		&:hover {
			text-decoration-color: #e0def4;
			text-underline-offset: 0.2em;
		}
	}

	.container {
		width: 60%;
		margin: auto;
		margin-top: 1rem;
	}
</style>
