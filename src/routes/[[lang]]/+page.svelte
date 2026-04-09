<script lang="ts">
    import type { PageData } from './$types';
    import { marked } from 'marked';
    import TerminalPrompt from '$components/TerminalPrompt.svelte';

    export let data: PageData;

    $: [beforeDublin, afterDublin] = data.content.split('{{dublinImage}}');
    $: contentBefore = marked(beforeDublin ?? '');
    $: contentAfter = marked(afterDublin ?? '');
</script>

<div class="flex flex-col md:flex-row md:items-center md:gap-12 mb-12">
    {#if data.profileImage}
        <div class="flex justify-center md:justify-start mb-6 md:mb-0 shrink-0">
            <div class="relative">
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-iris via-pine to-foam blur-md opacity-60 scale-105"></div>
                <img
                    class="relative h-40 w-40 md:h-56 md:w-56 object-cover rounded-full ring-2 ring-overlay"
                    src={data.profileImage.url}
                    alt="Patrick"
                />
            </div>
        </div>
    {/if}
    <div>
        <TerminalPrompt commands={data.terminalCommands ?? []} />
        <h1 class="text-center md:text-left mb-2">Patrick Maloney</h1>
    </div>
</div>

{@html contentBefore}

{#if data.dublinImage}
    <div class="flex justify-center my-6">
        <div class="relative group">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-peach blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300 scale-105"></div>
            <img
                class="relative h-32 w-32 object-cover rounded-full ring-2 ring-overlay"
                src={data.dublinImage.url}
                alt="Dublin"
            />
        </div>
    </div>
{/if}

{@html contentAfter}
