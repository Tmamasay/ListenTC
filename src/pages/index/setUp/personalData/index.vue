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
          <i-icon type="enter" @click="openGender" size="15" color="#BBB8B9" />
        </div>
      </div>
      <div class="personalLineB2">
        <p>生日</p>
        <div class="rightName">
          {{userInfo.birthday}}
          <picker
            mode="date"
            v-model="userInfo.birthday"
            start="2015-09-01"
            end="2017-09-01"
            @change="bindDateChange"
          >
            <i-icon type="enter" size="15" color="#BBB8B9" />
          </picker>
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
          <picker
            mode="region"
            @change="bindRegionChange"
            v-model="locationId"
            :range="areaRange"
            :customItem="customItem"
          >
            <i-icon type="enter" size="15" color="#BBB8B9" />
          </picker>
        </div>
      </div>
    </div>
    <p class="keepForm" @click="saveUserInfo">保存</p>

    <i-action-sheet
      :visible="genderType"
      :actions="actions1"
      @cancel="cancelGender"
      @click="saveGender"
    />
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
      date: "",
      genderType: false,
      actions1: [
        {
          name: "男",
          value:"男"
        },
        {
          name: "女",
          value:"女"
        }
      ],
      userInfo: {
        name: "",
        gender: "",
        birthday: "",
        levelCode: "",
        locationId: [],
        image: ""
      },
      areaRange: [],
      region: ["广东省", "广州市", "海珠区"],
      customItem: "全部"
    };
  },
  onShow() {
    // this.getLocation()
    this.getUserInfo();
    this.getArea();
  },
  created() {},
  methods: {
    openGender() {
      this.genderType = true;
    },
    cancelGender() {
      this.genderType = false;
    },
    saveGender(e) {

      
    },
    getArea() {
      this.$api.tangy.getAreaJson().then(res => {
        this.range = res.result;
        console.log(res);
      });
    },
    bindRegionChange(e) {
      console.log(e);
    },
    getLocation() {
      wx.getLocation({
        type: "wgs84",
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          const speed = res.speed;
          const accuracy = res.accuracy;
        }
      });
    },
    getUserInfo() {
      this.$api.tangy
        .userInfo({
          userId: this.$store.getters.userId
        })
        .then(res => {
          console.log(res);
        });
    },
    saveUserInfo() {
      this.$api.tangy
        .saveUserInfo({
          userId: this.$store.getters.userId
        })
        .then(res => {
          console.log(res);
        });
    },
    bindDateChange(e) {
      this.userInfo.birthday = e.target.value;
    }
  }
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
