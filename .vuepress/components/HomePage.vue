<template lang="html">
  <div class="home">
      hello
      search

      <div class="search-box">
        <input
          @input="query = $event.target.value"
          aria-label="Search"
          autocomplete="off"
          spellcheck="false"
          @focus="focused = true"
          @blur="focused = false"
          @keyup.up="onUp"
          @keyup.down="onDown">
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
