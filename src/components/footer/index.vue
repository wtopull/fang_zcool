<template>
  <div class="footer noselec">
    <div class="fotter_t mauto flex_items j_sb">
      <ul class="flex_items">
        <li v-for="(item,index) in menus" :key="index">{{item.title}}</li>
      </ul>
      <p>
        <a-icon type="wechat" />
        <a-icon type="weibo" />
      </p>
    </div>
    <div class="fotter_b mauto">
      <ul class="footer_wrapper_middle flex_items">
        <img src="@/assets/images/police.png" alt />
        <li v-for="(item,index) in disc1" :key="index">
          {{item}}
          <span v-if="index < disc1.length - 1">|</span>
        </li>
      </ul>
      <div class="footer_wrapper_bottom flex_items j_sb">
        <ul class="flex_items">
          <li v-for="(item,index) in disc2" :key="index">
            {{item}}
            <span v-if="index < disc2.length - 1">|</span>
          </li>
        </ul>
        <span>Copyright © 2006-2020 ******</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { title: "移动版", href: "" },
        { title: "关于我们", href: "" },
        { title: "加入站酷", href: "" },
        { title: "用户协议", href: "" },
        { title: "隐私政策", href: "" },
        { title: "侵权申诉", href: "" },
        { title: "帮助中心", href: "" },
        { title: "联系我们", href: "" },
        { title: "中文", href: "" },
        { title: "English", href: "" }
      ],
      disc1: [
        "京公网安备**********号",
        "********经营许可证（*）字第*****号",
        "*ICP备110*****号",
        "*ICP证13****号"
      ],
      disc2: [
        "营业执照",
        "网上有害信息举报专区",
        "不良信息举报电话：010-*******",
        "举报邮箱  *****@***.com",
        "联系电话：010-*******"
      ]
    };
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 229px;
  background: #282828;
  color: #666;
  font-size: 14px;
}
.fotter_t {
  height: 130px;
  border-bottom: 1px solid #333333;
  cursor: pointer;
  & li {
    margin-right: 38px;
  }
  & li:hover {
    color: #999999;
  }
  & p {
    margin-bottom: 0;
    & i {
      margin-left: 40px;
      font-size: 26px;
    }
  }
}
.fotter_b {
  font-size: 12px;
  .footer_wrapper_middle {
    margin-top: 20px;
    line-height: 21px;
    cursor: pointer;
    & img {
      margin-right: 5px;
      margin-top: -2px;
    }
    & li span {
      margin: 0 20px;
    }
    & li:hover {
      color: #999999;
    }
  }
  .footer_wrapper_bottom {
    margin-top: 10px;
    line-height: 21px;
    & li span {
      margin: 0 20px;
    }
  }
}
</style>