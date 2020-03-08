<template>
  <div class="sub_navs" :class="{active:visible}">
    <div class="subnav_contentbox mauto">
      <ul class="flex_a_j">
        <li v-for="(item,index) in subNav" :key="index" @click="subNavPath(item,index)">
          <a
            class="flex"
            :class="{active: subNavIndex === index}"
            href="javascript:void(0);"
          >{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["subNav", "targetY"],
  data() {
    return {
      subNavIndex: 0,
      visible: false,
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
      // if (item.path === window.location.pathname) {
      //   return false;
      // }
      // this.$router.push(item.path);
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
    & li {
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
    }
  }
}
.sub_navs.active {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>