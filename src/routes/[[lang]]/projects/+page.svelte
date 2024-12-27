<script lang="ts">
    import { page } from '$app/stores';
    import { locale } from 'svelte-i18n';
    import type { PageData } from './$types';
    import { _ } from 'svelte-i18n';
    export let data: PageData;
    $: projects = data.projects;

    let hover: string | null = null;

    const getProjectLink = (slug: string): string => {
        return $page.params.lang ? `/${$page.params.lang}/projects/${slug}` : `/projects/${slug}`;
    };
</script>

<h1>{$_('projects.title')}</h1>

<div class="grid gap-16 grid-cols-1 2xl:grid-cols-2">
    {#key $locale}
        {#each projects as project}
            <a
                on:mouseover={() => (hover = project.name)}
                on:focus={() => (hover = project.name)}
                on:mouseout={() => (hover = null)}
                on:blur={() => (hover = null)}
                class="flex flex-row after:content-none gap-4"
                href={getProjectLink(project.slug)}
            >
                <img
                    class="w-32 h-32 md:w-52 md:h-52 object-contain"
                    src={project.image[0]?.url}
                    alt={project.name}
                />
                <div class="flex flex-col">
                    <h2
                        class="after:bg-rose relative max-w-fit {hover === project.name
                            ? 'hover'
                            : ''}"
                    >
                        {project.name}
                    </h2>
                    <div class="flex flex-row gap-4 flex-wrap">
                        {#each project.tags as tag}
                            <span class="text-foam">{tag}</span>
                        {/each}
                    </div>
                </div>
            </a>
        {/each}
    {/key}
</div>

<style>
    h2::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
    }
    .hover::after {
        transform: scaleX(1);
    }
</style>
