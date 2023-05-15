import { marked } from 'marked';
import { error } from '@sveltejs/kit';
export const load = async ({ params }) => {
    throw error(404, {
        message: 'Not found'
    });
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
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clewz07ae009k01uh2q733tz4/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ query })
    });
    const { data: { post } } = await response.json();
    post.content = marked.parse(post.content);
    return post;
};
export const prerender = false;
//# sourceMappingURL=+page.server.js.map