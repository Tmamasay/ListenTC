<template>
  <div class="voiceofchildren">
    <div class="areaBox">
      当前专区：
      <span class="current_area">所有专区</span>
    </div>
    <div class="list">
      <div class="item" @click="gotoDetail">
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
  methods: {
    gotoDetail() {
      console.log(11111);
      
      wx.navigateTo({
        url: `/pages/index/voiceofchildrendetail/main`
      });
    }},

  onShow() {}
};
</script>

<style>
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
.voiceofchildren{
  background-color: #F7F7F7;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
