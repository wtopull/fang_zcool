<template>
  <div id="app">
    <f-navs></f-navs>
    <div class="main">
      <router-view></router-view>
      <f-footer></f-footer>
    </div>
    <div class="back_top">
      <f-scroll-to-top transitionName="fade" :visibilityHeight="1299" :backPosition="0"></f-scroll-to-top>
    </div>
  </div>
</template>
<script>
import fNavs from "@/components/navs/index";
import fFooter from "@/components/footer/index";
import fScrollToTop from "@/components/scroll-to-top/index";
export default {
  components: {
    fNavs,
    fFooter,
    fScrollToTop
  }
};
</script>

<style lang="scss">
.back_top {
  position: fixed;
  left: 50%;
  bottom: 40px;
  z-index: 10;
  margin-left: 700px;
}
</style>
