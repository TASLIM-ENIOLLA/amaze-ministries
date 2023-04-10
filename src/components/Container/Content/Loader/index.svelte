<script>
	import loaderImage from './__assets__/floating-rays.gif'

	export let title = 'loading'
</script>

<section class = 'p-5 text-center'>
	<img src = {loaderImage} width = '50' />
	<h5 class = 'text-muted my-3 text-capitalize'>{title}</h5>
</section>