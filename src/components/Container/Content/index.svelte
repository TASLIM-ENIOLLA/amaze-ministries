<script>
	import PostList from './Posts/List/index.svelte'
	import Pagination from './Pagination/index.svelte'

	import { POSTS_LIST, POST_CONTENT } from './Posts/__symbols__/index.svelte'

	export let type
	export let pageSize = 5

	let page
	let pagesCols
	let totalRecords
</script>

{#if type === POSTS_LIST}
	<PostList
		page = {page}
		pageSize = {pageSize}
		pagesCols = {pagesCols}
		onPostsLoaded = {({totalRecords: total}) => totalRecords = 100}
	/>
	<Pagination
		pageSize = {pageSize}
		totalRecords = {undefined}
		onPagination = {({pagesCols: p}) => pagesCols = p}
		onPageNumberChange = {({pageNumber}) => page = pageNumber}
	/>
{/if}