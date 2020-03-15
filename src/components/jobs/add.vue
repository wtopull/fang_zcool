<template>
  <div class="add mt_20 noselec flex_a_j" @click="setScrollTop">加载更多</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    setScrollTop: function() {
      this.$emit("setScrollTop");
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.add {
  background-color: #ffe300;
  height: 40px;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  color: #444;
  &:hover {
    background: #ffd100;
  }
}
</style>