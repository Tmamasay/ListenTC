<template>
  <div>
    <div class="topDetailImg"></div>
    <p class="playTitle">向上吧 小书包</p>
       <div class="vp-book-adPlayer">
        <div class="adp-wrapper">
            <div class="apd-progress">
                <!-- <audio class="apd-pro-audio" src="{{music.src}}" action="{{audioAction}}" bindplay="audioPlayed" bindtimeupdate="audioTimeUpdated" controls></audio> -->
                <!-- 之前用的是audio标签，但是为了能够满足退出当前页面或者关闭小程序，音频仍需播放的需求，改成了背景音频-->
               <div class="apd-pro-start">{{music.start}}</div>
               <div class="apd-pro-sliderContain">
                <slider class="apd-pro-slider" :value="slideLen" @changing="stopSlider" @change="timeSliderChanged" selected-color="#FFDC4D" block-size="12" block-color="#FFDC4D" step="0.01"/>
                </div>
               <div class="apd-pro-leave">{{music.leave}}</div>
                <!-- <div class="apd-pro-timer">  
                </div> -->
            </div>
            <div class="apd-btn-box">
                <!-- 列表图标-->
                <img class="apd-btn-leave" src="../../../../static/images/play/incLeave.png" @tap="jumpAudioList">
                <!-- 上一条图标-->
                <img :class="{'apd-btn-left':hasPre, 'apd-btn-no':!hasPre}" @tap="playPer" src="../../../../static/images/play/incBack.png">
                <!-- 暂停和播放图标-->
                <img class="playIcon" v-show="!isPlay" src="../../../../static/images/play/incStop.png" alt="" srcset="" @tap="playMusic()">
                <img class="playIcon" v-show="isPlay" src="../../../../static/images/play/play.png" alt="" srcset="" @tap="playMusic()">
                <!-- <image class="apd-btn-player" bindtap="ppAudio" :src="{isPlay ? '../../../static/images/play/incStop.png' : '../../../static/images/play/play.png'}"></image> -->
                <!-- 下一条图标-->
                <img :class="{'apd-btn-right':hasNxt , 'apd-btn-no':!hasNxt}" @tap="playNxt" src="../../../../static/images/play/incGo.png">
                <!-- 列表图标-->
                <img class="apd-btn-list" src="../../../../static/images/play/incList.png" @tap="jumpAudioList">
            </div>
        </div>
   
     </div>
  </div>
</template>

<script>
// import moment from 'moment' // 时间日期转换
import { formatMusic,_changeTimeBySecond } from '@/utils/index'

