<template>
  <div>
    <div class="title" @click="dianji">
      {{xz_value}}
      <span class="sjx"></span>
    </div>
    <!-- <div  v-if="isShow">
        <scroll-view  scroll-y="true" class="list">
        <p v-for="(item,index) in gradeLists" :key="index" @click="xuanzhi(item)">{{item.name}}</p>
        </scroll-view>
        
    </div>-->
    <i-drawer mode="left" i-class="motai" :visible="isShow" :mask-closable="false">
      <view class="demo-container">
        <!-- 禁止单击遮罩关闭
        <i-button bind:click="toggleLeft2" type="primary">关闭</i-button>-->
        <p v-for="(item,index) in gradeLists" :key="index" @click="xuanzhi(item)">{{item.name}}</p>
      </view>
    </i-drawer>
  </div>
</template>

<script>
import { setLevelCode, getLevelCode } from "@/utils/auth";
export default {
  props: ["gradeLists"],
  data() {
    return {
      isShow: false,
      xz_value: "请选择"
    };
  },
  onShow() {},
  onLoad() {
    this.initData();
  },
  methods: {
    dianji() {
      this.isShow = !this.isShow;
    },
    xuanzhi(e) {
      this.xz_value = e.name;
      setLevelCode(e.value);
      this.$emit("getLevelCode");
      this.isShow = false;
    },
    initData() {
      this.$nextTick(() => {
        this.gradeLists.forEach(e => {
          if (e.value === getLevelCode()) {
            this.xz_value = e.name;
          }
        });
      });
    }
  }
};
</script>

<style scoped>
.title {
  width: 250rpx;
  height: 50rpx;
  /* border:1px solid #aaa; */
  font-size: 14px;
  font-family: Microsoft YaHei;
  /* font-weight:bold; */
  color: rgba(67, 67, 67, 1);
  z-index: 999;
}
.sjx {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 10rpx solid transparent;
  border-right: 10rpx solid transparent;
  border-top: 10rpx solid #000;
  margin-left: 10rpx;
  vertical-align: middle;
}
.list {
  z-index: 999;
  width: 180rpx;
  height: 55px;
  margin-top: 5rpx;
  font-size: 14px;
  font-family: Microsoft YaHei;
  color: rgba(67, 67, 67, 1);
  /* border:1px solid #aaa; */
}
.motai {
  z-index: 999;
}
.demo-container {
  width: 140px;
  height: 100vh;
  background-color: #fff;
  padding-top: 10rpx;
  font-size: 13px;
  font-family: Microsoft YaHei;
  /* font-weight:bold; */
  color: rgba(67, 67, 67, 0.7);
  text-align: center;
}
</style>
