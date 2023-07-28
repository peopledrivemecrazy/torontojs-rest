<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

    console.log($page.data.post.userId)
</script>
<a href="/">Home</a>

<h1>
	{data.post.title}
</h1>

<p>
    {data.post.body}
</p>