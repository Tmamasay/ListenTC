<template>
  <div>
    <div class="main-container">
      <swiper
        class="main-swiper"
        :duration="duration"
        :previous-margin="previousMargin"
        :next-margin="nextMargin"
        :circular="circular"
        @change="swiperChange"
      >
        <block v-for="(item,index) in poetry" :key="index">
          <swiper-item>
            <div class="prtbox" :class="{'hoverItem':hovers}">
              <div class="swiper-item" @click="getEveryDayReadContent(item)">
                <div class="read-content">
                  <div class="share-audio">
                    <button open-type="share" class="shareBtn" @click.stop>
                      <img class="share" src="../../../../static/images/index/inc-share.png" />
                    </button>
                    <img
                      class="audio-play"
                      src="../../../../static/images/index/inc-audio.png"
                      @click.stop="playMusic(item)"
                      v-if="!audioPlaying"
                    />
                    <img
                      class="audio-play"
                      src="../../../../static/images/index/bofang.png"
                      @click.stop="playMusic(item)"
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
                        @click.stop="playMusic(item)"
                        v-if="!audioPlaying"
                      />
                      <img
                        class="audio-play"
                        src="../../../../static/images/index/bofang.png"
                        @click.stop="playMusic(item)"
                        v-else
                      />
                      示范音
                    </div>
                  </div>
                  <div class="detail-container">
                    <div class="title">{{item.title}}</div>
                    <div class="author">{{item.author}}</div>
                    <div class="main-content" v-html="item.content" v-if="isFull"></div>
                    <div class="main-content" v-html="item.intro" v-if="!isFull"></div>
                  </div>
                </div>
                <div class="read-introduction">
                  <div class="fun-btn" :class="{'active-btn':isFull}" @click.stop="fullChange">全文</div>
                  <div class="fun-btn" :class="{'active-btn':!isFull}" @click.stop="fullChange">介绍</div>
                </div>
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div v-if="guideStep == 1">
      <div class="mask-step-1" v-if="guide"></div>
      <img class="left-arrow" src="../../../../static/images/index/left-arrow.png" alt />
      <img class="right-arrow" src="../../../../static/images/index/right-arrow.png" alt />
      <div class="guide-text-1">左右滑动查看今日剩余句子</div>
      <div class="guide-btn-1" @click.stop="nextStep">我知道了</div>
    </div>
    <div v-if="guideStep == 2">
      <div class="mask-step-2" v-if="guide"></div>
      <img class="top-arrow" src="../../../../static/images/index/top-arrow.png" alt />
      <div class="guide-text-2">
        点击按钮或者页面
        <br />都可以查看该句子的介绍和解读哟~
      </div>
      <div class="guide-btn-2" @click="complete">我知道了</div>
    </div>
  </div>
</template>

