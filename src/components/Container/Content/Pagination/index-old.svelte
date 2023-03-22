<script context = 'module'>
  /* function shiftPageRange () {
    if ((pageIndex + pageRange) > pagesNumber) {
      pageIndexRange = [pagesNumber - pageRange, pagesNumber]
    }
    else {
      pageIndexRange = [pageIndex, pageIndex + pageRange]
    }
  }

  function updatePageIndex (type, shift) {
    if (type === '+') {
      ++pageIndex
    }
    else if (type === '-') {
      --pageIndex
    }

    if (shift) shiftPageRange()
  } */
</script>

<script>
  /* export let pageSize
  export let totalRecords
  export let pagesNumber = 5
  export let onPageNumberChange

  let pageIndex = 0
  let pagesNumber = 0
  let pageIndexRange = [0, pageSize]

  $: (() => {
    pagesNumber = Math.ceil(totalRecords / pageSize)
  })(totalRecords, pageSize)

  $: (() => {
    if (typeof onPageNumberChange === 'function') {
      onPageNumberChange({pageIndex: pageIndex + 1})
    }
  })(pageIndex) */
</script>

<section class = 'col-12 py-5'>
  <div class = 'row py-3'>
    <div class = 'col-12 col-sm-auto text-center mb-3'>
      <button
      	class = 'bg-green border-0 rounded-lg text-white px-4 shadow text-uppercase py-3'
      	on:click = {() => (pageIndex > 0) ? updatePageIndex('-', pageIndex - 1 <= pageIndexRange[0]) : undefined}
      >previous</button>
    </div>
    <div class = 'col-12 col-sm text-center'>
    	{#each Array(pagesNumber).fill() as _, index (index + 1)}
        {#if (index >= pageIndexRange[0] && index < pageIndexRange[1])}
          <button
            on:click = {({target}) => pageIndex = index}
            class = {`text-${pageIndex === index ? 'white' : 'dark'} border mx-2 mb-3 rounded-lg px-4 py-3`}
            style = {`background: ${pageIndex === index ? 'var(--green)' : 'transparent'}`}
          >{index + 1}</button>
        {/if}
      {/each}
    </div>
    <div class = 'col-12 col-sm-auto text-center mb-3'>
      <button
      	class = 'bg-green border-0 rounded-lg text-white px-4 shadow text-uppercase py-3'
      	on:click = {() => (pageIndex < pagesNumber - 1) ? updatePageIndex('+', pageIndex + 1 >= pageIndexRange[1]) : undefined}
      >next</button>
    </div>
    <div class = 'col-12'>
      <div class = 'text-center'>Showing {(pageIndex * pageSize) + 1} to {(
        (pageIndex + 1) * pageSize > totalRecords
        ? totalRecords
        : (pageIndex + 1) * pageSize
      )} of {totalRecords}</div>
    </div>
  </div>
</section>