<template>
  <div class="openbox">
    <div
      class="openboxflex"
      style="background-image:url(../../../../static/images/index/openapp.png)"
    >
      <div class="opentext">打开app，参与活动报名。</div>
      <button class="openbtn">打开APP</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  onLoad() {},
  methods: {}
};
</script>

<style>
.openbtn{
    width: 55px;
    
}
.opentext {
  font-size: 12px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.openbox {
  position: absolute;
  width: 100%;
  height: 60px;
  padding: 10px;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
}
.openboxflex {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: no-repeat center center;
  background-size: cover;
}
</style>