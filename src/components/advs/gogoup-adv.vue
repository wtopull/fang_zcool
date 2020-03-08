<template>
  <div class="gogoup_adv mauto">
    <div class="flex_items j_sb">
      <span class="gogoup_adv_medium_title">推荐课程</span>
      <span class="gogoup_adv_switch" @click="switchList">换一换</span>
    </div>
    <div class="gogoup_card_box">
      <ul class="flex_items" v-show="isLoading">
        <li v-for="item in 5" :key="item"></li>
      </ul>
      <ul class="flex_items" v-show="!isLoading">
        <li
          class="flex flex_column"
          v-for="(item,index) in filtrateLists"
          :key="index"
          @click="toPath(item)"
        >
          <img :src="require(`@/assets/images/${item.img}.jpg`)" alt />
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import gogoupLists from "@/assets/js/gogoupLists";
export default {
  data() {
    return {
      isLoading: false,
      filtrateLists: []
    };
  },
  mounted() {
    this.filtrateLists = gogoupLists.slice(0, 5);
  },
  methods: {
    // 这里采用数组随机打乱
    switchList: function() {
      this.filtrateLists = [];
      this.isLoading = true;
      setTimeout(() => {
        this.filtrateLists = gogoupLists
          .sort(function() {
            return 0.4 - Math.random();
          })
          .slice(0, 5);
        this.isLoading = false;
      }, 1200);
    },
    toPath: function(item) {
      window.open(item.href);
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.gogoup_adv {
  margin-top: 10px;
  .gogoup_adv_medium_title {
    font-size: 14px;
    color: #666;
  }
  .gogoup_adv_switch {
    color: #d36f16;
    cursor: pointer;
  }
}
.gogoup_card_box {
  margin-top: 16px;
  height: 196px;
  & li {
    width: 260px;
    height: 196px;
    margin-right: 20px;
    border-radius: 4px;
    overflow: hidden;
    background: #ffffff;
    cursor: pointer;
    & img {
      width: 260px;
      height: 146px;
    }
    & img:hover {
      opacity: 0.8;
    }
    & span {
      display: inline-block;
      width: 100%;
      padding: 8px 10px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    & span:hover {
      color: #d36f16;
    }
  }
  & li:last-child {
    margin-right: 0;
  }
}
</style>