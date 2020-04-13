<template>
  <div class="main-container">
    <div class="user-info">
      <div class="user-avterImg">
        <img src="https://www.dummyimage.com/120x120" />
      </div>
      <div class="user-detail">
        <div class="detail-top">
          <div class="user-name">杨子轩</div>
          <div class="user-group">重庆专区-小学组</div>
        </div>
        <div class="detail-bottom">
          <div class="user-address">中华路小学</div>
          <div class="user-score">
            专家评分:
            <span class="score">198分</span>
          </div>
        </div>
      </div>
    </div>
    <div class="essay-container">
      <div class="essay-title">
        <img class="zuzi" src="../../../../../static/images/index/zuzi.png" />
        征文标题:红旗飘飘，引我成长
      </div>
      <div class="essay-content">
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
        我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲我的父亲
      </div>
    </div>
    <div class="function-area">
      <div class="play-count">
        <img class="views" src="../../../../../static/images/index/inc-views.png" />
        浏览次数:
        <span class="play-times">267</span>
      </div>
      <div class="line"></div>
      <div class="like-count">
        <img class="like" src="../../../../../static/images/index/dianzhan_red.png" />
        点赞:
        <span class="like-times">69</span>
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
  created() {},
  onLoad() {},
  methods: {},
  onReachBottom() {
    console.log("触底了");
    this._getRegisterInfo();
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
  },
  onShow() {}
};
</script>

<style>
.main-container {
  overflow: scroll;
  background-color: #f7f7f7;
  height: 100vh;
}
.user-info {
  height: 95px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.user-avterImg {
  width: 88px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-avterImg img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.user-detail {
  flex: 1;
  padding-right: 14px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.detail-top {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex: 1;
  padding-bottom: 5px;
}
.user-name {
  margin-right: 5px;
  width: 46px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.user-group {
  width: 95px;
  height: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
  background: rgba(255, 217, 72, 1);
  border-radius: 10px;
  font-size: 10px;
  line-height: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.detail-bottom {
  flex: 1;
  padding-top: 5px;
  display: flex;
  flex-direction: row;
}
.user-address {
  flex: 1;
  color: #8e8e8e;
  font-size: 12px;
  font-weight: 400;
}
.user-score {
  font-family: Microsoft YaHei;
  font-weight: 400;
  font-size: 10px;
  color: #8e8e8e;
}
.score {
  font-size: 12px;
  color: #fe5e5e;
}
.essay-container {
  background-color: #f7f7f7;
  padding: 20px 10px 123px 10px;
}
.essay-title {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
  display: flex;
  align-items: center;
}
.zuzi {
  width: 4px;
  height: 19px;
  margin-right: 8px;
}
.essay-content {
  background-color: #ffffff;
  margin-top: 20px;
  padding: 10px 40px 20px;
  box-shadow: 0px 0px 5px 1px rgba(33, 22, 19, 0.06);
  border-radius: 5px;
  box-sizing: border-box;
  text-indent: 2em;
  text-align: justify;
}
.function-area {
  width: 100%;
  height: 48px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px 1px rgba(33, 22, 19, 0.2);
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
}
.play-count {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.like-count {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.line {
  width: 1px;
  height: 39px;
  border-left: 1px dashed rgba(220, 220, 220, 1);
}
.play-times {
  color: #ffa800;
}
.like-times {
  color: #fe5e5e;
}
.views {
  width: 19px;
  height: 12px;
  margin-right: 7px;
}
.like {
  width: 14px;
  height: 14px;
  margin-right: 7px;
}
.like-times,
.play-times {
  margin-left: 5px;
}
</style>
