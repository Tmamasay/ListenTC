<template>
  <div>
    <div class="informationContTop">
    <div class="avterCont">
      <div class="avterImg">
        <img src="" alt="" srcset="">
      </div>  
      <div class="informationCont">
        <div class="infoname">WX-小阿离</div>
        <p class="fans">关注 12  &nbsp;&nbsp;&nbsp;     粉丝 57</p>
      </div>
      </div>
      <div class="powerLine">


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
height:170px;
background:rgba(255,217,72,1);
border-radius:0px 0px 10% 10%;
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
margin: 0 auto;
background:rgba(255,255,255,1);
box-shadow:0px 0px 9px 2px rgba(33,22,19,0.2);
border-radius:5px;

}

</style>
