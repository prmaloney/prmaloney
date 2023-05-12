<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';
	import Icon from '../../../components/icon.svelte';
	export let data: PageData;

	const content = marked.parse(data.description);
</script>

<div class="project-header">
	<img src={data.image[0].url} alt={data.name} />
	<div class="project-header-text">
		<h1>{data.name}</h1>
		<div class="tags">
			{#each data.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
		<a class="text-white" href={data.sourceCode} target="_blank" rel="noreferrer">
			<Icon name="github" />
			View Source
		</a>
	</div>
</div>
{@html content}

<style lang="scss">
	.project-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
		img {
			width: 100%;
			max-width: 200px;
			border-radius: 0.5rem;
			margin-right: 2rem;
		}
		.project-header-text {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: center;
			h1 {
				margin-bottom: 0;
			}
			.tags {
				display: flex;
				flex-direction: row;
				gap: 1rem;
			}
			span {
				color: #6e6a86;
			}
			a {
				display: flex;
				justify-content: center;
				align-items: center;
				text-decoration: none;
				background: #eb6f92;
				transition: scale 300ms;
				&:hover {
					scale: 0.95;
				}
			}
		}
	}
</style>
