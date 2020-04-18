<template>
  <!--设置中心-->
  <div class="setPhoneCont">
    <p class="Phone">绑定手机</p>
    <div class="phoneLine">
      <div class="iconPh"></div>
      <input type="text" placeholder="请输入手机号" v-model="phone.mobile" style="margin-left:4px" />
    </div>
    <div class="phoneLine2" style="margin-top:20px">
      <div class="iconPh2"></div>
      <input
        type="text"
        v-model="phone.code"
        placeholder="请输入验证码"
        style="margin-left:4px;border-right:1px solid rgba(245,245,245,1)"
      />
      <p class="code" @click="getVerificationCode">获取验证码</p>
    </div>
    <div class="save">
      <button @click="savePhone">提交</button>
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
      phone: {
        mobile: "",
        code: "",
        captchaId: "",
        userId: "",
        source: 2
      }
    };
  },
  onShow() {},
  methods: {
    gopages(e) {
      if (+e === 1) {
        wx.navigateTo({
          url: `/pages/index/setUp/messageCenter/main` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
        });
      }
    },
    getVerificationCode() {
      var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (!reg.test(this.phone.mobile)) {
        wx.showToast({
          title: "手机号异常",
          icon: "none",
          duration: 1000
        });
        return false;
      }
      this.$api.tangy
        .verificationCode({
          mobile: this.phone.mobile,
          type: "8"
        })
        .then(res => {
          this.phone.captchaId = res.result.captchaId;
          this.phone.userId = this.$store.getters.userId;
          console.log(res);
        });
    },
    savePhone(){
      var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (!reg.test(this.phone.mobile)) {
        wx.showToast({
          title: "手机号异常",
          icon: "none",
          duration: 1000
        });
        return false;
      }
      this.$api.tangy
        .saveUserPhone(this.phone)
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
.save {
  margin-top: 130px;
}
.save button {
  width: 300px;
  height: 40px;
  margin: 0 auto;
  background: rgba(255, 216, 14, 1);
  border-radius: 41px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  text-align: center;
  line-height: 40px;
}
.setPhoneCont {
  width: 95%;
  margin: 0 auto;
}
.Phone {
  font-size: 25px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  line-height: 60px;
  margin-left: 25px;
  margin-bottom: 43px;
}
.phoneLine {
  width: 300px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  background: rgba(245, 245, 245, 1);
  border-radius: 20px;
  box-sizing: border-box;
}
.phoneLine2 input,
.phoneLine input {
  width: 150px;
}
.phoneLine2 {
  width: 300px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  padding: 0 15px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 92, 97, 1);
}
.iconPh {
  width: 13px;
  height: 16px;
  background-color: chocolate;
}
.iconPh2 {
  width: 15px;
  height: 12px;
  background-color: chocolate;
}
.code {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 92, 97, 1);
  margin-left: 15px;
}
</style>
