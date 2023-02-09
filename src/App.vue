<template>
  <MainView />
</template>

<script>
import MainView from "@/views/MainView.vue";

export default {
  name: 'App',
  components: {
    MainView
  }
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
