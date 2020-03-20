<template>
  <div>
    <div class="mineTop">
      <img src="" alt="">
    </div>
    <div class="bookTitle">
        <p class="leftBook"></p>
        <p class="leftBookName">精品课程推荐</p>
      </div>
      <!--1-->
      <div class="bookTeacLine">
        <div class="bookTeacImg">
          <img src="" alt="" srcset="">
        </div>
        <div class="rightBt"> 
        <p class="bookteacTitle">全国新课标卷 Ⅰ</p>
        <p class="bookDetail">限时免费</p>
        <div class="bookFllow">
          <div class="bookLisImg">
            <img src="" alt="" srcset="">
          </div>
         <p class="bookFllowPe">224</p>
        </div>
        </div>
      </div>
       <!--2-->
       <div class="bookTeacLine">
        <div class="bookTeacImg">
          <img src="" alt="" srcset="">
        </div>
        <div class="rightBt"> 
        <p class="bookteacTitle">全国新课标卷 Ⅰ</p>
        <p class="bookDetail">限时免费</p>
        <div class="bookFllow">
          <div class="bookLisImg">
            <img src="" alt="" srcset="">
          </div>
         <p class="bookFllowPe">224</p>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      user_info: ""
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  methods: {},
  onShow() {}
};
</script>

<style scoped>
.mineTop{
  width:94%;
height:70px;
margin: 16px auto 0 auto;
background-color: cornflowerblue;
box-shadow:0px 0px 9px 2px rgba(33,22,19,0.1);
border-radius:5px;
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
  .bookTeacLine{
    width:94%;
    height:118px;
    margin: 38px auto 0 auto;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 9px 2px rgba(33,22,19,0.1);
    border-radius:5px;
    position: relative;
  }
  .bookTeacImg{
    width:85px;
    height:114px;
    background-color: blueviolet;
    border-radius:5px;
    position: absolute;
    top:-18px;
    left: 19px;
    /* margin-top: -38px; */
  }
  .bookTeacImg img{
    width: 100%;
    height: 100%;
  }
  .rightBt{
    margin-left: 118px;
   
  }
  .bookteacTitle{
    /* width:319px;
    height:30px; */
    font-size:15px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(34,34,34,1);
    line-height:30px;
    padding-top:18px;
  }
  .bookDetail{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(254,94,94,1);
    line-height:30px;
  }
  .bookFllow{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .bookLisImg{
    width: 12px;
    height: 11px;
    background-color: cadetblue;
  }
  .bookLisImg img{
     width: 100%;
     height: 100%;
  }
  .bookFllowPe{
    font-size:12px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(145,145,145,1);
    margin-left: 6px;
  }
</style>
