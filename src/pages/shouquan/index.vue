<template>
  <div>
    <div class="contain">
      <div class="ueraver">
        <img src="../../../static/images/shouquan/aver.png" mode="aspectFill" alt srcset>
      </div>
      <div>
        <p class="t1">憨牛随身学</p>
        <p class="t2">小程序需要获得您的微信授权才能正常使用</p>
      </div>
      <div>
        <!-- <button class="denglu" @getuserinfo="onGotUserInfo" open-type="getUserInfo">授权微信用户信息</button> -->
        <form @submit="subFormId" report-submit="true">
        <!-- <button type='primary' class="confirm" formType="submit" size='mini'>{{btnmsg}}</button> -->
        <button formType="submit" class="denglu" @getuserinfo="onGotUserInfo" open-type="getUserInfo">授权微信用户信息</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { setUserinfo } from '@/utils/auth'
export default {
  components: {
    // card
  },

  data() {
    return {};
  },
  methods: {
    subFormId(e){
        const formid=e.mp.detail.formId
        // this.$store.dispatch('putMoBanId',formid)
              //提交模板id
          // this.$api.mes.sendmobanmes().then((res)=>{

          // }).catch(error=>{
          //   	wx.showToast({
    			// 				title: '请求失败',
    			// 				icon: 'none',
    			// 				duration: 1000
    			// 			});
          // })
    },
    onGotUserInfo: function(e) {
      if (!e.target.userInfo) {
        console.log("用户拒绝授权");
        return false;
      }
      // debugger;
      //存放用户信息
      // this.$store.dispatch("GetUserInfo", e.target.userInfo);
      // debugger
       //提交用户信息到服务器
       setUserinfo(e.target.userInfo);
      this.$api.user
        .upUserInfo(e.target.userInfo)
        .then(res => {
          console.log(res);
          if (+res.code === 1) {
            wx.navigateBack({
              delta: 2
            });
          } else {
            wx.showToast({
              title: res.message,
              icon: "none",
              duration: 1000
            });
          }
        })
        .catch(error => {
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    }
  },

  created() {
    // let key_token=this.$store.getters.user.token
  }
};
</script>

<style>
.contain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 20% auto;
  /* padding: 40rpx; */
}
.footer {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  width: 100%;
  height: 150px;
  bottom: 0px;
  /* background-color: aqua */
}
.left {
  height: 150px;
  width: 210px;
  /* background-color: #000; */
  /* z-index: 9999 */
}
.left img {
  width: 100%;
  height: 100%;
}

.right {
  height: 150px;
  width: 270px;
}
.right img {
  width: 100%;
  height: 100%;
}
.ueraver {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  /* overflow: hidden; */
  /* box-shadow: 1px 1px 1px -1px rgba(46, 30, 30, 0.2); */
}
.ueraver img {
  width: 100%;
  height: 100%;
}
.t1 {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 700;
  text-align: center;
  color: #000;
  margin-top: 15px;
}
.t2 {
  font-size: 15px;
  font-family: PingFang SC;
  text-align: center;
  color: #80848f;
  margin-top: 10px;
}
.denglu {
  background-color: #2d8cf0;
  color: #fff;
  font-size: 14px;
  font-family: PingFang SC;
  text-align: center;
  height: 40px;
  width: 140px;
  line-height: 40px;
  border-radius: 25px;
  margin-top: 50px;
}
</style>
