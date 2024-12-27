import { HYGRAPH_URL } from '$env/static/private';
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';

type Project = {
    name: string;
    slug: string;
    description: string;
    image: {
        url: string;
    }[];
    tags: string[];
    sourceCode: string;
    demo: string;
};

export const load = (async ({ params, fetch }) => {
    const query = `
    query {
      projects(where: {slug: "${params.slug}"}, locales: [${params.lang || get(locale)}, en]) {
        id,
        name,
        tags,
        image {
          url
        },
        description,
        sourceCode,
        demo
      },
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
    return data.projects[0] as Project;
}) satisfies PageServerLoad;
