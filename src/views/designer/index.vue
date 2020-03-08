<template>
  <div class="designer pages">
    <div class="designer_t">
      <f-sub-nav :subNav="subNav" :targetY="56" @subNavPath="subNavPath"></f-sub-nav>
    </div>
    <f-paging :pageNum="workLists.length" :pageIndex="pageIndex" @setPage="setPage"></f-paging>
  </div>
</template>
<script>
import fSubNav from "@/components/subNav/index";
import fPaging from "@/components/paging/index";
import workLists from "@/assets/js/workLists";
import scroll from "@/assets/js/scrollToTop";
export default {
  data() {
    return {
      pageIndex: 40,
      workLists: workLists,
      subNav: [
        { title: "编辑精选", path: "/" },
        { title: "最新发布", path: "/discover" }
      ]
    };
  },
  mounted() {},
  methods: {
    // 获取当前分页数据
    setPage: function(n) {
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 调用滚动方法
      scroll(currentY, 680);
      this.lists = workLists.slice(
        (n - 1) * this.pageIndex,
        this.pageIndex * n
      );
    },
    subNavPath: function(item) {
      if (item.path === window.location.pathname) {
        return false;
      }
      window.open("https://www.baidu.com");
      // this.$router.push(item.path);
    }
  },
  components: {
    fSubNav,
    fPaging
  }
};
</script>
<style lang="scss" scoped>
.designer_t {
  background: #ffffff;
}
</style>