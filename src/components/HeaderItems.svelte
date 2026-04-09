<script lang="ts">
    import { _ } from 'svelte-i18n';

    export let links: { href: string; titleKey: string }[];
</script>

<nav class="px-8 py-2">
    <ul class="flex direction-row gap-4 list-none ml-0">
        {#each links as { href, titleKey }}
            <li>
                <a {href}>{$_(titleKey)}</a>
            </li>
        {/each}
    </ul>
</nav>
