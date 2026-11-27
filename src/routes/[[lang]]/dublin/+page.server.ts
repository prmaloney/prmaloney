import { HYGRAPH_URL } from '$env/static/private';
import { defaultLocale } from '$lib/i18n/utils';
import type { PageServerLoad } from './$types';

type DublinPage = {
    title: string;
    content: string;
    coverImage: { url: string } | null;
};

export const load = (async ({ params, fetch }) => {
    const lang = params.lang || defaultLocale;
    const query = `
        query {
            posts(where: {slug: "dublin"}, locales: [${lang}, en], first: 1) {
                title
                content
                coverImage { url }
            }
        }
    `;

    const response = await fetch(HYGRAPH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ query })
    });

    const { data } = await response.json();
    return data.posts[0] as DublinPage;
}) satisfies PageServerLoad;
