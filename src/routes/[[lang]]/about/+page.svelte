<script>
    import { _ } from 'svelte-i18n';
    import { page } from '$app/stores';

    const portfolioUrl = $page.params.lang
        ? `/${$page.params.lang}/projects/portfolio`
        : '/projects/portfolio';
</script>

<h1>{$_('about.title')}</h1>

<p>{$_('about.thanks')}</p>
{@html $_('about.takeALook', {
    values: { portfolioUrl }
})}
