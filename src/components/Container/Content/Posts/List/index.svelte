<script context = 'module'>
	function getPosts (page, pageSize, callback) {
		return new Promise((resolve, reject) => {
			fetch(`https://newsapi.org/v2/everything?q=nigeria&sortBy=relevance&pageSize=${pageSize}&page=${page}&apiKey=2ec62d0060e740fb95d4e04f0351cea4`)
			.then((result) => result.json())
			.then(({articles, totalResults}) => {
				if (typeof callback === 'function') {
					callback({articles, totalResults})
				}

				resolve({articles, totalResults})
			})
			.catch((error) => reject())
		})
	}

	function reMapArticlesToPosts (articles) {
		return articles.map(({author, content, description, title, publishedAt, source}) => ({
			content, description, title,
			author: 'musa ademola azeez',
			timestamp: publishedAt,
			tags: Object.values(source)
		}))
	}
</script>

<script>
	import Error from '../../Error/index.svelte'
	import Loader from '../../Loader/index.svelte'
	import EmptyPosts from '../../EmptyPosts/index.svelte'

  export let page
  export let pageSize
  export let pagesCols
  export let onPostsLoaded
</script>

{#await getPosts(page, pageSize, ({totalResults}) => onPostsLoaded({totalRecords: totalResults}))}
	<Loader />
{:then {articles, totalResults}}
	{#if articles && articles.length > 0}
		<section class = 'container pt-5'>
			<div class = 'row'>
				<div class = 'col-auto'>
					<h3 class = 'm-0 text-dark'>Page {page} of {pagesCols}</h3>
				</div>
			</div>
		</section>
		{#each reMapArticlesToPosts(articles) as {author, content, description, title, timestamp, tags}}
			<section class = 'container py-5 border-bottom'>
		    <div class = 'row'>
		      <div class = 'col-lg-2'>
		        <h5 class = 'text-muted'>{new Date(timestamp).toDateString()}</h5>
		      </div>
		      <div class = 'col-lg-10'>
		        <div class = 'row mb-2 flex-nowrap align-items-center justify-content-between'>
		          <div class = 'col'>
		            <h5 class = 'bold text-dark m-0 one-line'>{title}</h5>
		          </div>
		          <div class = 'col-auto'>
		            <h6 class = 'text-dark text-uppercase m-0'>by: {author}</h6>
		          </div>
		        </div>
		        <div>
		        	{#each tags as tag}
		            <a href = '#tag' class = 'd-inline-block mr-3 mb-3 text-green text-uppercase'>{tag}</a>
		          {/each}
		        </div>
		        <div class = 'py-3'>
		          <h5 class = 'm-0 text-muted'>
		            <span class = 'double-line'>{description}</span>
		          </h5>
		        </div>
		        <div class = 'pt-3'>
		          <a href = '#read-more' class = 'text-uppercase d-inline-block'>
		            <span class = 'm-0 text-green'>read more</span>
		          </a>
		        </div>
		      </div>
		    </div>
		  </section>
		{/each}
	{:else}
		<EmptyPosts />
	{/if}
{:catch error}
	<Error />
{/await}

<style>
	.one-line{
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
	}
	.double-line{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
	}
</style>