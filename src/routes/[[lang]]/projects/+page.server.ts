import type { PageServerLoad } from './$types';

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
      projects {
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
    return data as { projects: ProjectLink[] };
};
