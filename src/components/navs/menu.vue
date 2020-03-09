<template>
  <div class="nav_menu">
    <ul class="flex_items">
      <li
        class="nav_menu_items"
        v-for="(item,index) in navs.navs"
        :key="index"
        @mouseleave="navShow = false, hoverIndex = navIndex"
        @mouseover="navShow = true,hoverIndex = index"
        @click.stop="navPath(item,index)"
      >
        <a
          class="flex_a_j"
          :class="{'active': navIndex === index,'hoverActive': hoverIndex === index}"
          href="javascript:void(0);"
        >{{item.title}}</a>
        <div class="menu_pop" v-if="navShow && item.name === 'job' && hoverIndex === index">
          <ul>
            <li
              class="pop_items"
              v-for="(job,jobIndex) in navs.jobChild"
              :key="jobIndex"
            >{{job.title}}</li>
          </ul>
        </div>
        <div class="menu_pop" v-if="navShow && item.name === 'special' && hoverIndex === index">
          <ul>
            <li
              v-for="(special,specialIndex) in navs.specialChild"
              :key="specialIndex"
            >{{special.title}}</li>
          </ul>
        </div>
        <div class="menu_pop" v-if="navShow && item.name === 'zhengban' && hoverIndex === index">
          <ul>
            <li
              v-for="(zhengban,zhengbanIndex) in navs.zhengbanChild"
              :key="zhengbanIndex"
            >{{zhengban.title}}</li>
          </ul>
        </div>
        <div class="menu_pop" v-if="navShow && item.name === 'course' && hoverIndex === index">
          <ul>
            <li v-for="(course,courseIndex) in navs.courseChild" :key="courseIndex">{{course.title}}</li>
          </ul>
        </div>
        <div class="menu_pop" v-if="navShow && item.name === 'more' && hoverIndex === index">
          <ul>
            <li v-for="(more,moreIndex) in navs.moreMenu" :key="moreIndex">{{more.title}}</li>
          </ul>
        </div>
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
      hoverIndex: 0,
      navShow: false,
      pathname: window.location.pathname
    };
  },
  watch: {
    $route(to) {
      if (this.$route.path === to.path) {
        this.navs.navs.forEach((item, index) => {
          if (item.path === to.path) {
            this.navIndex = index;
            this.hoverIndex = index;
          } else {
            return false;
          }
        });
      }
    }
  },
  mounted() {
    this.setNavIndex();
  },
  methods: {
    setNavIndex: function() {
      let navs = this.navs.navs;
      this.$nextTick(() => {
        navs.forEach((item, index) => {
          if (item.path === this.pathname) {
            this.navIndex = index;
            this.hoverIndex = index;
          }
        });
      });
    },
    navPath: function(item, index) {
      this.hoverIndex = index;
      if (item.path && item.path !== this.$route.path) {
        this.$router.push(item.path);
      } else {
        return false;
      }
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.nav_menu {
  & .nav_menu_items {
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
    color: #282828;
  }
  & a.hoverActive {
    background: #282828;
    color: #ffe300;
  }
  & a.active.hoverActive {
    background: #282828;
    font-weight: 600;
    color: #ffe300;
  }
}
</style>