import type { PageServerData } from './$types';
import { error } from '@sveltejs/kit';

type BlogLink = {
  title: string;
  coverImage: {
    url: string;
  };
  slug: string;
  date: string;
};

export const load: PageServerData = async () => {
  throw error(404, {
    message: 'Not found'
  });

  const query = `
    query {
      posts {
        id,
        slug,
        title,
        date,
        coverImage {
          url
        }
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
  return data as { posts: BlogLink[] };
};

export const prerender = false;
