<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { title, content, coverImage } = data;
</script>

<h1>{title}</h1>
<div class="img-wrapper">
	<img src={coverImage.url} alt="{title} cover image" />
</div>
<p>{@html content}</p>

<style>
	.img-wrapper {
		max-width: 50rem;
	}
	.img-wrapper > img {
		max-width: 100%;
	}
</style>
