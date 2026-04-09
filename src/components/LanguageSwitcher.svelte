<script lang="ts">
    import { locale } from 'svelte-i18n';
    import { slide } from 'svelte/transition';
    import { browser } from '$app/environment';
    import Icon from './icon.svelte';
    export let langs: string[];
    export let onSelect: (lang: string) => void;

    let isOpen = false;

    const toggleOpen = () => {
        isOpen = !isOpen;
    };

    const handleSelect = (lang: string) => {
        isOpen = false;
        onSelect(lang);
    };

    $: {
        if (browser) {
            if (isOpen) {
                document.body.addEventListener('click', toggleOpen);
            } else {
                document.body.removeEventListener('click', toggleOpen);
            }
        }
    }
</script>

<div class="relative">
    <button
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-overlay border border-overlay/50
               text-foam text-sm hover:bg-foam/10 hover:border-foam/30 transition-all duration-200"
        on:click|stopPropagation={toggleOpen}
    >
        <span class="font-medium tracking-wide">{$locale}</span>
        <div class="transition-transform duration-300 ease-in-out {isOpen ? '-scale-y-100' : ''}">
            <Icon name="chevron" />
        </div>
    </button>

    {#if isOpen}
        <div
            class="absolute top-full mt-1 right-0 min-w-full py-1 bg-surface/90 backdrop-blur-md
                   border border-overlay/50 rounded-lg shadow-lg overflow-hidden"
            transition:slide={{ duration: 150 }}
        >
            {#each langs as lang}
                <button
                    class="w-full px-4 py-2 text-sm text-left transition-all duration-150
                           {lang === $locale
                            ? 'text-foam font-medium bg-foam/5'
                            : 'text-white/70 hover:text-foam hover:bg-foam/10'}"
                    on:click={() => handleSelect(lang)}
                >
                    {lang}
                </button>
            {/each}
        </div>
    {/if}
</div>
