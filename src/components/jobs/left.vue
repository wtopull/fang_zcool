<template>
  <div class="job_left" ref="job_left" :class="scrollClassName">
    <f-card class="job_l_menu">1</f-card>
    <f-card class="job_l_rss mt_20 flex_items j_sb">
      <span>职业订阅</span>
      <a-icon type="arrow-right" />
    </f-card>
    <f-card class="job_l_kefu mt_20">1</f-card>
    <f-card class="job_l_qrcode mt_20">1</f-card>
    <p class="job_nav mt_20 flex_items j_sb">
      <span>关于我们</span>
      <i>·</i>
      <span>常见问题</span>
      <i>·</i>
      <span>意见反馈</span>
      <i>·</i>
      <span>服务协议</span>
    </p>
  </div>
</template>
<script>
import fCard from "./card";
export default {
  data() {
    return {
      scrollClassName: "fixed_t",
      visible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let top = document.documentElement.scrollTop || window.pageYOffset;
      this.visible = top > 152;
      let jobLeftHeight = this.$refs.job_left.offsetHeight; // 952
      let jobRight = localStorage.getItem("jobRight") * 1; // 1876
      let scrollTop = jobRight - jobLeftHeight + 152; // 1103
      console.log(scrollTop);
      this.visible = top > 152;
      // if (this.visible) {
      //   if (top > 152 && top < 1103) {
      //     this.scrollClassName = "fixed_t";
      //   } else if (top > 1103) {
      //     this.scrollClassName = "fixed_b";
      //   }
      // } else {
      //   this.scrollClassName = "abs";
      // }
    }
  },
  components: {
    fCard
  }
};
</script>
<style lang="scss" scoped>
.job_left {
  width: 260px;
}
.abs {
  position: absolute;
  top: 40px;
  bottom: auto;
}
.fixed_t {
  position: fixed;
  top: 0;
  bottom: auto;
}
.fixed_b {
  position: absolute;
  top: auto;
  bottom: 0;
}
.job_l_menu {
  height: 340px;
}
.job_l_rss {
  height: 64px;
  color: #282828;
  padding: 18px 25px;
  font-size: 18px;
  & i {
    font-size: 30px;
    color: #cccccc;
  }
}
.job_l_kefu {
  height: 187px;
}
.job_l_qrcode {
  width: 260px;
  height: 222px;
  margin-top: 20px;
  padding: 18px;
}
.job_nav {
  width: 260px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  & span:hover {
    color: #ff8600;
    text-decoration: underline;
  }
}
</style>