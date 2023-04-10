<script>
  export let query
  export let onInput
  export let onSearch
  export let placeholder

  let searchValue = query || ''

  $: ((searchValue) => {
    if (typeof onInput === 'function') {
      onInput({value: searchValue})
    }
  })(searchValue)
</script>

<section
  tabindex = '0'
  class = 'container-fluid border rounded-lg'
>
  <form
    class = 'row align-items-center py-2'
    on:submit|preventDefault = {() => {
      if (searchValue !== '' && typeof onSearch === 'function') {
        onSearch({query: searchValue})
      }
      else {
        const input = document.querySelector('#search-input')

        input.focus()
      }
    }}
  >
    <div class = 'col px-0'>
      <input
        type = 'text'
        id = 'search-input'
        bind:value = {searchValue}
        class = 'd-block w-100 py-2 px-3'
        placeholder = {placeholder || 'Type here to search...'}
      />
    </div>
    <div class = 'col-auto'>
      <button
        class = 'p-0'
        type = 'submit'
      >
        <span class = 'bi-search'></span>
      </button>
    </div>
  </form>
</section>

<style>
  input, button {
    border: none;
    outline: none;
    background: transparent;
  }
  button {
    font-size: 1.5rem;
  }
</style>
