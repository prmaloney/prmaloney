import { HYGRAPH_URL } from '$env/static/private';
import { defaultLocale } from '$lib/i18n/utils';
import type { PageServerLoad } from './$types';

type Homepage = {
    content: string;
    profileImage: { url: string } | null;
    dublinImage: { url: string } | null;
    terminalCommands: string[];
};

export const load = (async ({ params, fetch }) => {
    const query = `
        query {
            homepages(locales: [${params.lang || defaultLocale}, en]) {
                content
                profileImage { url }
                dublinImage { url }
                terminalCommands
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
    return data.homepages[0] as Homepage;
}) satisfies PageServerLoad;
