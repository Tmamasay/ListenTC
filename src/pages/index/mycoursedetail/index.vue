<!--课程详情=====>未购买-->
<template>
  <div class="mycourseContain">
    <div class="playCont"></div>
    <div class="detailCont">
    <i-tabs :current="current" @change="handleChange" i-class="detailTabs">
      <i-tab key="tab1" title="课程目录"></i-tab>
      <i-tab key="tab2" title="课程介绍"></i-tab>
    </i-tabs>
    <div class="showContLeft" v-show="current=='tab1'">
    <catalog :catalogList="courseDetail.courseItem" :isbuy="courseDetail.isBuy"></catalog>
    </div>
    <div class="showContRight" v-show="current=='tab2'">
    <P>{{courseDetail.remark}}</P>
    </div>
    </div>
    <div class="courseFooter">
      <p class="M1">剩余：105天</p>
      <div class="Y1">加入收藏夹</div>
      <div class="R1">立即续费</div>
    </div>
  </div>
</template>

<script>
import catalog from "@/components/catalog";
export default {
  components: {
    catalog
  },

  data() {
    return {
      kcCont: "2018年消防工程师《消防安全综合能力》精讲班+冲刺班",
      current: "tab1",
      height:'600',  
      courseDetail:{}//课程详情
    };
  },
  mounted() {
    // let key_token=this.$store.getters.user.token


  },
  onLoad() {
    var that=this
    wx.setNavigationBarTitle({
      title: "一键课程",
      success: function(res) {
        // success
      }
    });
    wx.getSystemInfo({
  success: function(res) {
    that.height=res.windowHeight-43;
  }
});
    const id=this.$root.$mp.query.id
    that.getCourseSeriesById(id)

  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.current=e.mp.detail.key
    },
    //根据id查询课程详情
    async getCourseSeriesById(id){
       await this.$api.user
        .getCourseSeriesById({
          id:id
        })
        .then(res => {
          if(+res.code===1){
            this.courseDetail=res.data
            // debugger
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
    },
    
  },
  
  onShow() {}
};
</script>

<style>
.mycourseContain {
  width: 100%;
  background-color: rgba(255,255,255,1);
}
.playCont{
  width: 100%;
  height: 225px;
  background-color: bisque
}

.detailCont{
 width: 100%;
  background:rgba(255,255,255,1);
  border:0.5px solid rgba(255,255,255,1);
  border-radius:15px;
  margin-top:-15px
}
.detailTabs{
 margin-top: 8px;
 
}
  .courseFooter{
    width: 100%;
    height: 49px;
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    display: flex;display: flex;
    flex-direction: row;
    align-items:center;
    flex: 1;
    border-top: 0.5px solid rgba(240,240,240,1);
  }
  .M1{
    flex: 0 0 44%;
    /* text-align: center; */
    padding-left: 15px;
    font-size:16px;
    font-family:A02-;
    font-weight:400;
    color:rgba(67,66,82,1);
  }
  .M1 span{
    font-size:16px;
    font-family:A02-;
    font-weight:400;
    color:rgba(255, 69, 65, 1);
  }
  .Y1{
  flex: 0 0 28%;
  text-align: center;
  line-height: 49px;
  font-size:16px;
  font-family:A02-;
  font-weight:400;
  color:rgba(255,255,255,1);
  background:rgba(255,162,0,1);
  }
  .R1{
  flex: 0 0 28%;
  text-align: center;
  line-height: 49px;
  font-size:16px;
font-family:A02-;
font-weight:400;
color:rgba(255,255,255,1);
  background:rgba(255,69,65,1);
  }
  .showContLeft{
    width: 92%;
    margin: 0 auto;
  }
  .showContRight{
    width: 92%;
    margin: 30px auto;
    font-size:16px;
    font-family:A02-;
    font-weight:400;
    color:rgba(67,66,82,1);
    line-height:28px;
  }

</style>
