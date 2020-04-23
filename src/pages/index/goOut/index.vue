<template>
  <web-view :src="src"></web-view>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      src: "",
      title:""
    };
  },
  beforeCreate() {},
  created() {},
  onShow() {
    this.src = this.$root.$mp.query.outUrl;
    this.title = this.$root.$mp.query.title;

    wx.setNavigationBarTitle({
      title:this.title
    })
  },
  methods: {}
};
</script>

<style scoped>
</style>
