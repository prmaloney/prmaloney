<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Blog posts</h1>

{#each data.posts as post}
	<a href="/blog/{post.slug}">
		<div class="container" style="background-image: url({post.coverImage.url}); ">
			<div class="blog-text">
				<h3>{post.title}</h3>
				<p>Published: {post.date}</p>
			</div>
		</div>
	</a>
{/each}

<style>
	.container {
		background-size: cover;
		height: 40rem;
	}
</style>
