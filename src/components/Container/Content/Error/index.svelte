<script>
	import ERROR_IMG from './__assets__/error.png'

	export let title = 'An unexpected error occured!'
</script>

<div class = 'text-center pt-5'>
	<img class = 'empty-posts-img' src = {ERROR_IMG} />
	<p class = 'text-muted'>{title}</p>
</div>

<style>
	.empty-posts-img {
		width: 70%;
		max-width: 200px;
	}
</style>