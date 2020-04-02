<template>
<!--我的收藏-->
  <div class="stuCont">
    <div class="tabCont">
         <i-tabs :current="checkItem" @change="handleChange" i-class="detailTabs">
          <i-tab key="model" title="范文"></i-tab>
          <i-tab key="readings" title="读本"></i-tab>
    </i-tabs>
    </div>
    <div v-show="checkItem=='model'" class="course">
      <div class="courseLine">
        <div class="courseIn">
        <div class="courseImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <div class="courseLineCont">
        <p class="C1">春夏秋冬</p>
        <p class="C2"><i-icon type="systemprompt" size="19" color="#BBB8B9"  />204 <span><i-icon type="share" size="18" color="#BBB8B9"/> 57</span></p>
        </div>
        </div>
        <div class="play">
          <img src="../../../../../static/images/play/play.png" alt="" srcset="">
        </div>
      </div>
      <div class="courseLine">
        <div class="courseIn">
        <div class="courseImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <div class="courseLineCont">
        <p class="C1">我最好的朋友 </p>
        <p class="C2"><i-icon type="systemprompt" size="19" color="#BBB8B9"  />204 <span><i-icon type="share" size="18" color="#BBB8B9"/> 57</span></p>
        </div>
        </div>
        <div class="play">
          <img src="../../../../../static/images/play/play.png" alt="" srcset="">
        </div>
      </div>
      <div class="courseLine">
        <div class="courseIn">
        <div class="courseImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <div class="courseLineCont">
        <p class="C1">聪明的羊</p>
        <p class="C2"><i-icon type="systemprompt" size="19" color="#BBB8B9"  />204 <span><i-icon type="share" size="18" color="#BBB8B9"/> 57</span></p>
        </div>
        </div>
        <div class="play">
          <img src="../../../../../static/images/play/play.png" alt="" srcset="">
        </div>
      </div>
    
    </div>
    <div class="readings" v-show="checkItem=='readings'"></div>
  </div>
</template>

<script>
// import footbutt from '@/components/footbut.vue'
export default {
  components: {
    // footbutt
  },

  data() {
    return {
      checkItem:'model'

    };
  },
  methods: {
   handleChange(detail){
      console.log(detail.mp.detail.key)
      this.checkItem=detail.mp.detail.key
      // debugger
    }
    
  },
  onShow() {
    const that=this
      wx.login({
					success: function(res) {
						console.log(res.code)
						if(res.code) {
                //登录获取token
              that.$store.dispatch('LoginByWX',res.code).then(res=>{
                debugger
              })
      		}
					}
				});
    
  },
  created() {
  }
};
</script>

<style scoped>
.stuCont{
  width: 100%;

}
.tabCont{
  width: 100%;
}
.courseLine{
  width: 95%;
  margin: 0 auto;
  height: 98px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  border-bottom:1px dashed rgba(238,237,237,1);
}
.courseIn{
   display: flex;
  justify-content:flex-start;
  align-items: center;
}
.courseImg{
 width:73px;
  height:73px;
  border-radius:10px;
  background-color: cadetblue;
}
.courseLineCont{
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  margin-left: 10px;
  /* line-height: 39px; */
  /* align-items: center; */
}
.C1{
  font-size:13px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(34,34,34,1);
}
.C2{
  font-size:12px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(102,102,102,1);
padding-top: 15px;
display: flex;
justify-content: space-around;
align-items: center;
vertical-align:middle;
}
.C2 span{
  color:#FE5E5E;
  padding-left: 20px;
}
.play{
  width: 28px;
  height: 28px;
  margin-right: 15px;
}
.play img{
  width: 100%;
  height: 100%;
}
</style>

