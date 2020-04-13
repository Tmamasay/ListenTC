<template>
  <div class="ga_swiper">
    <swiper
      class="swiper"
      circular="false"
      indicator-dots="true"
      indicator-color="rgba(255,255,255,0.8)"
      indicator-active-color="rgba(255,255,255,1)"
      autoplay="false"
      interval="5000"
      duration="1000"
      :style="{height:height+'px'}"
    >
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <!-- <navigator :url="'../../'+item.jumpUrl" open-type="navigate"> -->
          <!-- <navigator url='../../pages/index/chaihb/main' open-type="navigate"> -->
          <!-- <navigator > -->
          <image :src="item.imgUrl" :style="{height:height+'px'}" @click="navjumps(item.jumpUrl)" />
          <!-- </navigator> -->
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["imgUrls"],
  data() {
    return {
      height: "185"
    };
  },
  mounted() {},
  onLoad() {},
  methods: {
    navjumps(url) {
      wx.navigateTo({
        url: url
      });
    }
  }
};
</script>

<style>
.ga_swiper {
  width: 100%;
}

image {
  width: 100%;
}

.swiper image {
  width: 100%;
  height: 225px;
  border-radius: 10px;
  margin: 0 auto;
}
</style>