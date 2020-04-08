<template>
  <div class="areaBox">
    当前专区：
    <div class="current_area">所有专区</div>
    <div class="tags">
      <span class="tag" v-for="(item, index) in dataList" :key="index"> {{ item.name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataList"],
  data() {
    return {};
  },
  mounted() {},
  onLoad() {},
  methods: {}
};
</script>

<style>
.areaBox {
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  font-weight: 400;
  padding: 0 10px;
  background-color: #fff;
  color: rgba(109, 109, 109, 1);
}
.current_area {
  color: #222222;
}
.tags {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-template-rows: repeat(auto-fill, 30px);
  grid-auto-flow: column;
  gap: 10px;
  box-sizing: border-box;
}
</style>