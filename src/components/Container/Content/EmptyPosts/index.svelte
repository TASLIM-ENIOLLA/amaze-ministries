<script>
	import emptyPosts from './__assets__/empty-posts.gif'

	export let title = 'No post returned!'
</script>

<div class = 'text-center pt-5'>
	<img class = 'empty-posts-img' src = {emptyPosts} />
	<p class = 'text-muted'>{title}</p>
</div>

<style>
	.empty-posts-img {
		width: 70%;
		max-width: 200px;
	}
</style>