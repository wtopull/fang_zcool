<template>
  <div id="app">
    <f-navs></f-navs>
    <!-- <header>
      <f-navs></f-navs>
    </header>-->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import fNavs from "@/components/navs/index";
export default {
  components: {
    fNavs
  }
};
</script>

<style lang="scss">
</style>
