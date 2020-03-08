<template>
  <div class="adv_long mauto" @click="toAdvLong">
    <img class="maxwh" :src="require(`@/assets/images/${advLongUrl.img}.jpg`)" alt />
  </div>
</template>
<script>
export default {
  props: ["advLongUrl"],
  data() {
    return {};
  },
  methods: {
    toAdvLong: function() {
      window.open(this.advLongUrl.href);
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.adv_long {
  margin-top: 30px;
  height: 115px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  & img {
    object-fit: cover;
  }
}
</style>