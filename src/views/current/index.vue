<template>
  <div class="current pages noselec">
    <div class="wrapper">
      <f-slider></f-slider>
      <div class="adv mauto">
        <f-advs></f-advs>
      </div>
    </div>
    <f-sub-nav :subNav="subNav" :targetY="681" @subNavPath="subNavPath"></f-sub-nav>
    <div class="work_list_box mauto">
      <div>
        <ul class="flex flex_w">
          <li class="card_list" v-for="(item,index) in lists" :key="index">
            <f-work-list :item="item"></f-work-list>
          </li>
        </ul>
      </div>
    </div>
    <f-paging :pageNum="workLists.length" :pageIndex="pageIndex" @setPage="setPage"></f-paging>
    <div>
      <f-adv-long :advLongUrl="advLongUrl"></f-adv-long>
      <f-gogoup-adv></f-gogoup-adv>
    </div>
  </div>
</template>
<script>
import fSlider from "@/components/slider/index";
import fSubNav from "@/components/subNav/index";
import fAdvs from "@/components/advs/index";
import fWorkList from "@/components/work-list/index";
import workLists from "@/assets/js/workLists";
import fPaging from "@/components/paging/index";
import fAdvLong from "@/components/advs/adv-long";
import fGogoupAdv from "@/components/advs/gogoup-adv";
import scroll from "@/assets/js/scrollToTop.js";
export default {
  data() {
    return {
      pageIndex: 40,
      adv: [],
      workLists: workLists,
      lists: [],
      subNav: [
        { title: "首页推荐", path: "/current" },
        { title: "最新发布", path: "/discover" }
      ],
      advLongUrl: {
        img: "advlong",
        href:
          "https://www.hellorf.com/video/topic/3133/?utm_source=zcool&utm_medium=index&utm_campaign=index6&utm_content=video-selection&utm_term=3133"
      }
    };
  },
  mounted() {
    const currentY =
      document.documentElement.scrollTop || document.body.scrollTop;
    scroll(currentY, 0);
    this.setLists(0, this.pageIndex);
  },
  methods: {
    setLists: function(n, m) {
      this.lists = workLists.slice(n, m);
    },
    // 获取当前分页数据
    setPage: function(n) {
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 调用滚动方法
      scroll(currentY, 681);
      this.lists = workLists.slice(
        (n - 1) * this.pageIndex,
        this.pageIndex * n
      );
    },
    subNavPath: function(item) {
      if (item.path === window.location.pathname) {
        return false;
      }
      console.log(item);

      this.$router.push(item.path);
    }
  },
  components: {
    fSlider,
    fSubNav,
    fAdvs,
    fWorkList,
    fPaging,
    fAdvLong,
    fGogoupAdv
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: #ffffff;
  padding: 20px 0 24px 0;
  height: 624px;
}
.adv {
  height: 210px;
}
</style>