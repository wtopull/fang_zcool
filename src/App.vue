<template>
  <div id="app">
    <f-navs></f-navs>
    <div class="main">
      <router-view></router-view>
      <f-footer></f-footer>
    </div>
  </div>
</template>
<script>
import fNavs from "@/components/navs/index";
import fFooter from "@/components/footer/index";
export default {
  components: {
    fNavs,
    fFooter
  }
};
</script>

<style lang="scss">
</style>
