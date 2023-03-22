<script>
	import { routes } from './__props__/routes.svelte'

	import './__styles__/header.css'

	export let pageSymbol
</script>

<header class = 'container-fluid border-bottom py-3 py-sm-4 position-sticky'>
  <div class = 'row py-2'>
    <div class = 'col-12'>
      <div class = 'container p-0'>
        <div class = 'row align-items-center justify-content-between'>
          <div class = 'col-auto'>
            <div class = ''>
              <a href = '/'>
                <img src = '/vercel.svg' width = '100' alt = 'Logo' />
              </a>
            </div>
          </div>
          <div class = 'col-auto'>
            <div class = 'd-md-none'>
              <button class = 'mobile-nav'>
                <span class = 'icon bi-border-width'></span>
              </button>
            </div>
            <div class = 'd-none d-md-flex align-items-center gap-5px'>
	            {#each routes as {key, route, name}}
								<a
							    href = {route}
							    class = {`${
							      pageSymbol === key
							      ? 'active-tab '
							      : 'text-muted'
							    } header-menu text-capitalize`}
							  >{name}</a>
							{/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>