<template>
  <div class="current">
    <div class="wrapper">
      <f-slider></f-slider>
      <div class="adv mauto"></div>
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
  </div>
</template>
<script>
import fSlider from "@/components/slider/index";
import fSubNav from "@/components/subNav/index";
import fWorkList from "@/components/work-list/index";
import workLists from "@/assets/js/workLists";
export default {
  data() {
    return {
      adv: [],
      lists: []
    };
  },
  mounted() {
    this.lists = workLists;
  },
  methods: {},
  components: {
    fSlider,
    fSubNav,
    fWorkList
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: #ffffff;
  padding: 20px 0 24px 0;
  height: 544px;
}
.adv {
  height: 170px;
}
.work_list_box {
  padding-top: 20px;
}
.card_list {
  position: relative;
  background: #fff;
  width: 260px;
  border-radius: 4px;
  margin: 0 20px 20px 0;
}
.card_list:nth-child(5n) {
  margin-right: 0;
}
</style>