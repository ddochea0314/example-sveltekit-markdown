export const load = (async ({params : { slug }}) => {
    const post = await import(`../${slug}.md`);
    const { title, date } = post.metadata;

    return {
        title,
        date,
        content : post.default,
    };
});