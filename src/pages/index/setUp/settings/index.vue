<template>
<!--设置中心-->
  <div class="setCont">
    <div class="setContP">
    <div class="setLine">
      <p class="setL">绑定手机</p>
      <div class="setRGo">
      <p class="setR">18883630318</p>
      <i-icon type="enter" size="17" color="#BBB8B9" />
      </div>
    </div>
    </div>
    <div class="setContP" style="margin-top:10px">
    <div class="setLine" @click="gopages(1)">
      <p class="setL">消息中心</p>
      <div class="setRGo">
      <!-- <p class="setR">18883630318</p> -->
      <i-icon type="enter" size="17" color="#BBB8B9" />
      </div>
    </div>
    </div>
    <div class="setContP" style="margin-top:10px">
    <div class="setLine" style="border-bottom: 1px solid #EFEDEE;">
      <p class="setL">关于我们</p>
      <div class="setRGo">
      <!-- <p class="setR">18883630318</p> -->
      <i-icon type="enter" size="17" color="#BBB8B9" />
      </div>
    </div>
    </div>
    <div class="setContP" >
    <div class="setLine">
      <p class="setL">隐私协议</p>
      <div class="setRGo">
      <!-- <p class="setR">18883630318</p> -->
      <i-icon type="enter" size="17" color="#BBB8B9" />
      </div>
    </div>
    </div>
    <p class="setBb">当前版本：v1.0</p>
     <p class="logOut">退出登录</p>
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
.setCont{
  width: 100%;
  height: 100vh;
  background-color: #F7F7F7;
}
.setContP{
   width: 100%;
  background:rgba(255,255,255,1);
  

}
.setLine{
  width: 95%;
   height:50px;
  margin: 0 auto;
  display: flex;
  justify-content:space-between;
  align-items: center;

}
.setL{
  font-size:13px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(34,34,34,1);
  
}
.setRGo{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.setR{
font-size:13px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(34,34,34,1);
}
.setBb{
font-size:10px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(149,149,149,1);
text-align: center;
margin: 53px auto 15px auto;
}
.logOut{
  width:295px;
height:41px;
margin: 0 auto;
background:rgba(255,216,14,1);
border-radius:41px;
font-size:15px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(67,67,67,1);
text-align: center;
line-height: 41px;
}
</style>
