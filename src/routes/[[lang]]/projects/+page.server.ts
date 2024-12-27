import type { PageServerLoad } from './$types';
import { HYGRAPH_URL } from '$env/static/private';

type ProjectLink = {
    name: string;
    slug: string;
    image: {
        url: string;
    }[];
    tags: string[];
};

export const load: PageServerLoad = async ({ fetch }) => {
    const query = `
    query {
      projects(orderBy: createdAt_DESC) {
        id,
        slug,
        name,
        image {
          url
        },
        tags,
      },
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
    return data as { projects: ProjectLink[] };
};
