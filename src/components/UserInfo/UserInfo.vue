<template>
  <div class="user">
    <div class="user__logo"></div>
    <div class="user__dropdown">
      <img class="user__icon" src="/assets/user.png" alt="">
      <span class="user__name">Alexander Borisenko</span>
      <span class="arrow"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
.user__dropdown {
  cursor: pointer;
  display: flex;
  gap: .5rem;
  align-items: center;
}
.user__icon {
  height: 15px;
}
.arrow {
  width: 0;
  aspect-ratio: 0;
  border: 5px solid transparent;
  border-top-color: #000;
}
</style>