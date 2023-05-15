export const load = (async ({ params }) => {
    const query = `
    query {
      projects(where: {slug: "${params.slug}"}) {
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
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clewz07ae009k01uh2q733tz4/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ query })
    });
    const { data } = await response.json();
    return data.projects[0];
});
//# sourceMappingURL=+page.server.js.map