<template>
  <!--个人资料'personalData'-->
  <div class="personalCont">
    <div class="personalLine">
      <div class="personalLineA">
        <p>更改头像</p>
        <div class="avterImg">
          <img src alt srcset />
        </div>
      </div>
    </div>
    <div class="personalLineB">
      <div class="personalLineB1">
        <p>昵称</p>
        <div class="rightName">爱笑的眼睛</div>
      </div>
      <div class="personalLineB1">
        <p>性别</p>
        <div class="rightName">
          女
          <i-icon type="enter" size="15" color="#BBB8B9" />
        </div>
      </div>
      <div class="personalLineB2">
        <p>生日</p>
        <div class="rightName">
          9月10日
          <i-icon type="enter" size="15" color="#BBB8B9" />
        </div>
      </div>
    </div>
    <div class="personalLineB">
      <div class="personalLineB1">
        <p>身份</p>
        <div class="rightName">
          小学1~3年级
          <i-icon type="enter" size="15" color="#BBB8B9" />
        </div>
      </div>
      <div class="personalLineB2">
        <p>城市</p>
        <div class="rightName">
          重庆
          <i-icon type="enter" size="15" color="#BBB8B9" />
        </div>
      </div>
    </div>
    <p class="keepForm">保存</p>
  </div>
</template>

<script>
// import footbutt from '@/components/footbut.vue'
export default {
  components: {
    // footbutt
  },

  data() {
    return {};
  },
  methods: {},
  onShow() {},
  created() {}
};
</script>

<style scoped>
.personalCont {
  width: 100%;
  height: 100vh;
  background: rgba(247, 247, 247, 1);
}
.personalLine {
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 1);
}
.personalLineA {
  width: 95%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  /* border-bottom: 1px solid rgba(237,237,237,1); */
}
.personalLineA p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.avterImg {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(255, 206, 19, 1);
  border-radius: 50%;
}
.avterImg img {
  width: 100%;
  height: 100%;
}
.personalLineB {
  width: 100%;
  height: 150px;
  background: rgba(255, 255, 255, 1);
  margin-top: 10px;
  /* margin:10px auto 10x auto ; */
}
.personalLineB {
  width: 100%;
  /* height:150px; */
  background: rgba(255, 255, 255, 1);
  margin-top: 10px;
  /* margin:10px auto 10x auto ; */
}
.personalLineB1 {
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(237, 237, 237, 1);
  margin: 0 auto;
}
.personalLineB2 {
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid rgba(237,237,237,1); */
  margin: 0 auto;
}
.personalLineB1 p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.personalLineB2 p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.rightName {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.keepForm {
  width: 295px;
  height: 41px;
  background: rgba(255, 216, 14, 1);
  border-radius: 41px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  text-align: center;
  line-height: 41px;
  margin: 58px auto;
}
</style>
