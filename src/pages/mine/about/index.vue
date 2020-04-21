<template>
  <div>
    <div class="topDetailImg">
      <img :src="resource.imageUrl" alt="" srcset="">
    </div>
    <p class="playTitle">{{resource.title}}</p>
    <div class="vp-book-adPlayer">
      <div class="adp-wrapper">
        <div class="apd-progress">
          <!-- <audio class="apd-pro-audio" src="{{music.src}}" action="{{audioAction}}" bindplay="audioPlayed" bindtimeupdate="audioTimeUpdated" controls></audio> -->
          <!-- 之前用的是audio标签，但是为了能够满足退出当前页面或者关闭小程序，音频仍需播放的需求，改成了背景音频-->
          <div class="apd-pro-start">{{currentSecond}}</div>
          <div class="apd-pro-sliderContain">
            <slider
              class="apd-pro-slider"
              :max="duration"
              :value="curSecond"
              @changing="stopSlider"
              @change="timeSliderChanged"
              selected-color="#FFDC4D"
              block-size="14"
              block-color="#FFDC4D"
              step="0.01"
            />
          </div>
          <div class="apd-pro-leave">{{currentLeave}}</div>
          <!-- <div class="apd-pro-timer">  
          </div>-->
        </div>
        <div class="apd-btn-box">
          <!-- 列表图标-->
          <img
            class="apd-btn-leave"
            src="../../../../static/images/play/incLeave.png"
            @tap="jumpAudioList"
          />
          <!-- 上一条图标-->
          <img
            :class="{'apd-btn-left':hasPre, 'apd-btn-no':!hasPre}"
            @tap="previousFun"
            src="../../../../static/images/play/incBack.png"
          />
          <!-- 暂停和播放图标-->
          <img
            class="playIcon"
            v-show="!isPlay"
            src="../../../../static/images/play/incStop.png"
            alt
            srcset
            @tap="playMusic()"
          />
          <img
            class="playIcon"
            v-show="isPlay"
            src="../../../../static/images/play/play.png"
            alt
            srcset
            @tap="playMusic()"
          />
          <!-- <image class="apd-btn-player" bindtap="ppAudio" :src="{isPlay ? '../../../static/images/play/incStop.png' : '../../../static/images/play/play.png'}"></image> -->
          <!-- 下一条图标-->
          <img
            :class="{'apd-btn-right':hasNxt , 'apd-btn-no':!hasNxt}"
            @tap="nextFun"
            src="../../../../static/images/play/incGo.png"/>
          <!-- 列表图标-->
          <picker class="picker" mode="selector" :range="musicList" range-key="title" :value="index" @change="bindPickerChange">
      <!-- <div class="picker">
        当前选择：{{objectArray[index].name}}
      </div> -->
       <img
            class="apd-btn-list"
            src="../../../../static/images/play/incList.png"
            @tap="jumpAudioList"
          />
    </picker>
         
        </div>
        <div class="dinyue">立即订阅</div>
        <div class="dinyContLin">
          <div class="dinyCont">
          <div class="dinyImg">
            <img :src="resource.imageUrl" alt="" srcset="">
          </div>
          <div class="dinyText">
            <p class="p1">{{resource.title}}</p>
            <p class="p2">{{resource.author}}</p>
          </div>  
          </div>
          <p class="dinyBtn">订阅</p> 
        </div>
   
          <div class="picker-container">
          
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment' // 时间日期转换 
import { formatMusic, _changeTimeBySecond } from "@/utils/index";
import { getMusicInfo ,getMusicList} from '@/utils/auth'

