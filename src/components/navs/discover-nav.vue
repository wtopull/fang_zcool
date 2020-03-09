<template>
  <div class="mauto">
    <ul class="fx_list flex j_sb">
      <li
        class="fx_items"
        :class="{'active': itemIndex === index}"
        v-for="(item,index) in navs.discoverSubNavs"
        :key="index"
        @mouseover="itemIndex = index,showFxPop = true"
        @mouseleave="showFxPop = false"
      >
        <span class="fx_item_title">{{item.title}}</span>
        <div class="fx_pop_box">
          <div class="fx_pop" v-if="showFxPop&&itemIndex === index&&item.name !== 'custom'">
            <div class="mauto">
              <ul class="flex flex_column">
                <li class="flex" v-for="(sub,subIndex) in item.data" :key="subIndex">
                  <span class="fx_sub_label">{{sub.label}}</span>
                  <div>
                    <ul class="flex">
                      <li class="fx_sub_item" v-for="(kk,kkIndex) in sub.data" :key="kkIndex">
                        <span>{{kk.title}}</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="fx_pop noselec" v-if="showFxPop&&itemIndex === index&&item.name === 'custom'">
            <div class="mauto">
              <ul class="flex">
                <li v-for="(sub,subIndex) in item.data" :key="subIndex">
                  <div class="fx_pop_other" @click="sub.choose = !sub.choose">
                    <label :for="sub.name" :class="{'active': sub.choose}">
                      <input type="checkbox" :name="sub.name" />
                      {{sub.title}}
                    </label>
                  </div>
                </li>
              </ul>
              <div class="flex_a_j">
                <button class="flex_a_j">确定</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import navs from "@/assets/js/navs";
export default {
  data() {
    return {
      navs,
      itemIndex: 0,
      showFxPop: false
    };
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
.fx_list {
  padding-bottom: 12px;
}
.fx_items {
  height: 60px;
  line-height: 60px;
  flex: 1;
  cursor: pointer;
  .fx_item_title {
    padding: 4px 12px;
    margin-left: -12px;
  }
}
.fx_item_title:hover {
  background: #f2f2f2;
  border-radius: 4px;
}
.fx_items.active {
  .fx_item_title {
    color: #d36f16;
  }
}
.fx_pop_box {
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 14;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  .fx_pop {
    border-top: 1px solid #eee;
    padding: 16px 0;
    button {
      width: 108px;
      height: 34px;
      line-height: 34px;
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
  .fx_sub_label {
    color: #bbbbbb;
    font-size: 14px;
    width: 52px;
    height: 42px;
    line-height: 42px;
  }
}
.fx_sub_item {
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  text-align: center;
  padding: 0;
  margin-right: 10px;
  & span {
    color: #666666;
    padding: 4px 10px;
    border-radius: 4px;
  }
  & span:hover {
    background: #f2f2f2;
    border-radius: 4px;
  }
}
.fx_pop_other {
  label {
    margin-right: 20px;
    background: url("~@/assets/images/checkbox.svg") 0 2px no-repeat;
    cursor: pointer;
  }
  label.active {
    background: url("~@/assets/images/checkboxed.svg") 0 2px no-repeat;
    cursor: pointer;
  }
  input {
    opacity: 0;
    vertical-align: middle;
    cursor: pointer;
  }
}
</style>