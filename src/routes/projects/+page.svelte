<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Projects</h1>

{#each data.projects as project}
	<a href="/projects/{project.slug}">
		<img src={project.image[0]?.url} alt={project.name} />
		<div class="blog-text">
			<h2>{project.name}</h2>
			{#each project.tags as tag}
				<span>{tag}</span>
			{/each}
		</div>
	</a>
{/each}

<style lang="scss">
	a {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		margin-bottom: 2rem;
		img {
			width: 200px;
			height: 200px;
			object-fit: contain;
		}
		&:hover {
			text-decoration-color: #ebbcba;
			text-underline-offset: 0.4em;
		}
		span {
			margin-right: 1rem;
			color: #6e6a86;
			text-decoration: none;
			display: inline-block;
		}
	}
</style>
