<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { title, content, coverImage } = data;
</script>

<h1>{title}</h1>
<img src={coverImage.url} alt="{title} cover image" />
<p>{@html content}</p>
