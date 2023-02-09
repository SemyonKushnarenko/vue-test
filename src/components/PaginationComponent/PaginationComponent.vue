<template>
<ul class="pagination">
  <template v-if="currentPage !== 1">
    <li
        class="pagination__item"
        @click="onPageChange(currentPage - 1)"
    >
      &lt;
    </li>
    <li
        class="pagination__item"
        @click="onPageChange(1)"
    >
      1
    </li>
  </template>
  <li class="pagination__item" v-if="hideLessNumbers">...</li>
  <li
      class="pagination__item active"
  >{{ currentPage }}</li>
  <li class="pagination__item" v-if="hideBiggerNumbers">...</li>
  <template
      v-if="currentPage !== countOfPages"
  >
    <li
        class="pagination__item"
        @click="onPageChange(countOfPages)"
    >
      {{ countOfPages }}
    </li>
    <li class="pagination__item"
        @click="onPageChange(currentPage + 1)"
    >&gt;</li>
  </template>
</ul>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    countOfMovies: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
    },
    moviesPerPage: {
      type: Number,
      required: true,
    }
  },
  computed: {
    countOfPages: function() {
      return Math.ceil(this.countOfMovies / this.moviesPerPage)
    },
    hideLessNumbers: function () {
      return this.currentPage > 2
    },
    hideBiggerNumbers: function () {
      return this.currentPage < this.countOfPages - 1
    },
  },
  methods: {
    onPageChange(page) {
      this.$emit('onPageChange', page)
    }
  }
}
</script>

<style>
.pagination {
  display: flex;
  width: 100%;
  justify-content: center;
  list-style: none;
  gap: 1rem;
}
.pagination__item {
  cursor:pointer;
  font-size: 1.5rem;
  font-weight: 700;
}
.pagination__item.active {
  color: #42b983;
}
</style>