<template>
  <div class="list mt_20">
    <f-card>
      <div class="list_nav flex_items j_sb">
        <ul class="flex_items">
          <li
            class="flex_items"
            :class="{active: navIndex === index}"
            v-for="(item,index) in navs"
            :key="index"
            @click="navHandle(index)"
          >{{item.title}}</li>
        </ul>
        <div>
          <a-icon type="plus-circle" />
          <span>发布职位</span>
        </div>
      </div>
    </f-card>
    <div class="list_item mt_20" v-for="(item,index) in lists" :key="index">
      <f-card>{{item}}</f-card>
    </div>
  </div>
</template>
<script>
import fCard from "./card";
export default {
  props: ["lists"],
  data() {
    return {
      navIndex: 0,
      navs: [
        { title: "推荐", type: "rec" },
        { title: "最新", type: "new" }
      ]
    };
  },
  mounted() {},
  methods: {
    navHandle: function(index) {
      this.navIndex = index;
    }
  },
  components: {
    fCard
  }
};
</script>
<style lang="scss" scoped>
.list_nav {
  padding: 0px 25px;
  height: 54px;
  & li {
    height: 52px;
    font-size: 16px;
    margin-right: 35px;
    color: #666;
    cursor: pointer;
    border-bottom: solid 2px #ffffff;
    &.active {
      border-bottom: solid 2px #ff8600;
      color: #ff8600;
    }
  }
  & span {
    font-size: 14px;
    margin-left: 5px;
    color: #282828;
    cursor: pointer;
    &:hover {
      color: #ff8600;
    }
  }
}
.list_item {
  height: 146px;
}
</style>