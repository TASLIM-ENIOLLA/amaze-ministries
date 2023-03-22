<script>
  export let pageIndex
  export let postsCount
  export let rowsPerPage

  let rows = 0
</script>

{#each Array(rowsPerPage).fill('') as _}
  <section class = 'container py-5 border-bottom'>
    <section class = 'row'>
      <div class = 'col-lg-2'>
        <h5 class = 'text-muted'>August 7, 2021</h5>
      </div>
      <div class = 'col-lg-10'>
        <div class = 'row mb-2 justify-content-between align-items-center'>
          <div class = 'col-auto'>
            <h5 class = 'bold text-dark m-0'>New features in v1</h5>
          </div>
          <div class = 'col-auto'>
            <h6 class = 'text-dark text-uppercase m-0'>by: musa ademola azeez</h6>
          </div>
        </div>
        <div>
          {#each 'Lorem Ipsum is simply dummy text'.split(' ') as tag}
            <a href = '#tag' class = 'd-inline-block mr-3 mb-3 text-green text-uppercase'>{tag}</a>
          {/each}
        </div>
        <div class = 'py-3'>
          <h5 class = 'm-0 text-muted'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </h5>
        </div>
        <div class = 'pt-3'>
          <a href = '#read-more' class = 'text-uppercase d-inline-block'>
            <span class = 'm-0 text-green'>read more</span>
          </a>
        </div>
      </div>
    </section>
  </section>
{/each}