<template>
  <div class="nav_menu">
    <ul class="flex_items">
      <li
        v-for="(item,index) in navs.navs"
        :key="index"
        @mouseleave="navShow = true"
        @mouseover="navShow = false"
        @click.stop="navPath(item,index)"
      >
        <a
          class="flex_a_j"
          :class="{active: navIndex === index}"
          href="javascript:void(0);"
        >{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import navs from "@/assets/js/navs";
export default {
  data() {
    return {
      navs,
      navIndex: 0,
      navShow: false
    };
  },
  mounted() {
    this.setNavIndex();
  },
  methods: {
    setNavIndex: function() {
      let navs = this.navs.navs;
      this.$nextTick(() => {
        navs.forEach((item, index) => {
          if (item.path === window.location.pathname) {
            this.navIndex = index;
          }
        });
      });
    },
    navPath: function(item, index) {
      if (
        item.path &&
        this.navIndex !== index &&
        item.path !== window.location.pathname
      ) {
        this.$router.push(item.path);
        this.navIndex = index;
      } else {
        item.href ? window.open(item.href) : false;
      }
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.nav_menu {
  & li {
    position: relative;
  }
  & a {
    font-size: 14px;
    height: 56px;
    line-height: 56px;
    cursor: pointer;
    padding: 0 24px;
    color: #282828;
  }
  & a:hover {
    background: #282828;
    color: #ffe300;
  }
  & a.active {
    font-weight: 600;
    background: #282828;
    color: #ffe300;
  }
}
</style>