export default {
  components: {
    // card
  },

  data() {
    return {
      index:0,
      idx: 0, // 当前音频（第一个-上一条按钮不能点击，最后一条，下一条按钮不能点击）
      albumCode: "", // 当前音频标识
      opusName: "", // 当前专辑名字
      musicSrc: "",
      singler: "", // 当前作者
      audioMsg: {}, // 音频信息（作者，封面，名字--仅展示）
      opusSalt: "", // 当前音频id
      isEnd: false, // 最后一条音频结束时控制
      endVideoTime: "", // 最后一条音频时长
      
      isStop: false, // 是否停止音乐
      slideLen: 0, // 进度条初始值
      changeTime: 0, //变化时间
      music: {
        // 音频信息--用来处理数据
        start: "00:00",
        leave: "04:09",
        long: "",
        length: 4
      },
       rId: null, //课程的id--添加记录时需要
      curIndex: null, //音频当前下标
      media: null, //音频信息对象
      poster: '',  //音频海报
      imgUrl: '',  //多媒体公共路径
      currentSecond: '00:00', //页面所需当前播放的时间
      currentLeave: '', //页面所需当前播放的时间
      curSecond: 0, // 当前播放的秒数
      isPlay: false, // 是否暂停音乐
      duration: null,  //音频总时长
       musicList: [], // 用来存储音频列表，存储到本地，点击上一条、下一条音频时，不调用接口
      hasPre: true, // 是否有上一条音频
      hasNxt: true, // 是否有下一条音频
      isStopSlider: false, // 是否停止滚动条随着音频播放改变长度  -- 防止拖动滚动条时发生回退现象！！！

      perMusicMsg: {}, // 进入页面之后，就将上一条音频，下一条音频信息提取出来，方便直接点击按钮
      nxtMusicMsg: {}, // 同上
      
      appMusic: {},
      resource:{},//播放对象
      resourceId:'',//上次播放的id
      musicUrl:
        "https://webfs.yun.kugou.com/202003311620/24ed7eb189d547a933192d501716f13d/G192/M02/1F/17/AA4DAF6AfcOAJXQOADk7JNu4Cac793.mp3", //获取全局唯一的背景音频管理器
      topImg:''//顶部img
    };
  },
  created() {
    //获取全局唯一的背景音频管理器
    // this.appMusic = wx.getBackgroundAudioManager();
    // let key_token=this.$store.getters.user.token
  },
  onLoad() {
    // this.resourceId=getMusicInfo()
    this.resource = getMusicInfo();
    this.musicList=getMusicList()
    this.topImg=this.resource.imageUrl
    if(this.resourceId){
      if(this.resourceId!=this.resource.contentId){
      this.resourceId=this.resource.contentId
      this.watchAudio();
      }

    }else{
      // this.resource = getMusicInfo();
      this.resourceId=this.resource.contentId
      this.watchAudio();

    }
  
  console.log(this.resource)
  console.log('-------------------')
    // if(this.$store.getters.isPlayMusicId){

    // }else{
    //   this.watchAudio();  //初始化调用一次

    // }
     
  },
  methods: {
    bindPickerChange(event){
      this.resource = this.musicList[+event.mp.detail.value];
    console.log('picker发送选择改变，携带值为', event)

    },
     /**
      * 
   * !!! 解决滑动播放条时的卡顿问题 !!! --- start
   */
  // 禁止播放条随着音乐播放滚动
  stopSlider() {
    // 
     this.isStopSlider= true

  },
      // 上一首
  previousFun(){
    if (this.curIndex == 0) {
      wx.showToast({
        title: '这就是第一课哟~',
        icon: "none"
      })
      return;
    } else {
      this.curIndex-= 1;
      this.isPlay = true;
      // this.data.media = wx.getStorageSync('catalogList')[this.data.curIndex];
      this.resource = this.musicList[this.curIndex];
      this.curSecond = 0;
      this.currentSecond = this.format(0);
      // this.setData({
      //   media: this.data.media,
      //   playing: this.data.playing,
      //   curIndex: this.data.curIndex,
      //   curSecond: this.data.curSecond,
      //   currentSecond: this.data.currentSecond
      // })
      //重新调用音频
      this.appMusic.stop();
      this.watchAudio();
    }
  },

  // 下一首
  nextFun() {
    if (this.curIndex == this.musicList.length - 1) {
      wx.showToast({
        title: '这就是最后一课哟~',
        icon: "none"
      })
      return;
    } else {
      this.curIndex += 1;
      this.isPlay = true;
      this.resource = this.musicList[this.curIndex];
      this.curSecond = 0;
      this.currentSecond = this.format(0);
      // this.setData({
      //   media: this.data.media,
      //   playing: this.data.playing,
      //   curIndex: this.data.curIndex,
      //   curSecond: this.data.curSecond,
      //   currentSecond: this.data.currentSecond
      // })
      debugger
      //重新调用音频
       this.appMusic.stop();
      this.watchAudio();
    }
  },
      // 点击控件中间按键---播放/暂停
  playMusic () {
    if (!this.isPlay) {
      this.isPlay = true;
      this.appMusic.pause();
      return;
    } else {
      this.isPlay = false;
       if(!this.$store.getters.isPlayMusicId){
          this.watchAudio();  
        }
      this.appMusic.play();
      return;
    }
  },
    // 时间格式化
 format(t) {
  let time = Math.floor(t / 60) >= 10 ? Math.floor(t / 60) : '0' + Math.floor(t / 60)
  t = time + ':' + ((t % 60) / 100).toFixed(2).slice(-2)
  return t
},
    // 音频对象
 audio(media) {
    //获取全局唯一的背景音频管理器
    this.index=this.curIndex
    this.appMusic = wx.getBackgroundAudioManager();
    this.appMusic.startTime = 0;
    this.appMusic.src =this.resource.resourceUrl
    this.appMusic.title =this.resource.title;
    this.appMusic.coverImgUrl =this.resource.thumbnail;
    this.$store.dispatch('putMusicId',this.resource.contentId)
},
    // 监听audio
  watchAudio: function () {
    const that = this;
    that.audio(that.media);  //重新赋值音频对象
    //开始
    that.appMusic.onPlay(() => {
      that.isPlay=false
      // that.setData({
      //   playing: true
      // })
    })
    //停止
    that.appMusic.onStop(() => {
      that.isPlay=true
      that.$store.dispatch('putMusicId','')
      that.curSecond=0
     that.currentSecond='00:00'
      // that.setData({
      //   playing: false
      // })
    })
    //暂停
    that.appMusic.onPause(() => {
      that.isPlay=true
      // that.setData({
      //   playing: false
      // })
    })
    //播放进度
    that.appMusic.onTimeUpdate(() => {

      if(!that.isStopSlider) {
         that.duration = Math.ceil(that.appMusic.duration);
      that.currentSecond = that.format(that.appMusic.currentTime);
      that.currentLeave = that.format(that.appMusic.duration);
       that.curSecond = Math.ceil(that.appMusic.currentTime);
     
      }
    })
    //播放结束
    that.appMusic.onEnded(() => {
       that.isPlay=true
      // that.setData({
      //     playing: false
      // })
      that.nextFun();  //调用下一首
    })
    //播放错误
    that.appMusic.onError((res) => {
      wx.showToast({
        title: '错误:' + res.errMsg,
        icon: "none"
      })
    })
  },
    
    // 音频播放条改变 - 手动滑动滚动条停止
    timeSliderChanged: function(e) {
      this.isStopSlider= false
      
      var time=e.mp.detail.value
      // 
      // 音频跳转到指定位置
      this.appMusic.seek(time);
    },
  
    _getRegisterInfo() {
      let pageNum = this.pageNum;
      let pageSize = this.pageSize;
      wx.showLoading({
        title: "玩命加载中"
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
  onShow() {}
};
</script>

<style>
.topDetailImg {
  width: 100%;
  height: 256px;
  /* background-color: coral; */
}
.topDetailImg img{
  width: 100%;
  height: 100%;
}
.playTitle {
  /* width:230px;
height:36px; */
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  text-align: center;
  padding: 18px 0px;
  /* line-height: 36px; */
}
.apd-pro-sliderContain {
  width: 85%;
}
.apd-progress {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.apd-pro-start,
.apd-pro-leave {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(193, 193, 193, 1);
}
.apd-btn-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  margin: 30px auto 0 auto;
}
.apd-btn-left {
  width: 15px;
  height: 16px;
}
.apd-btn-no {
  width: 15px;
  height: 16px;
}
.apd-btn-right {
  width: 15px;
  height: 16px;
}
.apd-btn-no {
  width: 15px;
  height: 16px;
}
.apd-btn-leave {
  width: 15px;
  height: 15px;
}
.apd-btn-list {
  width: 15px;
  height: 15px;
}
.playIcon {
  width: 43px;
  height: 43px;
  /* background:rgba(255,255,255,0);
border-radius:50%; */
}
.dinyue{
  width:79%;
height:41px;
margin: 20px auto 50px auto;
background:rgba(255,217,72,1);
border-radius:41px 36px 36px 36px;
font-size:15px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(34,34,34,1);
text-align: center;
line-height: 41px;
}
.dinyContLin{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.dinyCont{
  display: flex;
  justify-content:flex-start;
  align-items: center;
}
.dinyImg{
  width: 50px;
  height: 46px;
  background:rgba(119,119,119,1);
  border-radius:10px;
  overflow: hidden;
 
}
.dinyImg img{
  width: 100%;
  height: 100%;
}
.p1{
  font-size:15px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(34,34,34,1);
}
.p2{
  font-size:12px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(34,34,34,1);
}
.dinyText{
  margin-left: 8px;
}
.dinyBtn{
  font-size:12px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(67,67,67,1);
line-height:48px;
}
</style>
