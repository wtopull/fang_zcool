<template>
  <div class="nav_logo" @click="$router.push('/')">
    <img src="@/assets/images/logo.svg" />
  </div>
</template>
<style lang="scss" scoped>
.nav_logo {
  cursor: pointer;
  img {
    width: 120px;
    height: 20px;
  }
}
.svg-icon {
  width: 120px;
  height: 20px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>