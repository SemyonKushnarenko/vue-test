<template>
<h2 v-if="searchQuery.length >= minLengthOfQuery">
  You search for: {{ searchQuery }}, {{ countOfMovies }} results found
</h2>
<h2 v-else>Please, type at least {{ minLengthOfQuery }} symbols</h2>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
    minLengthOfQuery: {
      type: Number,
      required: true,
    },
    countOfMovies: {
      type: Number,
      default: 0,
    },
  }
}
</script>

<style scoped>

</style>