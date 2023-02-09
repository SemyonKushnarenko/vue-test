<template>
  <input
      v-model="localSearch"
      @input="onTextChange"
      class="search"
      type="text"
      name="searchQuery"
      id="searchQuery"
      placeholder="Search for movie..."
  >
</template>

<script>
export default {
  name: "SearchComponent",
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      localSearch: this.searchQuery,
    };
  },
  methods: {
    onTextChange() {
      this.$emit('textChange', this.localSearch);
    },
  },
}
</script>

<style scoped>
  .search {
    outline: none;
    border: 1px solid #a8a8a8;
    border-top-width: 3px;
    width: 420px;
    padding: 3px;
  }
  @media screen and (max-width: 850px) {
    .search {
      padding: .5rem;
    }
  }
  @media screen and (max-width: 450px) {
    .search {
      width: 300px;
    }
  }
</style>