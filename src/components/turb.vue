<template>
  <div>
    <swiper
      :indicator-dots="indicatorDots"
      :interval="interval"
      :autoplay="false"
      :duration="duration"
      :circular="circular"
      :previous-margin="'110rpx'"
      :next-margin="'110rpx'"
      :current="currentIndex"
      @change="swiperChange"
      @animationfinish="animationfinish"
    >
      <div v-for="(item,index) in imgUrls" :key="item">
        <swiper-item>
          <div class="img-wrapper">
            <img
              mode="scaleToFill"
              :src="item.imageUrl"
              @click="navjumps(item)"
              class="slide-image"
              :style="{
                        transform: currentIndex===index?'scale(1 ,1.2)':'scale(1,1)',
                        transitionDuration: '.3s',
                        transitionTimingFunction: 'ease',
                        position: 'relative',
                        top:'20rpx',
                    }"
            />
          </div>
          <!-- <div class="text_box"> -->
          <!-- <wxParse :content="item.content" @preview="preview" @naviigate="navigate" /> -->
          <!-- <textarea :value="item.content" disabled></textarea> -->
          <!-- <p>{{item.content}}</p> -->
          <!-- <span @click="see_more(item.content)">查看更多</span> -->
          <!-- </div> -->
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
import { setActivityId, getActivityId } from "@/utils/auth";
export default {
  props: ["imgUrls"],
  data() {
    return {
      haibao_list: [
        { img: "./../img/banner2.jpg" },
        { img: "./../img/banner2.jpg" },
        { img: "./../img/banner2.jpg" }
      ],
      indicatorDots: false,
      interval: 5000,
      duration: 500,
      circular: true,
      currentIndex: 0
    };
  },

  methods: {
    navjumps(it) {
      const id = getActivityId();
      console.log(id);
      wx.navigateTo({
        url: it.jumpUrl
      });
    },
    swiperChange(e) {
      this.currentIndex = e.mp.detail.current;
    },
    animationfinish(e) {
      this.tz_data = this.imgUrls[e.mp.detail.current];
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.img-wrapper {
  width: 230px;
  height: 132px;
  overflow: hidden;
  position: relative;
  border-radius: 10rpx;
}
.img-wrapper img {
  width: 100%;
  height: 88%;
  border-radius: 10rpx;
}
</style>
