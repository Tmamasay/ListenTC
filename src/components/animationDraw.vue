<template>
  <div>
    <!--mask-->
    <div class="drawer_screen" @click="powerDrawer" data-statu="close" v-if="showModalStatus"></div>
    <!--content-->
    <!--使用animation属性指定需要执行的动画-->
    <div :animation="animationData" class="drawer_attr_box" v-if="showModalStatus">
      <!--drawer content-->
      <div class="drawer_content">
        <div class="current-area">
          当前专区:
          <span class="selected-area">{{activeArea}}</span>
        </div>
        <div class="area-tags">
          <div
            v-for="(item,idx) in areaList"
            :key="idx"
            class="tags-btn"
            :class="{'active-area': activeArea == item.name}"
            @click="changeArea(item)"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModalStatus"],
  data() {
    return {
      animation: {},
      animationData: {},
      areaList: [
        { name: "全部" },
        { name: "重庆" },
        { name: "四川" },
        { name: "北京" },
        { name: "天津" },
        { name: "上海" }
      ],
      activeArea: "所有专区"
    };
  },
  mounted() {},
  onLoad() {},
  methods: {
    changeArea(item) {
      this.activeArea = item.name;
    },
    powerDrawer(e) {
      var currentStatu = e.currentTarget.dataset.statu;
      this.util(currentStatu);
    },
    util(currentStatu) {
      /* 动画部分 */
      // 第1步：创建动画实例
      var animation = wx.createAnimation({
        duration: 500, //动画时长
        timingFunction: "linear", //线性
        delay: 0, //0则不延迟0
        transformOrigin: "50% 50% 0"
      });

      // 第2步：这个动画实例赋给当前的动画实例
      this.animation = animation;

      // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
      if (currentStatu == "close") {
        this.animation.translateY(184).step();
      } else {
        this.animation.translateY(-184).step();
      }

      // 第4步：导出动画对象赋给数据对象储存
      this.animationData = animation.export();

      // 第5步：设置定时器到指定时候后，执行第二组动画
      setTimeout(
        function() {
          // 执行第二组动画：Y轴不偏移，停
          this.animation.translateY(0).step();
          // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
          this.animationData = this.animation;

          //关闭抽屉
          if (currentStatu == "close") {
            this.showModalStatus = false;
          }
        }.bind(this),
        0
      );

      // 显示抽屉
      if (currentStatu == "open") {
        this.showModalStatus = true;
      }
    }
  }
};
</script>

<style>
/*mask*/
.drawer_screen {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #000;
  opacity: 0.2;
  overflow: hidden;
}
/*content*/
.drawer_attr_box {
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background: #fff;
}
.drawer_content {
  padding: 10px 20px;
  height: 184px;
  overflow-y: scroll;
}
.current-area {
  height: 40px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(109, 109, 109, 1);
}
.selected-area {
  color: #222222;
}
.area-tags {
  display: grid;
  grid-template-columns: repeat(4, 81px);
  grid-gap: 10px;
}
.tags-btn {
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  background: rgba(245, 245, 245, 1);
  font-size: 12px;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
}
.active-area {
  background: rgba(243, 213, 98, 1);
}
</style>