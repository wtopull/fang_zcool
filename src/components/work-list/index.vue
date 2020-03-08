<template>
  <div class="work_card maxwh">
    <div class="card_img">
      <img :src="require(`@/assets/images/${item.img}.jpg`)" alt />
      <span class="card_mark_tip" v-if="!item.tx">正版图片</span>
    </div>
    <div class="card_author" v-if="showAuthor && item.tx">
      <div class="author_card_box">
        <div class="author_card_topbar flex_items j_sb">
          <div class="flex_items">
            <img :src="require(`@/assets/images/${item.tx}.jpg`)" alt />
            <div class="flex flex_column">
              <span class="author_card_title">{{item.username}}</span>
              <span class="author_card_position">{{item.author.disc}}</span>
            </div>
          </div>
          <div class="flex_a_j">
            <button class="flex_a_j">关注</button>
          </div>
        </div>
        <div class="author_card_products_box">
          <ul class="flex_items">
            <li v-for="(atx,atxIndex) in item.author.img" :key="atxIndex" @click="toProPath(atx)">
              <img :src="require(`@/assets/images/${atx.url}.jpg`)" alt />
            </li>
          </ul>
        </div>
        <div class="author_card_disc">
          <span>
            <a-icon type="picture" />
            {{item.author.view}}
          </span>
          <span>
            <a-icon type="picture" />
            {{item.author.comment}}
          </span>
          <span>
            <a-icon type="picture" />
            {{item.author.recommend}}
          </span>
        </div>
      </div>
    </div>
    <div class="card_info">
      <p class="card_info_title">{{item.title}}</p>
      <p class="card_info_type">{{item.type}}</p>
      <p class="card_info_item">
        <span v-if="item.view > 0">
          <a-icon type="eye" />
          {{item.view | mask}}
        </span>
        <span v-if="item.comment > 0">
          <a-icon type="message" />
          {{item.comment | mask}}
        </span>
        <span v-if="item.recommend > 0">
          <a-icon type="like" />
          {{item.recommend | mask}}
        </span>
      </p>
    </div>
    <div class="card_item flex_items j_sb">
      <p>
        <img
          :src="require(`@/assets/images/${item.tx}.jpg`)"
          alt
          v-if="item.tx"
          @mouseover="showAuthor = true"
          @mouseleave="showAuthor = false"
        />
        <span class="card_item_name">{{item.username}}</span>
      </p>
      <p class="card_item_time">{{item.time}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      showAuthor: false
    };
  },
  methods: {
    toProPath: function(item) {
      window.open(item.href);
    }
  },
  filters: {
    mask(value) {
      if (!value) return "";
      value = value.toString();
      return value > 9999 ? (value / 10000).toFixed(2) + "万" : value;
    }
  }
};
</script>
<style lang="scss" scoped>
.work_card {
  position: relative;
}
.card_author {
  position: absolute;
  left: 0;
  bottom: 50px;
  z-index: 14;
  width: 360px;
  height: 196px;
  padding: 20px;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
  .author_card_topbar {
    height: 40px;
    & img {
      width: 40px;
      height: 40px;
      border: none;
      margin-right: 10px;
      border-radius: 50%;
      overflow: hidden;
      object-fit: cover;
    }
    .author_card_title {
      max-width: 174px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #282828;
    }
    .author_card_position {
      font-size: 12px;
      color: #999;
      max-width: 184px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    button {
      width: 70px;
      height: 30px;
      color: #444;
      background: #ffe300;
      border: 1px solid #ffe300;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      color: #444;
      background: #ffd100;
      border: 1px solid #ffd100;
    }
  }
  .author_card_products_box {
    margin-top: 10px;
    height: 75px;
    & li {
      margin-right: 10px;
      background: #f2f2f2;
    }
    & li:last-child {
      margin-right: 0;
    }
    & img {
      width: 100px;
      height: 75px;
      border-radius: 4px;
      display: block;
    }
  }
  .author_card_disc {
    margin-top: 10px;
    color: #bbb;
    font-size: 12px;
    & span {
      margin-right: 10px;
    }
  }
}
.card_img {
  width: 100%;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 195px;
    cursor: pointer;
  }
  img:hover {
    opacity: 0.8;
  }
  .card_mark_tip {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    font-size: 12px;
    color: #fff;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    border-radius: 4px 0;
    background: rgba(0, 0, 0, 0.5);
  }
}
.card_info {
  border-bottom: 1px solid #eee;
  padding: 11px 16px 13px;
  height: 99px;
  position: relative;
  p {
    margin-bottom: 1px;
  }
  .card_info_title {
    height: 20px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  }
  .card_info_title:hover {
    color: #d36f16;
  }
  .card_info_type {
    font-size: 12px;
    color: #bbb;
    margin-bottom: 17px;
    height: 18px;
  }
  .card_info_item {
    font-size: 12px;
    color: #bbb;
    position: absolute;
    bottom: 14px;
    & span {
      margin-right: 10px;
      & i {
        margin-right: 5px;
      }
    }
  }
}
.card_item {
  height: 50px;
  line-height: 50px;
  padding: 0 16px;
  & p {
    margin-bottom: 0;
  }
  & img {
    border-radius: 50%;
    margin-right: 10px;
    width: 24px;
    height: 24px;
    border: none;
    vertical-align: middle;
  }
  .card_item_name {
    font-size: 12px;
    color: #333;
  }
  .card_item_time {
    font-size: 12px;
    color: #bbb;
  }
}
</style>