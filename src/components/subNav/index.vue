<template>
  <div class="sub_navs" :class="{active:visible}">
    <div class="subnav_contentbox mauto">
      <ul class="flex_a_j">
        <li
          class="sub_navs_item flex_items"
          v-for="(item,index) in subNav"
          :key="index"
          @click="subNavPath(item,index)"
          @mouseover="showDiscoverMenu = true"
          @mouseleave="showDiscoverMenu = false"
        >
          <a
            class="flex"
            :class="{active: subNavIndex === index}"
            href="javascript:void(0);"
          >{{item.title}}</a>
          <a-icon type="down" v-if="index === 0&&$route.path==='/discover'" />
          <div class="discover_menu" v-if="showDiscoverMenu&&index === 0">
            <ul>
              <li
                class="discover_menu_item"
                v-for="(kk,kkIndex) in navs.discoverMenuItem"
                :key="kkIndex"
              >{{kk.title}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import navs from "@/assets/js/navs";
export default {
  props: ["subNav", "targetY"],
  data() {
    return {
      navs,
      subNavIndex: 0,
      visible: false,
      showDiscoverMenu: false,
      interval: null
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.targetY;
    },
    subNavPath: function(item, index) {
      this.subNavIndex = index;
      this.$emit("subNavPath", item);
    }
  }
};
</script>
<style lang="scss" scoped>
.sub_navs {
  position: relative;
  width: 100%;
  height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  .subnav_contentbox {
    height: 100%;
    & .sub_navs_item {
      font-size: 16px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      padding: 0 30px;
      position: relative;
      cursor: pointer;
      & a {
        color: #999;
        height: 100%;
      }
      & a.active {
        color: #282828;
        border-bottom: 2px solid #444;
      }
      & a:hover {
        color: #282828;
        border-bottom: 2px solid #444;
      }
      & i {
        font-size: 14px;
        margin-left: 6px;
      }
    }
  }
}
.discover_menu {
  position: absolute;
  left: 12px;
  top: 54px;
  z-index: 14;
  background: #fff;
  width: 115px;
  z-index: 1;
  border-radius: 4px;
  padding: 10px 0;
  -webkit-box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.2);
  & .discover_menu_item {
    background: #fff;
    height: 40px;
    line-height: 40px;
    color: #444444;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
  }
  & .discover_menu_item:hover {
    background: #f2f2f2;
  }
}
.sub_navs.active {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>