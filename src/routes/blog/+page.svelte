<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Blog posts</h1>

{#each data.posts as post}
	<a href="/blog/{post.slug}">
		<img src={post.coverImage.url} alt={post.title} />
		<h3>{post.title}</h3>
	</a>
{/each}

<style>
	img {
		max-width: 100%;
	}
</style>
