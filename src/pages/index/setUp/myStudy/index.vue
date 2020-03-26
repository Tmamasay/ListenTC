<template>
<!--我的书房-->
  <div class="stuCont">
    <div class="tabCont">
         <i-tabs :current="checkItem" @change="handleChange" i-class="detailTabs">
          <i-tab key="course" title="课程"></i-tab>
          <i-tab key="readings" title="读本"></i-tab>
    </i-tabs>
    </div>
    <div v-show="checkItem=='course'" class="course">
      <div class="courseLine">
        <div class="courseIn">
        <div class="courseImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <div class="courseLineCont">
        <p class="C1">豆苗阅读小课堂01</p>
        <p class="C2">共6课 <span>￥0.00</span></p>
        </div>
        </div>
        <i-icon type="enter" size="17" color="#BBB8B9" />
      </div>
      <div class="courseLine">
        <div class="courseIn">
        <div class="courseImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <div class="courseLineCont">
        <p class="C1">豆苗阅读小课堂02</p>
        <p class="C2">共6课 <span>￥0.00</span></p>
        </div>
        </div>
        <i-icon type="enter" size="17" color="#BBB8B9" />
      </div>
      <div class="courseLine">
        <div class="courseIn">
        <div class="courseImg">
          <!-- <img src="" alt="" srcset=""> -->
        </div>
        <div class="courseLineCont">
        <p class="C1">豆苗阅读小课堂03</p>
        <p class="C2">共6课 <span>￥0.00</span></p>
        </div>
        </div>
        <i-icon type="enter" size="17" color="#BBB8B9" />
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
      checkItem:'course'

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
  height: 90px;
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
  width:109px;
  height:64px;
  border-radius:10px;
  background-color: cadetblue;
}
.courseLineCont{
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  margin-left: 10px;
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
padding-top: 10px;
}
.C2 span{
  color:#FE5E5E;
}
</style>

