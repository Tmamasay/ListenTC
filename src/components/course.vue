<!--Tab栏课程容器==>-->
<template>
  <div class="myCourseTab1">
	  <div class="zhanwe"></div>
    <div class="courseTabCont" v-for="(item,index) in courseCont" :key="index">
      <div class="courseTabLeft">
        <div class="courseTabLeftImg">
        <img :src="item.bannerImg" alt="" srcset="">
        </div>
        <p class="tips">{{item.studyNum}}人学习</p>
      </div>
      <div class="courseTabRight">
        <p class="t1">{{item.name}}</p>
        <p class="t2">{{item.teacherName}}|{{item.teacherDesc}}</p>
        <div class="pirceLine">
          <p>¥{{item.coursePrice}}起</p>
          <button>免费试听</button>
        </div>
      </div>
    </div>

    <div class="zhanwe"></div>
  </div>
</template>

<script>
export default {
  props: ['courseCont'],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.myCourseTab1 {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  margin-top: 15px;
}
.courseTabCont {
  width: 94%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px auto;
  /* align-items:center */
}
.courseTabLeft {
  width: 32%;
  height: 130px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 20px 0px rgba(157, 173, 225, 0.4);
  border-radius: 5px;
  margin-bottom: 25px;
  /* background-color: aqua; */
  position: relative;
}
.tips {
  width: 65px;
  height: 19px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.4;
  border-radius: 0px 10px 10px 0px;
  position: absolute;
  font-size: 11px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 20px;
  bottom: 10px;
}
.courseTabLeftImg {
  width: 94%;
  height: 124px;
  background-color: blueviolet;
  margin: 3.5px;
  border-radius: 5px;
  overflow: hidden;
}
.courseTabLeftImg img{
	width: 100%;
	height: 100%;
}
.courseTabRight {
  width: 64%;
  margin-top: 7px;
}
.t1 {
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 82, 1);
  line-height: 23px;
  /* height: 45px; */
}
.t2 {
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(184, 182, 196, 1);
  padding-top: 11px;
}
.pirceLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 29px;
}
.pirceLine p {
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 82, 1);
  line-height: 30px;
}
.pirceLine button {
  /* width:76px;
	height:28px; */
  background: rgba(61, 131, 255, 1);
  border-radius: 14px;
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  margin-right: 0px;
}
.zhanwe {
  width: 94%;
  height: 1px;
  margin: 0 auto;
}
</style>