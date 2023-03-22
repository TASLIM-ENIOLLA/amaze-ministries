<script>
  export let pageSize
  export let totalRecords
  export let onPageNumberChange

  let pageIndex = 0

  $: {
    if (typeof onPageNumberChange === 'function') {
      onPageNumberChange({pageNumber: pageIndex + 1})
    }
  }
</script>

<section class = 'container'>
  <div class = 'col-12 py-5'>
    <div class = 'row py-3'>
      <div class = 'col-12 col-sm-auto text-center mb-3'>
        <button class = 'bg-green border-0 rounded-lg text-white px-4 shadow text-uppercase py-3'>previous</button>
      </div>
      <div class = 'col-12 col-sm text-center'>
      	{#each Array(5).fill('') as _, index}
          <button
            on:click = {() => pageIndex = index}
            style = {`background: ${pageIndex === index ? 'var(--green)' : 'transparent'}`}
            class = {`text-${pageIndex === index ? 'white' : 'dark'} border mx-2 mb-3 rounded-lg px-4 py-3`}
          >{index + 1}</button>
        {/each}
      </div>
      <div class = 'col-12 col-sm-auto text-center mb-3'>
        <button class = 'bg-green border-0 rounded-lg text-white px-4 shadow text-uppercase py-3'>next</button>
      </div>
    </div>
  </div>
</section>