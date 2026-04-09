<script>
    import { _ } from 'svelte-i18n';
    import { page } from '$app/stores';

    const portfolioUrl = $page.params.lang
        ? `/${$page.params.lang}/projects/portfolio`
        : '/projects/portfolio';
</script>

<h1>{$_('about.title')}</h1>

<div class="flex flex-col gap-8">
    <div class="bg-surface border border-overlay rounded-xl p-6">
        <p class="mt-0">{$_('about.thanks')}</p>
        {@html $_('about.takeALook', {
            values: { portfolioUrl }
        })}
    </div>
</div>
