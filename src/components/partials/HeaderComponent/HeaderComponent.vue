<template>
<header class="header">
  <div class="container container_header">
    <h1>Movie Catalog</h1>
    <div class="header__main">
      <SearchComponent
          :searchQuery="searchQuery"
          @text-change="onSearchChange"
      />
      <UserInfo />
    </div>
  </div>
</header>
</template>

<script>
import UserInfo from "@/components/UserInfo/UserInfo.vue";
import SearchComponent from "@/components/SearchComponent/SearchComponent.vue";

export default {
  name: "HeaderComponent",
  components: {SearchComponent, UserInfo},
  props: {
    onSearchChange: {
      type: Function,
      required: true,
    },
    searchQuery: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
.container_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  background: #42b983;
  width: 100%;
  padding: 1rem 2rem;
}
.header__main {
  display: flex;
  align-items: center;
  gap: 1rem;
}
@media screen and (max-width: 850px) {
  .container_header {
    flex-direction: column;
    gap: 1rem;
  }
}
@media screen and (max-width: 640px) {
  .header__main {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>