export default {
  components: {
    // card
  },

  data() {
    return {
      isTry: null,  // 是否是试听状态
    idx: 0, // 当前音频（第一个-上一条按钮不能点击，最后一条，下一条按钮不能点击）
    albumCode: '',  // 当前音频标识
    opusName: '',  // 当前专辑名字
    musicSrc: '',  
    singler: '',  // 当前作者
    audioMsg: {},  // 音频信息（作者，封面，名字--仅展示）
    opusSalt: '',  // 当前音频id
    isEnd: false, // 最后一条音频结束时控制
    endVideoTime: '', // 最后一条音频时长
    isPlay: false,  // 是否暂停音乐
    isStop: false,  // 是否停止音乐
    slideLen: 0, // 进度条初始值
    changeTime:0,//变化时间
    music: {  // 音频信息--用来处理数据
      start: '00:00',
      leave:'04:30',
      long: '',
      length: 4
    },
    hasPre: true,  // 是否有上一条音频
    hasNxt: true,  // 是否有下一条音频
    musicList: [], // 用来存储音频列表，存储到本地，点击上一条、下一条音频时，不调用接口
    perMusicMsg: {},  // 进入页面之后，就将上一条音频，下一条音频信息提取出来，方便直接点击按钮
    nxtMusicMsg: {},  // 同上
    isStopSlider: false,  // 是否停止滚动条随着音频播放改变长度  -- 防止拖动滚动条时发生回退现象！！！
     appMusic:{}  ,
     musicUrl:'https://sharefs.yun.kugou.com/202003201055/511111db9007f14dc66b2586cbf0216a/G001/M03/0E/11/oYYBAFS1lfaAKP1fAEfZI2urw2Y148.mp3'      //获取全局唯一的背景音频管理器
    }
   


  },
  created() {
    //获取全局唯一的背景音频管理器
    this.appMusic=wx.getBackgroundAudioManager();
    // let key_token=this.$store.getters.user.token
  },
  onLoad(){
    const that=this
    this.appMusic.startTime ='20'
    this.appMusic.src = 'https://webfs.cloud.kugou.com/202003212120/a5a2a86ffa1d8e753870b40429197876/G198/M04/09/11/Bg4DAF5zVpKAAMWsADIDb4DipJg092.mp3';
    this.appMusic.title = '测试';
    this.appMusic.coverImgUrl = 'https://kledu.oss-cn-beijing.aliyuncs.com/edu/courseSeriesImg/1577416324595.png';
  const setIter= setInterval(() => {
      if(formatMusic(this.music.leave)==that.changeTime){
        clearInterval(setIter)
        return
      }
        that.changeTime=++that.changeTime
       that.slideLen=(that.changeTime/formatMusic(this.music.leave))*100
      that.music.start=_changeTimeBySecond(that.changeTime)
      console.log(that.slideLen)
       console.log(that.changeTime)
      
       
    }, 1000);
  },
  methods: {
    stopSlider(){
      debugger
    },
    // 音频播放条改变 - 手动滑动滚动条停止
  timeSliderChanged: function (e) {
     
    // if (!this.data.music.length)
    //   return;
    var time = formatMusic(this.music.leave) * (e.mp.detail.value / 100);
      console.log(e.mp.detail.value)
      console.log(time)
      this.music.start=_changeTimeBySecond(time)
      console.log(_changeTimeBySecond(time))
     
      // debugger
    // 音频跳转到指定位置
    this.appMusic.seek(time)
  },
     // 音频实时信息  -->  
  audioTimeUpdated: function (e) {
    const startTime = e.currentTime
    const leaveTime = e.duration - startTime
    this.setData({
      "music.start": util.formatM(startTime),
      "music.leave": util.formatM(leaveTime)
    })
    if(!this.data.isStopSlider) {
      const proLen = (e.currentTime / e.duration * 100).toFixed(2)
      this.setData({
        slideLen: proLen
      })
    }
  },
    //播放视频
    playMusic(){
      if(!this.isPlay){
        this.appMusic.pause();
        this.appMusic.onTimeUpdate(() => {  
           
    })
    bgMusic.play() //播放音乐
        this.onTimeUpdate
        // this.isPlay=false
      }else{
          this.appMusic.play()
          // this.isPlay=true
      }
      this.isPlay=!this.isPlay

    },
    
    // //播放切换
    // playIng(){
    //   // this.isPlay=!this.isPlay
    //     //监听音乐播放
    //     debugger
    //  this.appMusic.onPlay(() => {
    //   console.log('音乐播放了');
    //   this.isPlay=true
    // }); 
    // }, 

    //   playPause(){
    //      //监听音乐暂停
    // this.appMusic.onPause(() => {
    //   console.log('音乐暂停了');
    //  this.isPlay=false
    // })

    //   },
     
   
    // //监听音乐停止
    // app.appMusic.onStop(() => {
    //   console.log('音乐停止了')
    //   app.globalData.isStop=true;
    //   this.setData({
    //     isStart: false
    //   })
    // })
    // //监听到音乐播放完了
    // app.appMusic.onEnded(()=>{
    //   app.globalData.isStop = true;
    //   this.setData({
    //     isStart:false
    //   })
    // })
       _getRegisterInfo () {
      let pageNum = this.pageNum;
      let pageSize = this.pageSize;
      wx.showLoading({
        title: '玩命加载中',
      })
       }
  },
   onReachBottom() {
      console.log("触底了");
      this._getRegisterInfo()
      
    },
    onPullDownRefresh () {
    console.log('下拉刷新')
},
  onShow() {}
};
</script>

<style>
.topDetailImg{
  width: 100%;
height:256px; 
background-color: coral;
}
.playTitle{
  /* width:230px;
height:36px; */
font-size:18px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(34,34,34,1);
text-align: center;
padding: 18px 0px;
/* line-height: 36px; */
}
.apd-pro-sliderContain{
  width: 85%;
}
.apd-progress{
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content:space-around;
  align-items: center;
  
}
.apd-pro-start ,.apd-pro-leave{
font-size:13px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(193,193,193,1);
}
.apd-btn-box{
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 95%;
  margin: 30px auto 0 auto;
}
.apd-btn-left{
  width:15px;
 height:16px;
}
.apd-btn-no{
  width:15px;
 height:16px;
}
.apd-btn-right{
    width:15px;
 height:16px;
}
.apd-btn-no{
  width:15px;
 height:16px;
}
.apd-btn-leave{
  width:15px;
height:15px;
}
.apd-btn-list{
  width:15px;
height:15px;
}
.playIcon{
  width:43px;
height:43px;
/* background:rgba(255,255,255,0);
border-radius:50%; */
}
</style>
