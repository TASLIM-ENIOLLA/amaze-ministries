<script>
  import { socialIcons } from './__props__/index.svelte'
</script>

<section class = 'container py-5'>
  <div class = 'row py-5 justify-content-center align-items-center'>
    <div class = 'col-auto'>
      <div class = 'row'>
        <div class = 'col-12'>
          <h6 class = 'text-green mb-2 text-uppercase'>Subscribe to newsletter</h6>
        </div>
        <div class = 'col-12'>
          <div class = 'row'>
            <div class = 'col pr-0'>
              <input
                class = 'p-3 d-block w-100 rounded-lg border'
                placeholder = 'Enter email address...'
              />
            </div>
            <div class = 'col-auto'>
              <button
                class = 'p-3 bg-green text-uppercase text-white shadow-sm rounded-lg border-0'
              >subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer class = 'container py-5'>
  <div class = 'row align-items-center justify-content-center'>
    <div class = 'col-auto'>
      <div class = 'text-center'>
        <div>
          {#each socialIcons as { icon, href }}
            <a href = {href}>
              <span
                style = {`font-size: 1.5rem`}
                class = {`d-inline-block text-green mx-4 my-2 ${icon}`}
              ></span>
            </a>
          {/each}
        </div>
        <div>
          <div class = 'my-2 text-muted'>Amaze Ministries &copy; {new Date().getFullYear()}. All rights reserved.</div>
        </div>
        <div>
          <div class = 'my-2 text-muted'>Designed and developed by <a class = 'text-green' href = 'https://taslim-eniolla.vercel.app'>Taslim Eniolla.</a></div>
        </div>
      </div>
    </div>
  </div>
</footer>