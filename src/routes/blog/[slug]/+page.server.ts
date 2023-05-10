import type { PageServerLoad } from './$types';
import { marked } from 'marked';

type Post = {
  title: string;
  date: string;
  content: string;
  authors: {
    name: string;
    intro: string;
    picture: { url: string };
  }[];
  coverImage: { url: string };
};

export const load: PageServerLoad = async ({ params }) => {
  const query = `
  {
    post (where: {slug: "${params.slug}"}){
      date,
      title,
      content,
      authors {
        name,
        intro,
        picture {
          url
        }
      },
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

  const {
    data: { post }
  }: { data: { post: Post } } = await response.json();
  post.content = marked.parse(post.content);
  return post;
};
