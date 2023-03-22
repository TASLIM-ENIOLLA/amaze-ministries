<script>
	import Container from '../components/Container/index.svelte'
	import { HOME_ROUTE } from '../components/Container/Header/__symbols__/routes.svelte'
	import { POSTS_LIST } from '../components/Container/Content/Posts/__symbols__/index.svelte'
</script>

<Container
	headerProps = {{
		pageSymbol: HOME_ROUTE
	}}
	titleProps = {{
		title: 'All Posts',
		subtitle: '',
		searchBar: {
			query: '',
			placeholder: 'Search posts...',
			onInput: ({value}) => {},
			onSearch: ({query}) => {}
		}
	}}
	contentProps = {{
		pageSize: 5,
		type: POSTS_LIST
	}}
/>