<script lang="ts">
    import type { PageData } from './$types';
    import { marked } from 'marked';
    import { _ } from 'svelte-i18n';
    import Icon from '$components/icon.svelte';
    export let data: PageData;

    $: content = marked.parse(data.description);
</script>

<div class="flex flex-col items-center gap-5 mb-10 md:items-start">
    <h1 class="mb-2">{data.name}</h1>

    <img src={data.image[0].url} alt={data.name} class="h-40 rounded-xl" />

    <div class="flex flex-row gap-2 flex-wrap">
        {#each data.tags as tag}
            <span class="text-xs font-mono px-2 py-0.5 bg-overlay text-foam rounded-full border border-foam/20">
                {tag}
            </span>
        {/each}
    </div>

    <div class="flex gap-3 flex-wrap">
        <a
            class="flex items-center gap-2 text-white text-base font-mono max-w-fit px-4 py-2 bg-love/20 border border-love/40 rounded-lg after:content-none
            {data.sourceCode
                ? 'hover:bg-love/30 hover:border-love transition duration-200'
                : 'opacity-40 cursor-not-allowed pointer-events-none'}"
            href={data.sourceCode}
            target="_blank"
            rel="noreferrer"
        >
            <Icon name="code" />
            {$_('project.viewSource')}
        </a>
        <a
            class="flex items-center gap-2 text-white text-base font-mono max-w-fit px-4 py-2 bg-pine/20 border border-pine/40 rounded-lg after:content-none
            {data.demo
                ? 'hover:bg-pine/30 hover:border-pine transition duration-200'
                : 'opacity-40 cursor-not-allowed pointer-events-none'}"
            href={data.demo}
            target="_blank"
            rel="noreferrer"
        >
            <Icon name="rocket" />
            {$_('project.viewDemo')}
        </a>
    </div>
</div>

<div class="w-full h-px bg-gradient-to-r from-transparent via-overlay to-transparent mb-8"></div>

{@html content}
