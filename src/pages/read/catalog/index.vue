<template>
<!--目录-->
  <div>
    <div class="readTopImg">
      <!-- <img src="" alt="" srcset=""> -->
    </div>
    <div class="tabCont">
         <i-tabs :current="checkItem" @change="handleChange" i-class="detailTabs">
          <i-tab key="introduce" title="介绍"></i-tab>
          <i-tab key="catalog" title="目录"></i-tab>
    </i-tabs>
    </div>
    <!--简介-->
    <div v-show="checkItem=='introduce'" class="introduce">
     <div class="introduceImg">
       <img src="" alt="">
     </div>
     <div class="contextIn">
        <div class="bookTitle">
        <p class="leftBook"></p>
        <p class="leftBookName">精品课程推荐</p>
        </div>
        <div class="contextCon">
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
        </div>
     </div>
    </div>
    <!--目录-->
     <div class="catalog" v-show="checkItem=='catalog'">
       <div class="cataContLine">
         <div class="cataImg">
           <img src="../../../../static/images/play/incLine.png" alt="" srcset="">
         </div>
         <p class="cataContext">播放全部<span>（1043 人已收听）</span></p>
       </div>

    </div>
    
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
      checkItem:'catalog'

    };
  },
  methods: {
    
  },
  onShow() {
    
  },
  created() {
  }
};
</script>

<style>
.readTopImg{
  width: 100%;
  height: 198px;
  background-color: cadetblue;
}
.introduce{
  width: 100%;
  margin-top:5px;
}
.catalog{
  width: 100%;
  margin-top:5px;
}
.introduceImg{
  width: 100%;
  height: 340px;
  background-color: chocolate;
}
.bookTitle{
  width: 95%;
  padding-top: 17px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items:center
}
  .leftBook{
     width: 4px;
     height: 17px;
     background-color: #F3D24E ;
   }
  .leftBookName{
    /* width:79px;
    height:38px; */
    font-size:17px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(48,48,48,1);
    line-height:30px;
    margin-left: 9px;
  }
  .contextCon{
    width: 90%;
    margin: 25px auto;

  }
  .contextCon p{
    font-size:13px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(109,109,109,1);
    line-height:24px;
  }
  .cataContLine{
    width: 95%;
    display: flex;

  }
  .cataImg{
    width: 28px;
    height: 28px;
  }
  .cataImg img{
    width: 100%;
    height: 100%;
  }
  .cataContext{
    /* width:120px;
    height:30px; */
    font-size:15px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(34,34,34,1);
  }
  .cataContext span{
    /* width:157px;
    height:21px; */
    font-size:10px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(160,160,160,1);
    line-height:24px;
  }

</style>
