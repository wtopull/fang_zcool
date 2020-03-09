<template>
  <div class="designer_card flex j_sb">
    <div class="card_left flex">
      <div class="card_left__img">
        <img src="@/assets/images/along.jpg" alt />
      </div>
      <div class="card_left_info flex flex_column">
        <p class="info_username">阿尨</p>
        <p class="info_type">深圳 | 插画师</p>
        <p class="info_works">
          创作
          <span>93</span> |
          <span>12912</span>粉丝
        </p>
        <p class="info_signature">公众号：a_long_72 淘宝店：滚货铺</p>
        <!-- <button class="focus_n">关注</button> -->
        <button class="focus_y">已关注</button>
      </div>
    </div>
    <div class="card_right flex_items">
      <ul class="flex_items">
        <li>
          <!-- <img :src="require(`@/assets/images/${advLongUrl.img}.jpg`)" alt=""> -->
          <img src="@/assets/images/along_pro.jpg" alt />
        </li>
        <li>
          <img src="@/assets/images/along_pro2.jpg" alt />
        </li>
        <li>
          <img src="@/assets/images/along_pro3.jpg" alt />
        </li>
        <li>
          <img src="@/assets/images/along_pro4.jpg" alt />
        </li>
      </ul>
      <div class="seize_box flex_a_j">
        <a-icon type="ellipsis" />
      </div>
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
.card_left {
  & .card_left__img {
    img {
      width: 80px;
      height: 80px;
      border: none;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  & .card_left_info {
    margin-left: 20px;
    & .info_username {
      margin-bottom: 2px;
      color: #333;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
    & .info_username:hover {
      color: #d36f16;
    }
    & .info_type {
      margin-bottom: 12px;
      font-size: 12px;
      color: #bbb;
    }
    & .info_works {
      font-size: 14px;
      color: #666;
      margin-bottom: 0px;
      & span {
        font-weight: 600;
        color: #333;
        cursor: pointer;
      }
      & span:hover {
        color: #d36f16;
      }
    }
    & .info_signature {
      margin-top: 2px;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 12px;
      color: #bbb;
      width: 220px;
    }
    & button {
      margin-top: 15px;
      width: 100px;
      height: 36px;
      border-radius: 4px;
      cursor: pointer;
    }
    & button.focus_n {
      color: #444;
      background: #ffe300;
      border: 1px solid #ffe300;
    }
    & button.focus_n:hover {
      color: #444;
      background: #ffd100;
      border: 1px solid #ffd100;
    }
    & button.focus_y {
      color: #666;
      background: 0 0;
      border: 1px solid #bbb;
      border-radius: 4px;
      cursor: pointer;
    }
    & button.focus_y:hover {
      color: #444;
      background: 0 0;
      border: 1px solid #999;
    }
  }
}
.card_right {
  & li {
    margin-right: 10px;
    cursor: pointer;
  }
  & li:last-child {
    margin-right: 0;
  }
  & img {
    width: 200px;
    height: 160px;
  }
  & img:hover {
    opacity: 0.8;
  }
}
.seize_box {
  width: 26px;
  height: 160px;
  margin-left: 20px;
  margin-right: -10px;
  cursor: pointer;
  & i {
    font-size: 44px;
    font-weight: 700;
    color: #ffd100;
    transform: rotate(90deg);
  }
  & i:hover {
    color: #444;
  }
}
</style>