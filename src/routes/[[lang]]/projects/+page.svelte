<script lang="ts">
    import { page } from '$app/stores';
    import { locale } from 'svelte-i18n';
    import type { PageData } from './$types';
    import { _ } from 'svelte-i18n';
    export let data: PageData;
    $: projects = data.projects;

    const getProjectLink = (slug: string): string => {
        return $page.params.lang ? `/${$page.params.lang}/projects/${slug}` : `/projects/${slug}`;
    };
</script>

<h1>{$_('projects.title')}</h1>

<div class="grid gap-6 grid-cols-1 xl:grid-cols-2">
    {#key $locale}
        {#each projects as project}
            <a
                class="group flex flex-row after:content-none gap-5 bg-surface border border-overlay rounded-xl p-5 hover:border-iris hover:shadow-[0_0_20px_rgba(203,166,247,0.15)] transition-all duration-300"
                href={getProjectLink(project.slug)}
            >
                <img
                    class="w-24 h-24 md:w-36 md:h-36 object-contain shrink-0 rounded-lg"
                    src={project.image[0]?.url}
                    alt={project.name}
                />
                <div class="flex flex-col justify-center gap-3">
                    <h2 class="text-rose mb-0 mt-0 text-2xl group-hover:text-iris transition-colors duration-200">
                        {project.name}
                    </h2>
                    <div class="flex flex-row gap-2 flex-wrap">
                        {#each project.tags as tag}
                            <span class="text-xs font-mono px-2 py-0.5 bg-overlay text-foam rounded-full border border-foam/20">
                                {tag}
                            </span>
                        {/each}
                    </div>
                </div>
            </a>
        {/each}
    {/key}
</div>
