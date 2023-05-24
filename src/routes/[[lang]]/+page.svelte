<script lang="ts">
	import type { PageData } from './$types';
	import { marked } from 'marked';

	export let data: PageData;

	const content = marked(data.content);
</script>

<div class="flex flex-col items-center justify-center md:justify-start">
	<h1 class="text-center md:text-left">Patrick Maloney</h1>
	<img
		class="h-40 w-40 md:h-64 md:w-64 object-cover rounded-full mb-4"
		src="photo_patrick01.jpg"
		alt="Patrick"
	/>
</div>
{@html content}
