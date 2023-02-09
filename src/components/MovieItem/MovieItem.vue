<template>
<div class="movie">
  <div class="movie__image">
    <img class="image"
         :src="movie.Poster === 'N/A' ? '/assets/not-found.png' : movie.Poster"
         :alt="`${movie.Title} movie`">
  </div>
  <div class="movie__description">
    <p>Name: {{ movie.Title }}</p>
    <p>Year: {{ movie.Year }}</p>
    <p>imdbID: {{ movie.imdbID }}</p>
    <p>Type: {{ movie.Type }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.movie {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.movie__image {
  width: 100%;
  height: 200px;
  border: 15px solid lightgray;
  position: relative;
}
.image {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>