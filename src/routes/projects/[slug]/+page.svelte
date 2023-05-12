<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';
	import Icon from '../../../components/icon.svelte';
	export let data: PageData;

	const content = marked.parse(data.description);
</script>

<div class="flex flex-col items-center gap-4 mb-8 md:items-start">
	<h1>{data.name}</h1>
	<img src={data.image[0].url} alt={data.name} />
	<div class="flex flex-row gap-2 text-muted">
		{#each data.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
	<a
		class="flex items-center text-white max-w-fit pr-4 pl-2 bg-love"
		href={data.sourceCode}
		target="_blank"
		rel="noreferrer"
	>
		<Icon name="github" />
		View Source
	</a>
</div>
{@html content}
