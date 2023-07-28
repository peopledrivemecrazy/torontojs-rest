<script lang="ts">
	export let data;
</script>

<ul>
	{#each data.posts as post}
		<li>
			<a href={post.id}>{post.title}</a>
		</li>
	{/each}
</ul>
