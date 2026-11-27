<script lang="ts">
    import type { PageData } from './$types';
    import { marked } from 'marked';

    export let data: PageData;

    $: content = marked(data.content ?? '');
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

{#if data.coverImage}
    <div class="flex justify-center mb-8">
        <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-peach blur-md opacity-60 scale-110"></div>
            <img
                class="relative h-40 w-40 md:h-52 md:w-52 object-cover rounded-full ring-2 ring-overlay"
                src={data.coverImage.url}
                alt="Dublin"
            />
        </div>
    </div>
{/if}

<article class="dublin-dossier">
    {@html content}
</article>

<style>
    .dublin-dossier :global(table) {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        font-size: 0.95rem;
    }
    .dublin-dossier :global(th),
    .dublin-dossier :global(td) {
        padding: 0.5rem 0.75rem;
        border: 1px solid rgb(var(--color-overlay, 64 61 82) / 0.6);
        text-align: left;
    }
    .dublin-dossier :global(th) {
        background: rgb(var(--color-overlay, 64 61 82) / 0.4);
        font-weight: 600;
    }
</style>
