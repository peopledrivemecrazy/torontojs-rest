import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return {
        posts,
        message: 'Hello from page',
    };
}) satisfies PageServerLoad;