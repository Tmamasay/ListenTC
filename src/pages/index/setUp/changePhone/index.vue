<template>
<!--设置中心-->
  <div class="setPhoneCont">
    <p class="Phone">绑定手机</p>
    <div class="phoneLine">
      <div class="iconPh"></div>
      <input type="text" value="+86 185 8045 2204" style="margin-left:4px">
    </div>
    <div class="phoneLine2" style="margin-top:20px">
      <div class="iconPh2"></div>
      <input type="text" value="1" style="margin-left:4px;border-right:1px solid rgba(245,245,245,1)">
      <p class="code">获取验证码</p>
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

    };
  },
  methods: {
     gopages(e){
            if (+e===1) {
               wx.navigateTo({
            url: `/pages/index/setUp/messageCenter/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
            }
            }
    
  },
  onShow() {
    
  },
  created() {
  }
};
</script>

<style scoped>
.setPhoneCont{
  width: 95%;
  margin: 0 auto;
}
.Phone{
  font-size:25px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(34,34,34,1);
line-height:60px;
margin-left: 25px;
margin-bottom: 43px;
}
.phoneLine{
width: 79%;
height: 30px;
margin: 0  auto;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px 15px 10px 20px;
background:rgba(245,245,245,1);
border-radius:32px;
}
.phoneLine2{
width: 79%;
height: 29px;
margin: 0  auto;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px 15px 10px 20px;
border-radius:30px;
border:1px solid rgba(255, 92, 97, 1);
}
.iconPh{
  width: 13px;
  height: 16px;
  background-color: chocolate;

}
.iconPh2{
   width: 15px;
  height: 12px;
  background-color: chocolate;

}
.code{
  font-size:12px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,92,97,1);
margin-left: 15px;
}

</style>
