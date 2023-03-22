<script context = 'module'>
	function reMapArticleToPost (articles) {
		return articles.map(({author, content, description, publishedAt, source, title}) => ({
			title, author, content, description,
			timestamp: publishedAt,
			tags: Object.values(source)
		}))
	}
</script>

<script>
	import PostList from './Posts/List/index.svelte'
	import Pagination from './Pagination/index.svelte'

	import { POSTS_LIST, POST_CONTENT } from './Posts/__symbols__/index.svelte'

	export let type
	export let pageSize = 5

	let page
	let totalRecords
</script>

{#if type === POSTS_LIST}
	<PostList
		page = {page}
		pageSize = {pageSize}
		onPostsLoaded = {(props) => console.log(props)}
	/>
	<Pagination
		pageSize = {pageSize}
		totalRecords = {totalRecords}
		onPageNumberChange = {({pageNumber}) => page = pageNumber}
	/>
{/if}