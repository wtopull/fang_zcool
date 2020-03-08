<template>
  <!-- 滚动到顶部 -->
  <transition :name="transitionName">
    <div class="page_component_up no_select" @click="backToTop" v-show="visible">
      <a-icon type="up" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  props: {
    transitionName: {
      type: String,
      default: "fade"
    },
    visibilityHeight: {
      type: Number
    },
    backPosition: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
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
      this.visible = window.pageYOffset > this.visibilityHeight;
    },
    backToTop() {
      let distanceY = window.pageYOffset;
      let i = 0;
      this.interval = setInterval(() => {
        let next = Math.floor(
          this.easeInOutQuad(10 * i, distanceY, -distanceY, 300)
        );
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition);
          clearInterval(this.interval);
        } else {
          window.scrollTo(0, next);
        }
        i++;
      }, 17);
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return (c / 2) * t * t + b;
      } else {
        return (-c / 2) * (--t * (t - 2) - 1) + b;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page_component_up {
  text-align: center;
  transition: 0.3s;
  z-index: 99;
  color: #ffffff;
  font-size: 18px;
  background: #dddddd;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.page_component_up:hover {
  color: #333;
}
</style>