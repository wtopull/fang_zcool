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
        <div
          class="menu_pop_discover"
          v-if="navShow && item.name === 'discover' && hoverIndex === index"
        >
          <ul class="menu_pop_discover_t flex_items flex_w">
            <li
              class="flex_a_j"
              v-for="(discover,discoverIndex) in navs.discoverBoxList"
              :key="discoverIndex"
            >
              <span>{{discover.title}}</span>
            </li>
          </ul>
          <ul class="menu_pop_discover_b flex_items">
            <li v-for="(Check,CheckIndex) in navs.discoverCheck" :key="CheckIndex">
              {{Check.title}}
              <a-icon type="right" />
            </li>
          </ul>
        </div>
        <div class="menu_pop" v-if="navShow && item.name === 'job' && hoverIndex === index">
          <ul>
            <li v-for="(job,jobIndex) in navs.jobChild" :key="jobIndex">{{job.title}}</li>
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
              @click="toLink(item)"
            >{{zhengban.title}}</li>
          </ul>
        </div>
        <div class="menu_pop" v-if="navShow && item.name === 'course' && hoverIndex === index">
          <ul>
            <li
              v-for="(course,courseIndex) in navs.courseChild"
              :key="courseIndex"
              @click="toLink(item)"
            >{{course.title}}</li>
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
    },
    // 外部打开链接
    toLink: function(item) {
      window.open(item.href);
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
.menu_pop_discover {
  position: absolute;
  left: 0;
  top: 56px;
  background: #fff;
  color: #444;
  z-index: 14;
  border-radius: 0 0 4px 4px;
  -webkit-box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  width: 664px;
  .menu_pop_discover_t {
    border-bottom: 1px solid #eaeaea;
    line-height: 0;
    overflow: hidden;
    padding: 11px 17px 17px;
    & li {
      position: relative;
      width: 90px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      position: relative;

      cursor: pointer;
      & span {
        display: inline-block;
        text-align: center;
        min-width: 42px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        padding: 0 7px;
        margin: 0 6px;
        border-radius: 4px;
        color: #444;
      }
      & span:hover {
        background: #ffe300;
        color: #444;
      }
    }
    & li:nth-child(7n):before {
      content: "";
      width: 0;
      height: 0;
    }
    & li:before {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      height: 14px;
      width: 1px;
      background: #ddd;
    }
  }
  .menu_pop_discover_b {
    padding: 0 30px;
    line-height: 51px;
    & li {
      cursor: pointer;
      margin-right: 40px;
      color: #444;
    }
    & li:hover {
      color: #d36f16;
    }
  }
}
</style>