<template>
  <div class="slider mauto" @mouseover="setSlider(1)" @mouseleave="setSlider(2)">
    <ul class="slider_list flex" ref="slider_list" :style="{left:left+'px'}">
      <li class="slider_item" v-for="(item,index) in lists" :key="index">
        <a class="flex_a_j" href="javascript:void(0);">
          <img :src="item.name" alt />
        </a>
      </li>
    </ul>
    <p
      class="slider_btn slider_btn_l flex_a_j"
      :class="{active:btnText === 'left'}"
      @mouseover="btnText = 'left'"
      @mouseleave="btnText = ''"
      v-show="showBtn"
      @click="setBtnLeft"
    >
      <a-icon type="left" />
    </p>
    <p
      class="slider_btn slider_btn_r flex_a_j"
      :class="{active:btnText === 'right'}"
      @mouseover="btnText = 'right'"
      @mouseleave="btnText = ''"
      v-show="showBtn"
      @click="setBtnRight"
    >
      <a-icon type="right" />
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnText: "",
      showBtn: false,
      sliderTime: null,
      num: 0,
      left: 0,
      lists: [
        { name: require("@/assets/images/banner1.jpg"), url: "" },
        { name: require("@/assets/images/banner2.png"), url: "" },
        { name: require("@/assets/images/banner3.jpg"), url: "" }
      ]
    };
  },
  mounted() {
    clearInterval(this.sliderTime);
    this.setLeft();
  },
  methods: {
    // 滑过暂停
    setSlider: function(n) {
      if (n === 1) {
        this.showBtn = true;
        clearInterval(this.sliderTime);
      } else if (n === 2) {
        this.showBtn = false;
        this.setLeft();
      }
    },
    // 自动轮播
    setLeft: function() {
      this.num = 0;
      let width = this.$refs.slider_list.offsetWidth / this.lists.length;
      this.sliderTime = setInterval(() => {
        this.num++;
        if (this.num === this.lists.length) {
          clearInterval(this.sliderTime);
          this.num = 0;
          this.left = -this.num * width;
          this.setLeft();
        } else if (this.num <= this.lists.length) {
          this.left = -this.num * width;
        }
      }, 2800);
    },
    // 左边点击事件
    setBtnLeft: function() {
      let width = this.$refs.slider_list.offsetWidth / this.lists.length;
      if (this.num === 0) {
        this.num = this.lists.length - 1;
      } else {
        this.num--;
      }
      this.left = -this.num * width;
    },
    // 右边点击事件
    setBtnRight: function() {
      let width = this.$refs.slider_list.offsetWidth / this.lists.length;
      this.num++;
      if (this.num === this.lists.length) {
        this.num = 0;
      }
      this.left = -this.num * width;
    }
  },
  beforeDestroy() {
    clearInterval(this.sliderTime);
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.slider {
  border-radius: 4px;
  height: 286px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  background-color: #f4f4f4;
  .slider_list {
    position: absolute;
  }
  & img {
    width: 1380px;
    height: 286px;
  }
}
.slider_btn {
  position: absolute;
  top: 50%;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  margin-top: -31px;
  color: #ffffff;
  background-color: rgba($color: #000000, $alpha: 0.5);
  transition: all 0.3s ease-in-out;
}
.slider_btn.active {
  color: #ffe300;
}
.slider_btn_l {
  left: 36px;
}
.slider_btn_r {
  right: 36px;
}
</style>