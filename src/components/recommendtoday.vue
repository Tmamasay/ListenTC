<!--加载今日推荐课程==>-->
<template>
  <div class="myCourse1">
    <div class="myCourseTitle">
      <p class="courseTitleRight">今日·推荐</p>
      <p class="courseTitleLeft">查看更多&nbsp;></p>
    </div>
    <div class="recommendList">
      <div
        class="recommendLeft"
        v-for="item in todayCourseList"
        :key="item.id"
        @click="goTodayCourseDetail(item.id)"
      >
        <div class="recommendLeftImg">
          <img :src="item.bannerImg" alt>
        </div>
        <p class="recommendCont">{{item.name}}</p>
      </div>
      <!-- <div class="recommendRight">
			  <div class="recommendRightImg">
				  <img :src="todayCourseList[1].bannerImg" alt="">
			  </div>
			  <p class="recommendCont">{{todayCourseList[1].name}}</p>
      </div>-->
    </div>
    <div class="changList" @click="changeComToday">
      <img src="../../static/images/index/reload.png" alt>
      <p>换一换</p>
    </div>
    <div class="zhanwe"></div>
  </div>
</template>

<script>
export default {
  props: ["todayCourseList"],
  data() {
    return {
      todayCourse: []
    };
  },
  created() {},
  mounted() {},
  onLoad() {},
  methods: {
    changeComToday() {
      this.$emit("listento");
    },
   async checkCourseSeriesIsBuy(id){//查询课程是否购买
      let isIdBuy=''
       await this.$api.user
        .checkCourseSeriesIsBuy({
          id:id
        })
        .then(res => {
          if(+res.code===1){
            isIdBuy=res.data
            // 
          }
          
        })
        .catch(error => {
          console.log(error)
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
        return isIdBuy

    },
    goTodayCourseDetail(e) {
      //根据id查询课程详情
      this.checkCourseSeriesIsBuy(e).then(res=>{
          if(+res===0){//未购买
           wx.navigateTo({
            url: `/pages/index/coursedetail/main?id=${e}`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
          }else if(+res===1){//已购买
            wx.navigateTo({
            url: `/pages/index/mycoursedetail/main?id=${e}`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
          }
      });
      
      
    }
  }
};
</script>

<style>
.myCourse1 {
  width: 100%;
  /* height: 513px; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 35px 0px rgba(88, 91, 117, 0.17);
  border-radius: 12px;
}
.myCourseTitle {
  width: 94%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px auto;
  padding-top: 15px;
  padding-bottom: 10px;
}
.courseTitleRight {
  font-size: 21px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(54, 52, 69, 1);
}
.courseTitleLeft {
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(184, 182, 196, 1);
  line-height: 30px;
}
.recommendList {
  width: 94%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px auto;
  flex-wrap: wrap;
  /* align-items:flex-end */
}
.recommendLeft {
  width: 48.5%;
  margin-bottom: 25px;
}
.recommendRight {
  width: 48.5%;
}
.recommendLeftImg {
  width: 100%;
  height: 101px;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgb(226, 228, 229);
}
.recommendRightImg {
  width: 100%;
  height: 101px;
  overflow: hidden;
  border-radius: 5px;
  background-color: rgb(226, 228, 229);
}
.recommendLeftImg img,
.recommendRightImg img {
  width: 100%;
  height: 100%;
}
.recommendCont {
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 82, 1);
  padding-top: 15px;
}
.changList {
  width: 76px;
  height: 28px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(184, 182, 196, 1);
  opacity: 0.5;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  margin: 0px auto 35px auto;
}
.changList p {
  font-size: 15px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(184, 182, 196, 1);
  padding-left: 5px;
}
.changList img {
  width: 12px;
  height: 12px;
}
</style>