<template>
  <div class="nav_r flex_items">
    <div class="nav_r_box">
      <a-icon type="search" />
    </div>
    <div class="nav_r_box">
      <a-icon type="cloud-upload" />
    </div>
    <div class="nav_r_box">
      <a-icon type="bell" />
    </div>
    <div class="nav_r_box" @mouseleave="navShow = false" @mouseover="navShow = true">
      <img src="@/assets/images/user_default.jpg" alt />
      <div class="menu_pop">
        <!-- <div class="menu_pop" v-if="navShow"> -->
        <p class="menu_pop_author">阿龙--前端</p>
        <ul>
          <li
            :class="{'menu_pop_active': user.title === '我的简历'}"
            v-for="(user,userIndex) in navs.userMenu"
            :key="userIndex"
          >{{user.title}}</li>
          <li class="menu_pop_logout">退出</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import navs from "@/assets/js/navs";
export default {
  data() {
    return {
      navs,
      info: [],
      ziliao: [],
      navShow: false
    };
  },
  mounted() {
    this.info = this.navs.userMenu[0];
    this.ziliao = this.navs.userMenu[1];
  },
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
.nav_r {
  position: relative;
  font-size: 24px;
  & .nav_r_box {
    position: relative;
    width: 60px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    cursor: pointer;
    img {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  & .nav_r_box:hover {
    background: #282828;
    color: #ffe300;
  }
}

.menu_pop_author {
  color: #444;
  text-align: left;
  margin-bottom: 2px;
  padding-left: 20px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}
.menu_pop_active {
  border-top: 1px solid #eee;
}
.menu_pop_logout {
  border-top: 1px solid #eee;
}
</style>