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
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clewz07ae009k01uh2q733tz4/master',
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
	console.log(data)
	return data.homepages[0] as Homepage;
}) satisfies PageServerLoad;
