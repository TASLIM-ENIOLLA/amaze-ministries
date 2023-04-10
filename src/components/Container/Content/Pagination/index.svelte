<script>
  export let pageSize // No of records returned per page
  export let totalRecords = 100 // Total no of records from database
  export let onPagination // A callback function called when `pageIndex` or `pagesCols` changes
  export let onPageNumberChange // A callback function called when the current page index changes

  const pagesTabLength = 5 // No of pages tabs per page

  let pageIndex = 0
  let pagesColsRange = [0, pagesTabLength - 1]
  let pagesCols = Math.ceil(totalRecords / pageSize) // Total no of pages tabs

  $: (() => pagesCols = Math.ceil(totalRecords / pageSize))(totalRecords)

  $: (() => {
    if (typeof onPageNumberChange === 'function') {
      onPageNumberChange({pageNumber: pageIndex + 1})
    }
  })(pageIndex)

  $: (() => {
    if (typeof onPagination === 'function') {
      onPagination({pageIndex, pagesCols})
    }
  })(pageIndex, pagesCols)

  function updatePageIndex(action) {
    switch (action) {
      case 'INCREMENT': {
        pageIndex += 1
        break
      }
      case 'DECREMENT': {
        pageIndex -= 1
        break
      }
    }

    return (function () {
      switch (action) {
        case 'INCREMENT': {
          console.log('INCREMENT')
          if (pageIndex - 1 === pagesColsRange[1]) {
            pagesColsRange = [pageIndex, (
              (pageIndex + 1 + pagesTabLength > pagesCols)
              ? pagesCols
              : pageIndex + pagesTabLength - 1
            )]
          }
          
          break;
        }
        case 'DECREMENT': {
          console.log('DECREMENT')
          if (pageIndex + 1 === pagesColsRange[0]) {
            pagesColsRange = [(
              (pageIndex - pagesTabLength < 1)
              ? 1
              : pageIndex - (pagesTabLength - 1)
            ), pageIndex]
          }
          
          break;
        }
      }
    })()
  }
</script>

<section class = 'container'>
  <div class = 'col-12 py-5'>
    <div class = 'row py-3'>
      <div class = 'col-12 col-sm-auto text-center mb-3'>
        <button
          class = {`${pageIndex > 1 ? '' : 'disabled'} transition bg-green border-0 rounded-lg text-white px-4 shadow text-uppercase py-3`}
          on:click = {() => updatePageIndex('DECREMENT')}
        >previous</button>
      </div>
      <div class = 'col-12 col-sm text-center'>
      	{#each Array(pagesCols).fill('') as _, index}
          {#if index >= pagesColsRange[0] && index <= pagesColsRange[1]}
            <button
              on:click = {() => pageIndex = index}
              style = {`background: ${pageIndex === index ? 'var(--green)' : 'transparent'}`}
              class = {`text-${pageIndex === index ? 'white' : 'dark'} border mx-2 mb-3 rounded-lg px-4 py-3`}
            >{index + 1}</button>
          {/if}
        {/each}
      </div>
      <div class = 'col-12 col-sm-auto text-center mb-3'>
        <button
          class = {`${pageIndex < pagesCols - 1 ? '' : 'disabled'} transition bg-green border-0 rounded-lg text-white px-4 shadow text-uppercase py-3`}
          on:click = {() => updatePageIndex('INCREMENT')}
        >next</button>
      </div>
    </div>
  </div>
</section>

<style>
  .disabled {
    pointer-events: none;
    user-select: none;
    opacity: .5;
  }
  .transition {
    transition: all .5s ease;
  }
</style>