<template>
  <div class="discover pages">
    <div class="discover_t">
      <div class="discover_advlong">
        <f-adv-long :advLongUrl="advLongUrl"></f-adv-long>
      </div>
      <f-sub-nav :subNav="subNav" :targetY="241" @subNavPath="subNavPath"></f-sub-nav>
    </div>
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
      <f-adv-long :advLongUrl="advLongUrl2"></f-adv-long>
      <f-gogoup-adv></f-gogoup-adv>
    </div>
  </div>
</template>
<script>
import fAdvLong from "@/components/advs/adv-long";
import fSubNav from "@/components/subNav/index";
import fWorkList from "@/components/work-list/index";
import fPaging from "@/components/paging/index";
import fGogoupAdv from "@/components/advs/gogoup-adv";
import workLists from "@/assets/js/workLists";
import scroll from "@/assets/js/scrollToTop";
export default {
  data() {
    return {
      pageIndex: 40,
      workLists: workLists,
      lists: [],
      subNav: [
        { title: "编辑精选", path: "/" },
        { title: "最新发布", path: "/discover" }
      ],
      advLongUrl: {
        img: "discover_advlong",
        href:
          "https://www.hellorf.com/special/orientals/?utm_source=zcool&utm_medium=workslist&utm_campaign=works1&utm_content=special&utm_term=img-orientals"
      },
      advLongUrl2: {
        img: "discover_advlong2",
        href:
          "https://www.gogoup.com/course/GNTI4?utm_source=zcool&utm_medium=sub_01&utm_campaign=course_live&utm_content=528&utm_term=3d"
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
      scroll(currentY, 241);
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
    fAdvLong,
    fSubNav,
    fWorkList,
    fPaging,
    fGogoupAdv
  }
};
</script>
<style lang="scss" scoped>
.discover_t {
  background: #ffffff;
}
.discover_advlong {
  padding: 20px 0;
}
</style>