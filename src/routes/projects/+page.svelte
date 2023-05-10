<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Projects</h1>

{#each data.projects as project}
	<a class="flex flex-row after:content-none" href="/projects/{project.slug}">
		<img class="w-64 h-64 object-contain" src={project.image[0]?.url} alt={project.name} />
		<div class="flex flex-col">
			<h2>{project.name}</h2>
			<div class="flex flex-row gap-4">
				{#each project.tags as tag}
					<span class="text-muted">{tag}</span>
				{/each}
			</div>
		</div>
	</a>
{/each}

<!-- <style lang="scss"> -->
<!-- 	a { -->
<!-- 		display: flex; -->
<!-- 		flex-direction: row; -->
<!-- 		gap: 2rem; -->
<!-- 		margin-bottom: 2rem; -->
<!-- 		img { -->
<!-- 			width: 200px; -->
<!-- 			height: 200px; -->
<!-- 			object-fit: contain; -->
<!-- 		} -->
<!-- 		&:hover { -->
<!-- 			text-decoration-color: #ebbcba; -->
<!-- 			text-underline-offset: 0.4em; -->
<!-- 		} -->
<!-- 		span { -->
<!-- 			margin-right: 1rem; -->
<!-- 			color: #6e6a86; -->
<!-- 			text-decoration: none; -->
<!-- 			display: inline-block; -->
<!-- 		} -->
<!-- 	} -->
<!-- </style> -->
