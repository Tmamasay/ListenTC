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
          <image :src="item.imageUrl" :style="{height:height+'px'}" @click="navjumps(item)" />
          <!-- </navigator> -->
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import { setActivityId } from "@/utils/auth";
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
    navjumps(it) {
      if (it.type === 205) {
        wx.navigateTo({
          url: `/pages/read/catalog/main?bookId=${it.params}`
        });
      } else {
        wx.navigateTo({
          url: `/pages/index/goOut/main?outUrl=${it.params}&title=${it.title}`
        });
      }
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