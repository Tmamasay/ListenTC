<template>
  <div class="voiceofchildren">
    <div class="videoBox">
      <video src="http://qiniu-xpc11.vmoviercdn.com/598afd3f62e17.mp4" controls="controls"></video>
    </div>
    <div class="videoInfo">
      <div class="v_content">
        <span>段志文</span>
        <div class="dianzhan active">
          <img class="reddz" src="../../../../static/images/index/dianzhan_red.png" alt />
          533
        </div>
      </div>
      <p class="v_text">
        作品:《拥抱未来》-小学组特等奖
        <br />学校：湖南省娄底市新化县思源实验小学
      </p>
    </div>

    <div class="titlebox">
      <div
        class="title_text"
        style="background-image:url(../../../static/images/index/zuzi.png)"
      >其他人的作品</div>
    </div>
    <div class="list">
      <div class="item">
        <div class="item_img">
          <img class="content_img" src="https://www.dummyimage.com/170x94" alt />
          <div
            class="left_top"
            style="background-image:url(../../../../static/images/index/memo.png)"
          >
            <img class="herji" src="../../../../static/images/index/herji.png" alt />
            2997
          </div>
          <img class="right_bottom" src="../../../../static/images/index/bf.png" alt />
        </div>
        <div class="item_content">
          <div class="item_title">《沉醉在黄河故道的风沉醉在黄河故道的风</div>
          <div class="flbb">
            <div class="item_people">朗读者：王海峰</div>
            <div class="dianzhan active">
              <img class="reddz" src="../../../../static/images/index/dianzhan_red.png" alt />
              533
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img class="content_img" src="https://www.dummyimage.com/170x94" alt />
          <div
            class="left_top"
            style="background-image:url(../../../../static/images/index/memo.png)"
          >
            <img class="herji" src="../../../../static/images/index/herji.png" alt />
            2997
          </div>
          <img class="right_bottom" src="../../../../static/images/index/bf.png" alt />
        </div>
        <div class="item_content">
          <div class="item_title">《沉醉在黄河故道的风沉醉在黄河故道的风</div>
          <div class="flbb">
            <div class="item_people">朗读者：王海峰</div>
            <div class="dianzhan">
              <img class="reddz" src="../../../../static/images/index/dianzhan.png" alt />
              533
            </div>
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
  methods: {},

  onShow() {}
};
</script>

<style>
.videoInfo {
  padding: 12px;
  box-sizing: border-box;
  height: 90px;
  background-color: #fff;
}

.v_text {
  padding: 5px 0;
  font-size: 11px;
  font-weight: 400;
  color: rgba(124, 124, 124, 1);
  line-height: 20px;
}
.v_content {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
}
.v_content em {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
}
.videoBox {
  width: 100%;
  height: 255px;
}
.videoBox video {
  width: 100%;
  height: 100%;
}
.titlebox {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.title_text {
  background: no-repeat left center;
  background-size: 4px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(48, 48, 48, 1);
  line-height: 19px;
  padding-left: 13px;
}
.dianzhan {
  font-size: 12px;
  color: rgba(145, 145, 145, 1);
}
.dianzhan.active {
  color: #fe5e5e;
}
.reddz {
  width: 12px;
  height: 12px;
}
.flbb {
  display: flex;
  line-height: 20px;
  justify-content: space-between;
}
.item_content {
  padding: 8px;
  box-sizing: border-box;
}
.item_people {
  font-size: 10px;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
}
.item_title {
  font-size: 13px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.herji {
  width: 11px;
  height: 10px;
}
.item_img {
  width: 100%;
  height: 94px;
  position: relative;
}
.content_img {
  width: 100%;
  height: 100%;
}
.left_top {
  display: block;
  width: 55px;
  height: 18px;
  position: absolute;
  left: 0;
  margin-left: -4px;
  text-align: center;
  top: 5px;
  z-index: 1;
  background: no-repeat center center;
  background-size: cover;
  font-size: 10px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(67, 67, 67, 1);
}
.right_bottom {
  display: block;
  width: 21px;
  height: 21px;
  position: absolute;
  right: 7px;
  bottom: 7px;
  z-index: 1;
}
.list {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 170px;
  height: 155px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 20px;
}
.voiceofchildren {
  background-color: #f7f7f7;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
}
</style>
