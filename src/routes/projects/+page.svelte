<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Projects</h1>

{#each data.projects as project}
	<a class="flex flex-row after:content-none gap-4" href="/projects/{project.slug}">
		<img
			class="w-32 h-32 md:w-64 md:h-64 object-contain"
			src={project.image[0]?.url}
			alt={project.name}
		/>
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
