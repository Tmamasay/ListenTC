<template>
  <div class="ga_swiper">
    <Swiper :options="swiperOption"></Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  // props: ['imgUrls'],
  data() {
    return {
      imgUrls: [
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ],
      swiperOption: {
        autoplay: 3000,
        speed: 1000
      },
      height: "185"
    };
  },
  mounted() {},
  onLoad() {},
  methods: {}
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