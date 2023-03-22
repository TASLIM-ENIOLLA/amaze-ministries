<script>
	import PostsList from './PostsList.svelte'
	import PostContent from './PostContent.svelte'
	import { POSTS_LIST, POST_CONTENT } from './__symbols__/index.svelte'

	export let postsCount = 0
	export let rowsPerPage = 0
	export let type = undefined
	export let postID = undefined
	export let pageIndex = undefined
</script>

{#if type === POSTS_LIST}
	<PostsList postsCount = {postsCount} rowsPerPage = {rowsPerPage} pageIndex = {pageIndex} />
{:else if type === POST_CONTENT}
	<PostContent />
{/if}