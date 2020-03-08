<template>
  <div class="current noselec">
    <div class="wrapper">
      <f-slider></f-slider>
      <div class="adv mauto">
        <f-advs></f-advs>
      </div>
    </div>
    <f-sub-nav></f-sub-nav>
    <div class="work_list_box mauto">
      <div>
        <ul class="flex flex_w flex_r">
          <li class="card_list" v-for="(item,index) in lists" :key="index">
            <f-work-list :item="item"></f-work-list>
          </li>
        </ul>
      </div>
    </div>
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
import fAdvLong from "@/components/advs/adv-long";
import fGogoupAdv from "@/components/advs/gogoup-adv";
export default {
  data() {
    return {
      adv: [],
      lists: [],
      advLongUrl: {
        img: "advlong",
        href:
          "https://www.hellorf.com/video/topic/3133/?utm_source=zcool&utm_medium=index&utm_campaign=index6&utm_content=video-selection&utm_term=3133"
      }
    };
  },
  mounted() {
    this.lists = workLists;
  },
  methods: {},
  components: {
    fSlider,
    fSubNav,
    fAdvs,
    fWorkList,
    fAdvLong,
    fGogoupAdv
  }
};
</script>
<style lang="scss" scoped>
.current {
  padding-bottom: 40px;
}
.wrapper {
  background: #ffffff;
  padding: 20px 0 24px 0;
  height: 624px;
}
.adv {
  height: 210px;
}
.work_list_box {
  padding-top: 20px;
}
.card_list {
  position: relative;
  background: #fff;
  width: 260px;
  height: 345px;
  border-radius: 4px;
  margin: 0 20px 20px 0;
}
.card_list:nth-child(5n) {
  margin-right: 0;
}
</style>