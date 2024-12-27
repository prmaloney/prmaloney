import { HYGRAPH_URL } from '$env/static/private';
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';

type Homepage = {
    content: string;
};

export const load = (async ({ params, fetch }) => {
    const query = `
	    query {
	      homepages(locales: [${params.lang || get(locale)}]) {
		content
	      }
	    }
`;

    const response = await fetch(
        HYGRAPH_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ query })
        }
    );

    const { data } = await response.json();
    return data.homepages[0] as Homepage;
}) satisfies PageServerLoad;
