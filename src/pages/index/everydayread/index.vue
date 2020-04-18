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
          <div class="prtbox" :class="{'hoverItem':hovers}">
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
                <div class="introduction-btn" @click="hovers=!hovers">查看介绍</div>
              </div>
            </div>
            <div class="swiper-itme-after" @click="hovers=!hovers">
              <div class="read-content-back">
                <div class="stars-audio">
                  <div class="stars">
                    <img
                      class="stars-img"
                      src="../../../../static/images/index/star.png"
                      alt
                      v-for="(star,st) in item.level"
                      :key="st"
                    />
                    <img
                      class="stars-img"
                      src="../../../../static/images/index/star-grey.png"
                      alt
                      v-for="(grey,idx) in (item.maxLevel - item.level)"
                      :key="idx"
                    />
                  </div>
                  <div class="audio-container">
                    <img
                      class="audio-play"
                      src="../../../../static/images/index/inc-audio.png"
                      @click.stop="play"
                      v-if="!audio"
                    />
                    <img
                      class="audio-play"
                      src="../../../../static/images/index/bofang.png"
                      @click.stop="play"
                      v-else
                    />
                  </div>
                </div>
                <div class="detail-container">
                  <div class="title">{{item.title}}</div>
                  <div class="author">{{item.author}}</div>
                  <div class="main-content" v-html="item.content"></div>
                </div>
              </div>
              <div class="read-introduction">
                <div class="fun-btn" :class="{'active-btn':isFull}" @click.stop="isFull = true">全文</div>
                <div class="fun-btn" :class="{'active-btn':!isFull}" @click.stop="isFull = false">介绍</div>
              </div>
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
      hovers: false,
      poetry: [
        {
          audioUrl: "",
          author: "卓别林",
          content: "时间是一个伟大的作者，<br />它会给每个人写出完美的结局来。",
          contentId: 0,
          createTime: 0,
          level: 3,
          maxLevel: 6,
          recommendDate: "三月八日",
          recordAudioUrl: "",
          recordId: 0,
          resourceUrl: "",
          title: "世说新语"
        }
      ],
      back: false,
      front: true,
      isFull: false,
      greyStar: 0
    };
  },
  created() {
    this.getEveryDayRead();
  },
  onLoad() {},
  methods: {
    play() {
      this.audio = !this.audio;
    },
    reversal() {
      this.back = !this.back;
      this.front = !this.front;
    },
    getEveryDayRead() {
      this.greyStar = this.poetry.maxLevel - this.poetry.level;
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
.prtbox {
  width: 100%;
  height: 100%;
  perspective: 1200px;
  position: relative;
  transition: all 2s;
  transform-style: preserve-3d;
}
.prtbox.hoverItem {
  transition: all 2s;
  transform: rotateY(180deg);
}
.swiper-itme-after {
  border-radius: 5px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  position: relative;
  transform: rotateY(-180deg);
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 17px;
  box-sizing: border-box;
}

.swiper-item {
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 1px rgba(237, 237, 237, 0.06);
  margin: 0 5px;
  padding: 17px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  transform-style: preserve-3d;
  position: absolute;
  transform: rotateY(0deg);
  backface-visibility: hidden;
}
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
.read-content {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.read-content-back {
  height: 80%;
  width: 100%;
  /* display: flex;
  flex-direction: columns; */
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
.fun-btn {
  width: 80px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-family: "Microsoft YaHei";
  color: rgb(67, 67, 67);
}
.active-btn {
  background-color: rgb(255, 217, 72);
}
.stars {
  display: flex;
  flex-direction: row;
}
.stars-img {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
.stars-audio {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20px;
}
.stars-audio .audio-play {
  margin-top: 0;
}
.audio-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.detail-container {
  padding-top: 71px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.detail-container .author {
  width: 100%;
  margin: 18px auto 25px;
}
.main-content {
  line-height: 24px;
  letter-spacing: 1px;
}
</style>
