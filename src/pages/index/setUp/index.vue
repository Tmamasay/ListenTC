<template>
  <div>
    <div class="informationContTop">
    <div class="avterCont">
      <div class="avterImg">
        <img src="" alt="" srcset="">
      </div>  
      <div class="informationCont">
        <div class="infoname" @click="gopages(4)">WX-小阿离</div>
        <p class="fans" @click="gopages(2)">关注 12  &nbsp;&nbsp;&nbsp;     粉丝 57</p>
      </div>
      <p class="setInfo" @click="gopages(3)">设置</p>
      </div>
      <div class="powerLine">
        <div class="leftBPow">
          <div class="leftBpImg">
            <img src="" alt="" srcset="">
          </div>
          <p class="powerLineTitle" @click="gopages(5)">书房</p>
        </div>
        <p class="lineS"></p>
        <div class="leftBPow">
           <div class="leftBpImg">
            <img src="" alt="" srcset="">
          </div>
          <p class="powerLineTitle" @click="gopages(1)">收藏</p>
        </div>
      </div>
       <div class="bookTitle">
        <p class="leftBook"></p>
        <p class="leftBookName">温故而知新</p>
      </div>
       <div class="bookListCont">
      <div class="showBookList">
      <div class="bookLine">
      </div>
      <div class="bookLine">
      </div>
      <div class="bookLine">
      </div>
      </div>
      <div class="shaowBook"></div>
      <div class="shaowBookTai"></div>
    </div>


    </div>
  
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
          components: {
         
          },

          data () {
            return {
              user_info:''
            }
          },
          created () {
            // let key_token=this.$store.getters.user.token
          
        },
        methods:{
          gopages(e){
            if (+e===1) {
               wx.navigateTo({
            url: `/pages/index/setUp/myCollection/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
            }else if(+e===2){
              wx.navigateTo({
            url: `/pages/index/setUp/follow/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
            }else if(+e===3){
          wx.navigateTo({
            url: `/pages/index/setUp/settings/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
            }else if(+e===4){
          wx.navigateTo({
            url: `/pages/index/setUp/personalData/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
            }else if(+e===5){
          wx.navigateTo({
            url: `/pages/index/setUp/myStudy/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
            }
     
    },

        },
        onShow(){
          if (mpvuePlatform === 'wx') {
              console.log('------------------>')
              this.user_info=mpvue.getStorageSync('user_info');
        }
        }

}
</script>

<style scoped>
.informationContTop{
width:100%;
height:150px;
background:rgba(255,217,72,1);
border-radius:0px 0px 20% 20%;
}
.avterCont{

display: flex;
justify-content: flex-start;
align-items: center;
padding-top:22px;


}
.avterImg{
width:66px;
height:66px;
background:rgba(217,211,211,1);
border-radius:50%;
margin-left: 18px;
}
.avterImg img{
  width: 100%;
  height: 100%;
}
.informationCont{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 13px;


}
.infoname{
font-size:19px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(0,0,0,1);
margin-bottom: 9px;
/* line-height:60px; */
}
.fans{
  font-size:12px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(95,95,95,1);

}
.powerLine{
  width:95%;
height:50px;
margin: 20px auto 0 auto;
background:rgba(255,255,255,1);
box-shadow:0px 0px 9px 2px rgba(33,22,19,0.2);
border-radius:5px;
display: flex;
justify-content: space-around;
align-items:center

}
.leftBPow{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.leftBpImg{
  width: 17px;
  height: 19px;
  background-color: burlywood;
}
.leftBpImg img{
  width: 100%;
  height: 100%;
}
.powerLineTitle{
 
font-size:15px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(34,34,34,1);
margin-left: 7px;
}
.lineS{
  width:1px;
height:32px;
border-left: 1px dashed #FFD94B;
font-size:10px;
font-family:SimSun;
font-weight:400;
/* background-color: #FFD94B; */
color:rgba(210,210,210,1);
line-height:42px;
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
  .showBookList{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

  }
  .bookLine{
    width: 29%;
    height: 140px;
    background:rgba(171,171,184,1);
    border-radius:5px;
    margin-top: 24px;
    margin-bottom: -4px;
    z-index: 900;
    
  }
  .shaowBook{
    width: 95%;
    margin: 0 auto;
    height:13px;
    background:rgba(235,235,235,1); 
    transform: perspective(12px)  rotateX(0.7deg)
    /* border-left: 20px solid transparent;
    border-right: 20px solid transparent; */
  }
  .shaowBookTai{
    width: 95%;
    margin: 0 auto;
    height:17px;
    background:rgba(254,254,254,1);
    box-shadow:0px 0px 6px 0px rgba(33,22,19,0.15);
  }
  .setInfo{
    position: absolute;
    right: 15px;
    top:35px;
    font-size:12px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(95,95,95,1);
  }
</style>
