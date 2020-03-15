<template>
  <div class="pages">
    <f-job-nav></f-job-nav>
    <div class="job_con">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import fJobNav from "@/components/jobs/nav";
export default {
  components: {
    fJobNav
  }
};
</script>
<style lang="scss" scoped>
.job_con {
  position: relative;
  width: 1080px;
  padding: 40px 0;
  margin: 0 auto;
}
</style>