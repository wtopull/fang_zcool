<template>
  <div class="job_nav">
    <div class="nav_box noselec flex_items j_sb">
      <div class="area">
        <span class="area_name">全国</span>
        <span class="area_change">切换城市>></span>
      </div>
      <div>
        <ul class="flex_items">
          <li
            class="nav_item flex_a_j"
            :class="{active: navItemIndex === index}"
            v-for="(item,index) in navs"
            :key="index"
            @click="navHandle(item,index)"
          >
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="my_resumes">我的简历</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navItemIndex: 0,
      navs: [
        { name: "首页", path: "/job/" },
        { name: "企业", path: "/job/enterprise" },
        { name: "我发布的职位", path: "/job/resumes" }
      ]
    };
  },
  mounted() {},
  methods: {
    navHandle: function(item, index) {
      console.log(item);
      this.$router.push(item.path);
      this.navItemIndex = index;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.job_nav {
  position: relative;
  width: 100%;
  height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  .nav_box {
    width: 1080px;
    height: 100%;
    margin: 0 auto;
  }
}
.nav_item {
  height: 54px;
  font-size: 16px;
  margin: 0 29px;
  color: #7f7f7f;
  border-bottom: 2px solid #fff;
  cursor: pointer;
  position: relative;
  & span {
    display: inline-block;
    height: 54px;
    line-height: 54px;
  }
  &:hover {
    color: #333;
  }
  &.active {
    border-bottom: 2px solid #ff8600;
    color: #ff8600;
  }
}
.area {
  width: 20%;
  .area_name {
    font-size: 18px;
    margin-right: 5px;
  }
  .area_change {
    cursor: pointer;
    font-style: normal;
    font-size: 14px;
    color: #999;
  }
}
.my_resumes {
  cursor: pointer;
  color: #7f7f7f;
  text-align: right;
  width: 20%;
  &:hover {
    color: #ff8600;
    text-decoration: underline;
  }
}
</style>