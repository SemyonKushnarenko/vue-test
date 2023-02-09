<template>
  <HeaderComponent
    :onSearchChange="onSearchChange"
    :searchQuery="searchQuery"
  />
  <main class="main">
    <div class="container container_main">
      <SearchResult
          v-if="!isLoading"
          :searchQuery="searchQuery"
          :min-length-of-query="minLengthOfQuery"
          :count-of-movies="+countOfMovies"
      />
      <ErrorComponent v-if="isError" />
      <LoadingComponent v-else-if="isLoading" />
      <template v-else>
        <MovieList
            v-if="movies" :movies="movies"/>
        <PaginationComponent
            v-if="countOfMovies > moviesPerPage"
            @onPageChange="onPageChange"
            :count-of-movies="+countOfMovies"
            :movies-per-page="moviesPerPage"
            :current-page="currentPage"
        />
      </template>
    </div>
  </main>
</template>

<script>
import HeaderComponent from "@/components/partials/HeaderComponent/HeaderComponent.vue";
import MovieList from "@/components/MovieList/MovieList.vue";
import OmdbService from "@/services/OmdbService";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent.vue";
import SearchResult from "@/components/SearchResult/SearchResult.vue";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent.vue";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent.vue";

const omdbService = new OmdbService();

export default {
  name: "MainView",
  components: {
    LoadingComponent,
    ErrorComponent,
    MovieList,
    PaginationComponent,
    SearchResult,
    HeaderComponent,
  },
  data() {
    return {
      movies: null,
      searchQuery: '',
      minLengthOfQuery: 3,
      countOfMovies: 0,
      currentPage: 1,
      moviesPerPage: 10,
      isLoading: false,
      isError: false,
    };
  },
  methods: {
    getMovies(query, page = 1) {
      if (query.length >= this.minLengthOfQuery) {
        this.isLoading = true;
        this.isError = false;
        omdbService.getMovies(query, page)
            .then(response => {
              this.isLoading = false;
              if (response.Response === 'True') {
                this.movies = response.Search;
                this.countOfMovies = response.totalResults;
                return;
              }
              this.movies = null;
              this.countOfMovies = 0;
            })
            .catch(() => {
              this.isLoading = false;
              this.isError = true;
            });
      } else {
        this.movies = null;
        this.countOfMovies = 0;
      }
    },
    onSearchChange(event) {
      this.searchQuery = event;
      this.currentPage = 1;
      this.getMovies(this.searchQuery);
    },
    onPageChange(event) {
      this.currentPage = event;
      this.getMovies(this.searchQuery, this.currentPage);
    },
  },
}
</script>

<style>
.main {
  padding: 2rem;
}
.container_main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>