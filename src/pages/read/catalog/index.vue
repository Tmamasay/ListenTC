<template>
<!--目录-->
  <div>
    <div class="readTopImg">
      <img src="https://www.dummyimage.com/375x198" alt="" srcset="">
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
       <img src="https://www.dummyimage.com/375x340" alt="">
     </div>
     <div class="contextIn">
        <div class="bookTitle">
        <p class="leftBook"></p>
        <p class="leftBookName">订阅须知</p>
        </div>
        <div class="contextCon">
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
          <p>1、本22页面课程内容为一次性付费产品，付费成功后可永久聆听学习。</p>
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
         <p class="cataContext">播放全部</p>
         <span>（1043 人已收听）</span>
       </div>
       <div class="cataContList">
          <div class="cataImg">
           <img src="../../../../static/images/play/incLine.png" alt="" srcset="">
         </div>
         <div class="cataST">
           <p>1. 汗水</p>
           <div class="sTBtn">
             <p class="sTBtnLine">免费试听</p>
             <div class="sTImg">
               <img src="" alt="" srcset="">
             </div>
             <p class="sTime">2'20''</p>
           </div>
         </div>
       </div>
        <div class="cataContList">
          <div class="cataImg">
           <img src="../../../../static/images/play/incLine.png" alt="" srcset="">
         </div>
         <div class="cataST">
           <p>1. 汗水</p>
           <div class="sTBtn">
             <!-- <p class="sTBtnLine">免费试听</p> -->
             <div class="sTImg">
               <img src="" alt="" srcset="">
             </div>
             <p class="sTime">2'20''</p>
           </div>
         </div>
       </div>
    </div>
     <div class="footerBtn">
         <p class="btnLeft">返回</p>
         <p class="btnRight">立即订阅</p>

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
    handleChange(detail){
      console.log(detail.mp.detail.key)
      this.checkItem=detail.mp.detail.key
      // 
    }
    
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
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom:1px dashed rgba(238,237,237,1);

  }
  .cataImg{
    width: 28px;
    height: 28px;
    margin: auto 9px auto 9px ;
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
  .cataContLine span{
    /* width:157px;
    height:21px; */
    display: inline-block;
    font-size:10px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(160,160,160,1);
    /* line-height:24px; */
  }
  .cataContList{
     width: 95%;
    height: 82px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom:1px dashed rgba(238,237,237,1)  ;
  }
  .cataST{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .cataST>p{
    font-size:15px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(34,34,34,1);

  }
  .sTBtn{
    display: flex;
    align-items:center;
    margin-top: 8px;
  }
  .sTBtnLine{
    font-size:10px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(67,67,67,1);
    padding: 5px 8px;
    background-color: rgba(255,217,72,1);
    border-radius:19px;
  
    margin-right: 10px;
    /* margin: 13px  auto  auto 10px; */
  }
  .sTImg{
    width: 12px;
    height: 12px;
    background-color: cornflowerblue;
   
  }
  .sTImg img{
    width: 100%;
    height: 100%;
  }
  .sTime{
    font-size:11px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(160,160,160,1);
     margin-left: 5px;
  }
.footerBtn{
  width:100%;
height:63px;
margin: 0 auto;
background:rgba(255,255,255,1);
box-shadow:0px 0px 9px 1px rgba(33,22,19,0.2);
display: flex;
justify-content:space-around;
align-items: center;
position: fixed;
bottom: 0px;
}
.btnLeft{
width:170px;
height:45px;
background:rgba(232,232,232,1);
border-radius:45px;
font-size:15px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(34,34,34,1);
text-align: center;
line-height:45px ;
}
.btnRight{
  width:170px;
height:45px;
background:rgba(255,217,72,1);
border-radius:45px;
font-size:15px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(34,34,34,1);
text-align: center;
line-height:45px ;

}
</style>
