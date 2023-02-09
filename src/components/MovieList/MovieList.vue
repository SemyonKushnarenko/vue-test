<template>
<div class="movies">
  <MovieItem
    v-for="movie in movies"
    :key="movie.imdbID"
    :movie="movie"
  />
</div>
</template>

<script>
import MovieItem from "@/components/MovieItem/MovieItem.vue";

export default {
  name: "MovieList",
  components: {MovieItem},
  props: {
    movies: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>
.movies {
  display: flex;
  flex-flow: row wrap;
  gap: 3rem 4rem;
  margin: 0 auto;
}
</style>