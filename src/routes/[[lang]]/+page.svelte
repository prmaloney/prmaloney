<script lang="ts">
    import type { PageData } from './$types';
    import { marked } from 'marked';

    export let data: PageData;

    $: [beforeDublin, afterDublin] = data.content.split('{{dublinImage}}');
    $: contentBefore = marked(beforeDublin ?? '');
    $: contentAfter = marked(afterDublin ?? '');
</script>

<div class="flex flex-col items-center justify-center md:justify-start">
    <h1 class="text-center md:text-left">Patrick Maloney</h1>
    {#if data.profileImage}
        <img
            class="h-40 w-40 md:h-64 md:w-64 object-cover rounded-full mb-8"
            src={data.profileImage.url}
            alt="Patrick"
        />
    {/if}
</div>
{@html contentBefore}
{#if data.dublinImage}
    <div class="flex justify-center">
        <img
            class="h-24 w-24 object-cover rounded-full mt-4"
            src={data.dublinImage.url}
            alt="Dublin"
        />
    </div>
{/if}
{@html contentAfter}
