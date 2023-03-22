<script>
	import SearchBar from './SearchBar/index.svelte'

	export let title
	export let searchBar
	export let subtitle
</script>

<section class = 'container'>
  <div class = 'row'>
    <div class = 'col-12'>
      <div class = 'border-bottom py-5'>
        <h2 class = 'mb-2 roboto-black bold'>{title}</h2>
        {#if searchBar}
          <div class = 'search-bar-container'>
            <SearchBar {...searchBar} />
          </div>
        {:else}
          <div class = 'text-muted m-0'>{subtitle}</div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .search-bar-container {
    max-width: 500px;
  }
</style>