<template>
  <div class="pages">
    <div class="special_t">
      <f-sub-nav :subNav="subNav" :targetY="56" @subNavPath="subNavPath"></f-sub-nav>
    </div>
    <div class="special_c mauto">
      <ul class="flex flex_w">
        <li class="special_item" v-for="(item,index) in 7" :key="index">
          <f-special-card></f-special-card>
        </li>
      </ul>
    </div>
    <f-paging :pageNum="7" :pageIndex="pageIndex" @setPage="setPage"></f-paging>
  </div>
</template>
<script>
import fSubNav from "@/components/subNav/index";
import fPaging from "@/components/paging/index";
import fSpecialCard from "@/components/cards/special-card";
import workLists from "@/assets/js/workLists";
import scroll from "@/assets/js/scrollToTop";
export default {
  data() {
    return {
      pageIndex: 10,
      workLists: workLists,
      subNav: [
        { title: "最新活动", path: "/special" },
        { title: "设计大赛", path: "/special" },
        { title: "专题策划", path: "/special" },
        { title: "线上活动", path: "/special" },
        { title: "线下活动", path: "/special" },
        { title: "学习音频", path: "/special" }
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
      // window.open("https://www.baidu.com");
      this.$router.push(item.path);
    }
  },
  components: {
    fSubNav,
    fPaging,
    fSpecialCard
  }
};
</script>
<style lang="scss" scoped>
.special_t {
  background: #ffffff;
}
.special_c {
  margin-top: 20px;
}
.special_item {
  width: 680px;
  margin: 0 20px 20px 0;
  background: #ffffff;
}
.special_item:nth-child(2n) {
  margin-right: 0;
}
</style>