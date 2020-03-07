<template>
  <div class="navs flex_items j_sb">
    <nav-logo></nav-logo>
    <nav-menu></nav-menu>
    <nav-right></nav-right>
  </div>
</template>
<script>
import navLogo from "./nav-logo";
import navMenu from "./menu";
import navRight from "./nav-right";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    navLogo,
    navMenu,
    navRight
  }
};
</script>
<style lang="scss" scoped>
.navs {
  min-width: 1200px;
  width: 100%;
  height: 56px;
  padding: 0 70px;
  background: #ffe300;
}
</style>