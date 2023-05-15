<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	let hover: string | null = null;
</script>

<h1>Projects</h1>

{#each data.projects as project}
	<a
		on:mouseover={() => (hover = project.name)}
		on:focus={() => (hover = project.name)}
		on:mouseout={() => (hover = null)}
		on:blur={() => (hover = null)}
		class="flex flex-row after:content-none gap-4"
		href="/projects/{project.slug}"
	>
		<img
			class="w-32 h-32 md:w-64 md:h-64 object-contain"
			src={project.image[0]?.url}
			alt={project.name}
		/>
		<div class="flex flex-col">
			<h2 class="after:bg-rose relative max-w-fit {hover === project.name ? 'hover' : ''}">
				{project.name}
			</h2>
			<div class="flex flex-row gap-4 flex-wrap">
				{#each project.tags as tag}
					<span class="text-muted">{tag}</span>
				{/each}
			</div>
		</div>
	</a>
{/each}

<style>
	h2::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		transform-origin: bottom left;
		transition: transform 0.25s ease-out;
	}
	.hover::after {
		transform: scaleX(1);
	}
</style>
