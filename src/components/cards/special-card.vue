<template>
  <div class="special_card noselec">
    <div class="card_img">
      <img src="@/assets/images/special_card1.jpg" alt />
    </div>
    <div class="card_info">
      <div class="card_info_t flex j_sb">
        <div>
          <p class="card_info_t_title">《南道不知道》</p>
          <p class="card_info_t_time">2020-01-16 – 2021-01-16</p>
        </div>
        <div class="card_info_t_status" :style="{background:bgColor}">{{timeText}}</div>
      </div>
      <div class="card_info_b flex_items j_sb">
        <div>
          <a-icon type="clock-circle" />
          <span>14天</span>
        </div>
        <div class="author_card_disc">
          <span>
            <a-icon type="picture" />123
          </span>
          <span>
            <a-icon type="picture" />666
          </span>
          <span>
            <a-icon type="picture" />5555
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeStatus: "in",
      timeText: "进行中",
      bgColor: "#ffba00",
      time: null,
      num: 0
    };
  },
  mounted() {
    if (this.time) {
      clearInterval(this.time);
    }
    this.time = setInterval(() => {
      this.setStatus();
    }, 1680);
  },
  methods: {
    setStatus: function() {
      this.num++;
      this.timeStatus === "in"
        ? (this.timeStatus = "over")
        : (this.timeStatus = "in");
      if (this.num % 3 === 0) {
        this.timeText = "已结束";
        this.bgColor = "#cccccc";
      } else if (this.num % 3 === 1) {
        this.timeText = "进行中";
        this.bgColor = "#ffba00";
      } else if (this.num % 3 === 2) {
        this.timeText = "距离截稿还有9999天";
        this.bgColor = "#ffba00";
      }
      if (this.numm > 34) {
        this.num = 0;
      }
    }
  },
  beforeDestroy() {
    if (this.time) {
      clearInterval(this.time);
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.special_card {
  width: 680px;
  border-radius: 4px;
  overflow: hidden;
}
.card_img {
  width: 100%;
  cursor: pointer;
  & img {
    width: 100%;
    height: 344px;
  }
}
.card_info {
  .card_info_t {
    padding: 20px;
    border-bottom: 1px solid #f2f2f2;
    & p {
      margin: 0;
    }
    .card_info_t_title {
      max-width: 440px;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
    }
    .card_info_t_time {
      color: #aaaaaa;
      font-size: 14px;
      padding-top: 14px;
    }
    .card_info_t_status {
      position: relative;
      height: 32px;
      line-height: 32px;
      padding: 0 20px;
      margin-right: -20px;
      color: #ffffff;
    }
    .card_info_t_status:before {
      content: "";
      display: block;
      position: absolute;
      border-right: none;
      border: 16px solid transparent;
      border-left: 10px solid #ffffff;
      left: 0;
    }
  }
  .card_info_b {
    padding: 20px;
    color: #aaa;
    font-size: 12px;
  }
}
.author_card_disc {
  color: #bbb;
  font-size: 12px;
  & span {
    margin-right: 10px;
    & i {
      margin-right: 5px;
    }
  }
}
</style>