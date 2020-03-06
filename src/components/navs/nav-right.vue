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
    <div class="nav_r_box">
      <img src="@/assets/images/user_default.jpg" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
.nav_r {
  position: relative;
  font-size: 24px;
  & .nav_r_box {
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
</style>