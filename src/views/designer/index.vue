<template>
  <!-- 设计师 -->
  <div class="designer pages">
    <div class="designer_t">
      <f-sub-nav :subNav="subNav" :targetY="56" @subNavPath="subNavPath"></f-sub-nav>
    </div>
    <div class="designer_c mauto">
      <ul>
        <li v-for="(item,index) in 10" :key="index">
          <f-designer-card></f-designer-card>
        </li>
      </ul>
    </div>
    <f-paging :pageNum="10" :pageIndex="pageIndex" @setPage="setPage"></f-paging>
  </div>
</template>
<script>
import fSubNav from "@/components/subNav/index";
import fPaging from "@/components/paging/index";
import fDesignerCard from "@/components/cards/designer-card";
import workLists from "@/assets/js/workLists";
import scroll from "@/assets/js/scrollToTop";
export default {
  data() {
    return {
      pageIndex: 40,
      workLists: workLists,
      subNav: [
        { title: "设计师", path: "/" },
        { title: "团体", path: "/discover" }
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
      scroll(currentY, 56);
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
    fPaging,
    fDesignerCard
  }
};
</script>
<style lang="scss" scoped>
.designer_t {
  background: #ffffff;
}
.designer_c {
  margin-top: 20px;
  border-radius: 4px;
  overflow: hidden;
  & li {
    padding: 30px;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
}
</style>