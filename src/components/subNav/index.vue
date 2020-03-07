<template>
  <div class="sub_navs">
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
  data() {
    return {
      subNavIndex: 0,
      subNav: [
        { title: "首页推荐", path: "" },
        { title: "最新发布", path: "" }
      ]
    };
  },
  methods: {
    subNavPath: function(item, index) {
      this.subNavIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.sub_navs {
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
</style>