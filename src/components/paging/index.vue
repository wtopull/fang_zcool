<template>
  <!-- 分页 -->
  <div class="paging flex_a_j">
    <a-pagination :total="listNum" :itemRender="itemRender" :pageSize="40" @change="change" />
  </div>
</template>
<script>
export default {
  props: ["pageNum", "pageIndex"],
  data() {
    return {
      listNum: this.pageNum
    };
  },
  methods: {
    change: function(current) {
      this.$emit("setPage", current);
    },
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return (
          <a>
            <a-icon type="left" />
          </a>
        );
      } else if (type === "next") {
        return (
          <a>
            <a-icon type="right" />
          </a>
        );
      }
      return originalElement;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.paging {
  margin: 40px 0 30px;
}
</style>