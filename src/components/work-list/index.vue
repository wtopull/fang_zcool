<template>
  <div class="work_card">
    <div class="card_img">
      <img src="static/images/along_pro.jpg" alt />
      <!-- <img :src="`@/assets/images/${item.img}.jpg`" alt /> -->
    </div>
    <div>{{item.title}}</div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.card_img {
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 195px;
  }
}
</style>