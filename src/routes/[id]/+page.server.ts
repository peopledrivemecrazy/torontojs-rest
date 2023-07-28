import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	const { id } = params;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await response.json();
	return {
		post,
		message: 'Hello from page'
	};
}) satisfies PageServerLoad;
