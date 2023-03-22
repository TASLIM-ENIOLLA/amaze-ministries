<script context = 'module'>
	import { HOME_ROUTE, BLOG_ROUTE, TAGS_ROUTE, ABOUT_ROUTE } from '../__symbols__/routes.svelte'

	export const routes = [
		{
			key: HOME_ROUTE,
			name: 'home',
			route: '/'
		},
		{
			key: BLOG_ROUTE,
			name: 'blog',
			route: '/blog'
		},
		{
			key: TAGS_ROUTE,
			name: 'tags',
			route: '/tags'
		},
		{
			key: ABOUT_ROUTE,
			name: 'about',
			route: '/about'
		}
	]
</script>