<template>
  <ul class="flex_items j_sb">
    <li class="adv_items" v-for="(item,index) in lists" :key="index" @click="toPath(item)">
      <img class="maxwh" :src="item.img" alt />
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          url:
            "https://www.zcoolip.com/registration?utm_campaign=固定广告位&utm_medium=线上&utm_source=站酷&utm_content=快速登记你的作品&utm_term=版权登记页面&gio_link_id=WoMNwLY9",
          img: require("@/assets/images/zczc.jpg")
        },
        {
          url:
            "https://www.gogoup.com/course/GNTI5?utm_source=zcool&utm_medium=index_01&utm_campaign=course_live&utm_content=529&utm_term=design",
          img: require("@/assets/images/gogos.jpg")
        },
        {
          url:
            "https://www.hellorf.com/image/album/1681/?utm_source=zcool&utm_medium=index&utm_campaign=index5&utm_content=inspiration&utm_term=1681",
          img: require("@/assets/images/hail.jpg")
        },
        {
          url:
            "https://www.hellorf.com/image/invention/16/?utm_source=zcool&utm_medium=index&utm_campaign=index5&utm_content=innovation&utm_term=img-16",
          img: require("@/assets/images/mask.jpg")
        },
        {
          url:
            "https://www.hellorf.com/image/album/1681/?utm_source=zcool&utm_medium=index&utm_campaign=index5&utm_content=inspiration&utm_term=1681",
          img: require("@/assets/images/hail.jpg")
        }
      ]
    };
  },
  mounted() {},
  methods: {
    toPath: function(item) {
      window.open(item.url);
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.adv_items {
  width: 260px;
  height: 210px;
  overflow: hidden;
  margin-right: 20px;
  border-radius: 4px;
  background: #f4f4f4;
  cursor: pointer;
}
.adv_items:last-child {
  margin-right: 0;
}
</style>