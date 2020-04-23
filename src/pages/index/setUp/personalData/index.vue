<template>
  <!--个人资料'personalData'-->
  <div class="personalCont" v-if="name">
    <div class="personalLine">
      <div class="personalLineA" @click="chooseImage">
        <p>更改头像</p>
        <div class="avterImg">
          <img :src="image" alt srcset />
        </div>
      </div>
    </div>
    <div class="personalLineB">
      <div class="personalLineB1">
        <p>昵称</p>
        <div class="rightName">{{name}}</div>
      </div>
      <div class="personalLineB1">
        <p>性别</p>
        <div class="rightName">
          {{genderName}}
          <i-icon type="enter" @click="openGender" size="15" color="#BBB8B9" />
        </div>
      </div>
      <div class="personalLineB2">
        <p>生日</p>
        <div class="rightName">
          <picker mode="date" v-model="birthday" @change="bindDateChange">
            {{birthday}}
            <i-icon type="enter" size="15" color="#BBB8B9" />
          </picker>
        </div>
      </div>
    </div>
    <div class="personalLineB">
      <div class="personalLineB1" @click="powerDrawer" data-statu="open">
        <p>身份</p>
        <div class="rightName">
          {{levelCodeName}}
          <i-icon type="enter" size="15" color="#BBB8B9" />
        </div>
      </div>
      <div class="personalLineB2">
        <p>城市</p>
        <div class="rightName">
          <picker mode="region" :range="range" @change="bindRegionChange2">
            <!-- <text v-if="addressCity">{{addressCity[0]}} > {{addressCity[1]}} > {{addressCity[2]}}</text>
            <text v-else class='placeholder'>请选择地区</text>-->
            {{locationName}}
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
      @iclick="saveGender"
    />
    <animation-draw
      ref="animationDrawer"
      :showName="'年级'"
      @getValue="getLevelCodeValue"
      :list="gradeList"
      :showModalStatus="showModalStatus"
    ></animation-draw>
  </div>
</template>

<script>
import animationDraw from "@/components/animationDraw";
import { ShaAccess } from "@/utils";
import store from "@/store/index";
import {
  getUserinfo,
  getUserId,
  getLevelCode,
  setLevelCode,
  getToken
} from "@/utils/auth";
export default {
  components: {
    animationDraw
  },

  data() {
    return {
      upLoad: {},
      date: "",
      genderType: false,
      actions1: [
        {
          name: "男",
          value: 1
        },
        {
          name: "女",
          value: 0
        }
      ],
      showModalStatus: false,
      gradeList: [],
      name: "",
      gender: 1,
      genderName: "",
      birthday: "",
      levelCode: "",
      locationId: "",
      locationName: "",
      levelCodeName: "",
      image: "",
      areaRange: [],
      region: ["广东省", "广州市", "海珠区"],
      customItem: "全部"
    };
  },
  onShow() {
    this.getAttribute();
    // this.getLocation()
    this.getUserInfo();
    this.getArea();
    this.levelCode = getLevelCode();
  },
  created() {},
  methods: {
    async getAttribute() {
      await this.$api.tangy.getAttribute().then(res => {
        this.gradeList = res.result.levelList || [];
      });
    },
    getLevelCodeValue(e) {
      this.levelCode = e.value;
      this.levelCodeName = e.name;
      setLevelCode(e.value);
    },
    powerDrawer(e) {
      this.$refs.animationDrawer.powerDrawer(e);
    },
    //099999999=========
    chooseImage() {
      var that = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

          var tempFilePaths = res.tempFilePaths;

          console.log(tempFilePaths[0]);
          that.image = tempFilePaths[0];
          that.fileUpload(tempFilePaths[0]);
        }
      });
    },

    ///---------------------
    openGender() {
      this.genderType = true;
    },
    cancelGender() {
      this.genderType = false;
    },
    saveGender(e) {
      console.log(e.mp.detail.index);
      if (e.mp.detail.index) {
        this.gender = 0;
        this.genderName = "女";
      } else {
        this.gender = 1;
        this.genderName = "男";
      }
      this.genderType = false;
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
    bindRegionChange2(e) {
      this.locationId = +e.mp.detail.code[2];
      this.locationName = `${e.mp.detail.value[0]}-${e.mp.detail.value[1]}-${
        e.mp.detail.value[2]
      }`;
      console.log(e);
      console.log(this.locationId);
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
      const that = this;
      this.$api.tangy
        .userInfo({
          userId: getUserId()
        })
        .then(res => {
          if (+res.code === 200) {
            const data = res.result;
            (that.name = data.name),
              (that.genderName = data.genderName),
              (that.birthday = data.birthday),
              (that.levelCode = data.levelCode),
              (that.levelCodeName = data.levelName),
              (that.locationId = data.locationId),
              (that.locationName = data.locationName),
              (that.image = data.headImageUrl);
          }
          console.log(res);
        });
    },
    saveUserInfo() {
      const options = {
        name: this.name,
        gender: this.gender,
        birthday: this.birthday,
        levelCode: getLevelCode(),
        locationId: this.locationId
      };
      this.$api.tangy.saveUserInfo(options).then(res => {
        (this.genderName = res.result.genderName),
          (this.birthday = res.result.birthday),
          (this.levelCode = res.result.levelCode),
          (this.levelCodeName = res.result.levelName),
          (this.locationId = res.result.locationId),
          (this.locationName = res.result.locationName),
          (this.image = res.result.headImageUrl);
      });
    },
    bindDateChange(e) {
      const a = Object.assign({}, e.mp.detail);
      console.log(e);
      console.log(e.mp.detail.value);
      console.log(a);
      this.birthday = a.value;
    },

    fileUpload: function(tempFilePath) {
      const options = {
        name: this.name,
        gender: this.gender,
        birthday: this.birthday,
        levelCode: getLevelCode(),
        locationId: this.locationId
      };
      var that = this; //坑1： this需要这么处理
      wx.uploadFile({
        url: `${store.getters.baseurl}/user/v1/user/info/${getUserId()}`, //url地址， //app.ai_api.File.file
        filePath: tempFilePath, //文件路径  这里是mp3文件
        name: "file", //随意
        header: {
          "Content-Type": "multipart/form-data",
          accessToken: getToken(),
          access: ShaAccess(
            `${store.getters.baseurl}/user/v1/user/info/${getUserId()}`
          ) //如果需要token的话要传
        },
        formData: options,
        success(res) {
          var data = JSON.parse(res.data); // 坑2：与wx.request不同的是，upload返回的是字符串格式，需要字符串对象化
          if (data.code == 200) {
            (that.genderName = data.result.genderName),
              (that.birthday = data.result.birthday),
              (that.levelCode = data.result.levelCode),
              (that.levelCodeName = data.result.levelName),
              (that.locationId = data.result.locationId),
              (that.locationName = data.result.locationName),
              (that.image = data.result.headImageUrl);
          } else {
            console.log("上传失败");
            wx.showToast({
              title: res.message,
              icon: "none"
            });
          }
        }
      });
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
  overflow: hidden;
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
