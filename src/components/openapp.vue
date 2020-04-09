<template>
  <div class="openbox">
    <div
      class="openboxflex"
      style="background-image:url(../../../../static/images/index/openapp.png)"
    >
      <div class="opentext">打开app，参与活动报名。</div>
      <div class="openbtn">打开APP</div>
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
.openbtn {
  width: 55px;
  height: 20px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  margin-right: 15px;
  text-align: center;
  line-height: 20px;
}
.opentext {
  font-size: 12px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  padding-left: 15px;
}
.openbox {
  position: fixed;
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
  align-items: center;
  justify-content: space-between;
  background: no-repeat center center;
  background-size: cover;
}
</style>