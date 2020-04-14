<template>
  <div class="main-container">
    <swiper
      class="main-swiper"
      :duration="duration"
      :previous-margin="previousMargin"
      :next-margin="nextMargin"
      :circular="circular"
    >
      <block v-for="(item,index) in poetry" :key="index">
        <swiper-item>
          <div class="swiper-item">
            <div class="read-content">
              <div class="share-audio">
                <img class="share" src="../../../../static/images/index/inc-share.png" />
                <img
                  class="audio-play"
                  src="../../../../static/images/index/inc-audio.png"
                  @click="play"
                  v-if="!audio"
                />
                <img
                  class="audio-play"
                  src="../../../../static/images/index/bofang.png"
                  @click="play"
                  v-else
                />
              </div>
              <div class="author">
                <img class="author-line" src="../../../../static/images/index/author-line.png" />
                {{item.author}}
              </div>
              <div class="poetry-box">
                <div class="poetry" v-html="item.content"></div>
              </div>
              <div class="date">{{item.date}}</div>
            </div>
            <div class="read-introduction">
              <div class="introduction-btn">查看介绍</div>
            </div>
          </div>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      background: ["demo-text-1", "demo-text-2", "demo-text-3"],
      circular: true,
      vertical: false,
      duration: 500,
      previousMargin: "10px",
      nextMargin: "10px",
      audio: false,
      poetry: [
        {
          date: "三月八日",
          content: "时间是一个伟大的作者，<br />它会给每个人写出完美的结局来。",
          author: "卓别林"
        }
      ]
    };
  },
  created() {},
  onLoad() {},
  methods: {
    play() {
      this.audio = !this.audio;
    }
  },
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
.main-swiper {
  padding: 20px 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.swiper-item {
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 1px rgba(237, 237, 237, 0.06);
  border-radius: 5px;
  margin: 0 5px;
  padding: 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.read-content {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.share-audio {
  width: 28px;
  display: flex;
  flex-direction: column;
}
.share {
  width: 16px;
  height: 16px;
}
.audio-play {
  margin-top: 26px;
  width: 16px;
  height: 16px;
}
.author {
  width: 14px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  word-break: break-all;
  color: #5a5a5a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 32px;
}
.author-line {
  width: 2px;
  height: 33px;
}
.poetry-box {
  flex: 1;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(67, 67, 67, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.poetry {
  writing-mode: vertical-rl;
  writing-mode: tb-lr;
  letter-spacing: 0.2em;
  line-height: 30px;
}
.date {
  width: 14px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(90, 90, 90, 1);
  word-break: break-all;
}
.read-introduction {
  border-top: 1px solid rgba(221, 219, 222, 1);
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.introduction-btn {
  width: 64px;
  height: 64px;
  background: rgba(255, 217, 72, 1);
  border-radius: 50%;
  box-shadow: 0px 0px 9px 2px rgba(33, 22, 19, 0.06);
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
