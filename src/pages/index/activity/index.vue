<!--活动专区-->
<template>
  <div class="activitybox">
    <div class="areaBox">
      当前专区：
      <span class="current_area">所有专区</span>
    </div>
    <div class="actlist">
      <div class="act_item" @click="showDetail">
        <img class="baoming" src="../../../../static/images/index/baoming.png" alt />
        <img class="act_pic" src="https://www.dummyimage.com/355x85" alt />
        <div class="act_content">
          <div class="title">让阅读点亮孩子的智慧人生-【朗诵】</div>
          <div class="act_detail">
            <span>活动作品数：17</span>
            <span>
              报名人数：
              <em>32</em>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },
  mounted() {},
  onLoad() {},
  methods: {
    showDetail() {
        wx.navigateTo({
          url: `/pages/index/activity/detail/main` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
        });
    }
  },

  onShow() {}
};
</script>

<style>
.act_detail em {
  display: inline;
  color: #ff900e;
}
.act_detail span {
  font-size: 10px;
  line-height: 20px;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
}
.act_detail {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  line-height: 10px;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
}
.act_content {
  padding: 5px 10px;
  box-sizing: border-box;
}
.title {
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
}
.act_item {
  background-color: #fff;
  width: 100%;
  height: 225px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 16px;
}
.baoming {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -3px;
  margin-right: -3px;
}
.act_pic {
  display: block;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 170px;
}
.actlist {
  padding: 10px;
  box-sizing: border-box;
}
.activitybox {
  background-color: #f7f7f7;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
}
.areaBox {
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  font-weight: 400;
  padding: 0 10px;
  background-color: #fff;
  color: rgba(109, 109, 109, 1);
}
.current_area {
  color: #222222;
}
</style>
