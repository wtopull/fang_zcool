<template>
  <div class="job_right" ref="jobRight">
    <f-search></f-search>
    <f-list :lists="lists"></f-list>
    <f-add @setScrollTop="setScrollTop"></f-add>
  </div>
</template>
<script>
import fSearch from "./search";
import fList from "./list";
import fAdd from "./add";
export default {
  data() {
    return {
      lists: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"]
    };
  },
  mounted() {
    this.getScrollTop();
  },
  methods: {
    setScrollTop: function() {
      let list = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
      this.lists = this.lists.concat(list);
      this.getScrollTop();
    },
    getScrollTop: function() {
      this.$nextTick(() => {
        let jobRight = this.$refs.jobRight.offsetHeight;
        localStorage.setItem("jobRight", jobRight);
      });
    }
  },
  components: {
    fSearch,
    fList,
    fAdd
  }
};
</script>
<style lang="scss" scoped>
.job_right {
  width: 790px;
  margin-left: 290px;
}
</style>