<script>
import { getUserId, getLevelCode } from "@/utils/auth";
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
      audioPlaying: false,
      hovers: false,
      poetry: [],
      back: false,
      front: true,
      isFull: true,
      greyStar: 0,
      guideStep: 1,
      guide: true
    };
  },
  onLoad() {},
  onShareAppMessage() {
    var that = this;
    return {
      title: `每日一读`,
      desc: `test`, // imageUrl:this.shareimg3,
      path: `pages/index/main`, // 路径，传递参数到指定页面。
      success: function(res) {
        // 转发成功之后的回调
        // that.sharekey = mpvue.getStorageSync('OtherToken')
        //   ? mpvue.getStorageSync('OtherToken')
        //   : mpvue.getStorageSync('Admin-Token')
        //  debugger

        wx.showToast({
          title: "转发成功",
          icon: "none",
          duration: 1000
        });
        console.log("转发成功，触发回调");
      }
    };
  },
  methods: {
    swiperChange() {
      this.front = true;
      this.back = false;
      this.isFull = true;
      this.audioPlaying = false;
      this.$store.dispatch("putMusicId", "");
    },
    fullChange() {
      this.isFull = !this.isFull;
      this.$store.dispatch("putMusicId", "");
    },
    nextStep() {
      this.guideStep = 2;
    },
    complete() {
      this.guideStep = 0;
    },
    reversal() {
      this.back = !this.back;
      this.front = !this.front;
    },
    getEveryDayReadStar() {
      this.greyStar = this.poetry.maxLevel - this.poetry.level;
    },
    //每日一读
    getEveryDayRead() {
      const params = {
        levelCode: getLevelCode(),
        userId: getUserId(),
        limit: 10
      };
      this.$api.tangy.everydayRead(params).then(res => {
        this.poetry = res.result.map(m => {
          m.content = m.content.replace(/\n/g, "<br>");
          return m;
        });
      });
    },
    //每日一读完整内容
    getEveryDayReadContent(item) {
      this.$store.dispatch("putMusicId", "");
      this.hovers = !this.hovers;
      const params = {
        contentId: item.contentId
      };
      this.$api.tangy.everydayReadContent(params).then(res => {
        console.log(res);
        item.intro = res.result.intro;
      });
    },
    playMusic(item) {
      if (this.audioPlaying) {
        this.audioPlaying = false;
        this.appMusic.pause();
        return;
      } else {
        this.audioPlaying = true;
        if (!this.$store.getters.isPlayMusicId) {
          this.watchAudio(item);
        }
        this.appMusic.play();
        return;
      }
    },
    // 音频对象
    audio(media) {
      //获取全局唯一的背景音频管理器
      this.appMusic = wx.getBackgroundAudioManager();
      this.appMusic.startTime = 0;
      if (!this.isFull) {
        this.appMusic.src = media.resourceUrl;
        this.appMusic.title = media.title;
        this.$store.dispatch("putMusicId", media.resourceUrl);
      } else {
        this.appMusic.title = media.title;
        this.appMusic.src = media.audioUrl;
        this.$store.dispatch("putMusicId", media.audioUrl);
      }
    },
    // 监听audio
    watchAudio: function(item) {
      const that = this;
      that.audio(item); //重新赋值音频对象
      //开始
      that.appMusic.onPlay(() => {
        that.audioPlaying = true;
        // that.setData({
        //   playing: true
        // })
      });
      //暂停
      that.appMusic.onPause(() => {
        that.audioPlaying = false;
        // that.setData({
        //   playing: false
        // })
      });

      //播放结束
      that.appMusic.onEnded(() => {
        that.audioPlaying = false;
        that.$store.dispatch("putMusicId", "");
      });
      //播放错误
      that.appMusic.onError(res => {
        wx.showToast({
          title: "错误:" + res.errMsg,
          icon: "none"
        });
      });
    }
  },
  onReachBottom() {
    console.log("触底了");
    this._getRegisterInfo();
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
  },
  onShow() {
    this.getEveryDayRead();
  }
};
</script>

<style>
.mask-step-1 {
  height: 0;
  width: 0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 5px;
  border: 1 solid #000;
  opacity: 0.6;
  box-shadow: 0 0 0 9000px #000;
  pointer-events: none;
}
.mask-step-2 {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: absolute;
  top: 95px;
  left: calc(50% - 43px);
  border: 1 solid #000;
  opacity: 0.6;
  box-shadow: 0 0 0 9000px #000;
  pointer-events: none;
}
.left-arrow,
.right-arrow {
  width: 49px;
  height: 25px;
}
.left-arrow {
  position: absolute;
  top: 40%;
  left: 77px;
}
.right-arrow {
  position: absolute;
  top: 40%;
  right: 77px;
}
.top-arrow {
  width: 25px;
  height: 49px;
  position: absolute;
  top: 180px;
  left: calc(50% - 18px);
}
.guide-text-1 {
  font-size: 14px;
  color: rgb(255, 255, 255);
  text-align: center;
  position: absolute;
  top: 50%;
  left: calc(50% - 90px);
}
.guide-text-2 {
  font-size: 14px;
  color: rgb(255, 255, 255);
  text-align: center;
  position: absolute;
  top: 266px;
  left: calc(50% - 108px);
}
.guide-btn-1 {
  font-size: 12px;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 217, 72);
  width: 75px;
  height: 28px;
  position: absolute;
  top: 58%;
  left: calc(50% - 38px);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.guide-btn-2 {
  font-size: 12px;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 217, 72);
  width: 75px;
  height: 28px;
  position: absolute;
  top: 338px;
  left: calc(50% - 38px);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
.shareBtn {
  background-color: #fff;
  margin: 0;
  padding: 0;
  text-align: left;
}
button.shareBtn:after {
  border: none;
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
  padding-right: 20px;
  box-sizing: border-box;
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
  font-size: 12px;
  color: rgb(90, 90, 90);
}
.audio-container .audio-play {
  margin-right: 5px;
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
