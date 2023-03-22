<script>
	import Title from './Title/index.svelte'
	import Header from './Header/index.svelte'
	import Footer from './Footer/index.svelte'
	import Content from './Content/index.svelte'

	import { POSTS_LIST } from './Content/Posts/__symbols__/index.svelte'

	export let titleProps
	export let headerProps
	export let contentProps
</script>

<Header {...headerProps} />
<Title {...titleProps} />
<Content {...contentProps} />
<Footer />