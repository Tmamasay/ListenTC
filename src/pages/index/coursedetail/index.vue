<!--课程详情=====>未购买-->
<template>
  <div class="courseContain">
    <div v-if="isshow">
      <i-tabs :current="current" @change="handleChange">
        <i-tab key="tab1" title="课程"></i-tab>
        <i-tab key="tab2" title="介绍"></i-tab>
        <i-tab key="tab3" title="目录"></i-tab>
      </i-tabs>
    </div>
    <scroll-view
      scroll-y
      @scroll="scroll"
      scroll-with-animation="true"
      :style="{height:height+'px'}"
      :upper-threshold="50"
      :lower-threshold="20"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      :scroll-into-view="toView"
      :scroll-top="scrollTop"
    >
      <!-- <view id="green" class="scroll-view-item"></view>
    <view id="red" class="scroll-view-item"></view>
      <view id="yellow" class="scroll-view-item"></view>-->

      <view id="tabkc" class="scroll-view-item courseTabKc">
        <div class="tabKcImg">
          <img :src="courseDetail.bannerImg" alt srcset>
        </div>
        <p>
          <span>￥</span>
          {{courseDetail.coursePrice}}
        </p>
        <div class="tabKcCont">{{courseDetail.name}}</div>
        <div class="learnTotal">{{courseDetail.studyNum}}人在学</div>
        <div class="zhanwei"></div>
        <div class="tabKcTime">
          <div>
            <p class="K1">课程总课时</p>
            <p class="K2">{{courseDetail.courseTime}}分钟</p>
          </div>
          <div>
            <p class="K1">课程总视频</p>
            <p class="K2">{{courseDetail.videoCount}}个</p>
          </div>
          <div>
            <p class="K1">课程有效期</p>
            <p v-if="courseDetail.validityDay==0" class="K2">无限期</p>
            <p v-else class="K2">{{courseDetail.validityDay}}天</p>
          </div>
        </div>
        <div class="zhanwei"></div>
        <div class="evaluate">
          <div class="evaluateTitle">
            <span class="evalLeft"></span>
            <p>
              课程评价
              <span>({{courseDetail.evaluateCount}})</span>
            </p>
          </div>
          <div class="evalLine"></div>
          <evalist :evaConts="evaConts"></evalist>
          <p class="moreEval">查看所有评价</p>
        </div>
        <div class="zhanwei"></div>
      </view>
      <view id="tabjs" class="scroll-view-item courseTabJs">
        <div class="evaluateTitle">
          <span class="evalLeft"></span>
          <p>课程介绍</p>
        </div>
        <div class="courseTabJsCont">{{courseDetail.remark}}</div>
        <div class="zhanwei"></div>
      </view>
      <view id="tabml" class="scroll-view-item courseTabMl">
        <div class="evaluateTitle">
          <span class="evalLeft"></span>
          <p>课程目录</p>
        </div>
        <div class="courseTabJsCont">
          <catalog :catalogList="courseDetail.courseItem" :isbuy="courseDetail.isBuy"></catalog>
        </div>
        <div class="zhanwei"></div>
        <div class="zhanwei1"></div>
      </view>
    </scroll-view>
    <div class="courseFooter">
      <p class="M1">
        共计：
        <span>￥{{courseDetail.coursePrice}}</span>
      </p>
      <div class="Ycont">
        <button
          class="Y1"
          v-if="isUserInfo==''"
          @getuserinfo="onGotUserInfo"
          open-type="getUserInfo"
        >加入收藏夹</button>
        <button class="Y1" v-else @click="saveMyCollect(courseDetail.id)">加入收藏夹</button>
      </div>
      <div class="Ycont">
        <button
          class="R1"
          v-if="isPhone==''"
          open-type="getPhoneNumber"
          @getphonenumber="getPhoneNumber"
        >立即购买</button>
        <button
          class="R1"
          v-else
          @click="payCourse(courseDetail.id,courseDetail.coursePrice)"
          :disabled="isDisable"
        >立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import evalist from "@/components/evaluate";
import catalog from "@/components/catalog";
import {
  getUserinfo,
  setUserinfo,
  setUserPhone,
  getUserPhone
} from "@/utils/auth";

export default {
  components: {
    evalist,
    catalog
  },

  data() {
    return {
      kcCont: "2018年消防工程师《消防安全综合能力》精讲班+冲刺班",
      isshow: false,
      isUserInfo: getUserinfo(), //是否授权过基本信息
      isPhone: getUserPhone(), //是否授权过电话号
      current: "tab1",
      height: "600",
      scrollTop: 10,
      toView: "tabjs",
      kcHeight: "",
      jsHeight: "",
      mlHeight: "",
      courseDetail: {}, //课程详情
      isDisable: false, //是否禁用
      evaConts: {
        isAnonymity: "", //是否匿名评价
        avatarUrl: "", //头像
        content: "", //评价内容
        nickName: "" //姓名
      } //评价
    };
  },
  mounted() {
    // let key_token=this.$store.getters.user.token
  },
  onLoad() {
    var that = this;
    wx.setNavigationBarTitle({
      title: "一键课程",
      success: function(res) {
        // success
      }
    });
    wx.getSystemInfo({
      success: function(res) {
        that.height = res.windowHeight - 43;
      }
    });

    // debugger;
    const id = this.$root.$mp.query.id;
    that.getCourseSeriesById(id);
    const obj = wx.createSelectorQuery();
    obj
      .selectAll("#tabkc")
      .boundingClientRect(function(e) {
        console.log(e);
        that.kcHeight = e[0].height;
      })
      .exec();
    obj
      .selectAll("#tabjs")
      .boundingClientRect(function(e) {
        console.log(e);
        that.jsHeight = e[0].height;
      })
      .exec();
    obj
      .selectAll("#tabml")
      .boundingClientRect(function(e) {
        console.log(e);
        that.mlHeight = e[0].height;
      })
      .exec();
    console.log(that.kcHeight);
    console.log(that.jsHeight);
    console.log(that.mlHeight);
  },
  methods: {
    payCourse(id, price) {
      var that = this;
      that.$api.user
        .createWaitPayOrder({
          price: price,
          seriesId: id
        })
        .then(res => {
          if (+res.code === 1) {
            // debugger;
            //获取支付参数
            that.$api.user
              .payWaitOrder({
                orderNum: res.data.orderNum,
                price: res.data.price
              })
              .then(res => {
                debugger;
                if (+res.code === 1) {
                }
              })
              .catch(error => {
                console.log(error);
                wx.showToast({
                  title: "网络异常",
                  icon: "none",
                  duration: 1000
                });
              });
          }
        })
        .catch(error => {
          console.log(error);
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    },
    getPhoneNumber(e) {
      var that = this;
      that.$api.user
        .getDecryptWxPhone({
          encryptedData: e.target.encryptedData,
          iv: e.target.iv
        })
        .then(res => {
          //  debugger;
          if (+res.code === 1) {
            const phoneNmber = JSON.parse(res.data.data.userTel);
            setUserPhone(phoneNmber.phoneNumber);
            that.isPhone = getUserPhone();
            // that.form_data.userTel = res.data.phoneNumber;
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
    },
    async onGotUserInfo(e) {
      await this.$store.dispatch("SetUserMes", e);
      this.isUserInfo = getUserinfo();
    },
    saveMyCollect(id) {
      this.$api.user
        .saveMyCollect({
          id: id
        })
        .then(res => {
          if (+res.code === 1) {
            wx.showToast({
              title: "收藏成功",
              icon: "none",
              duration: 2000
            });
          }
        })
        .catch(error => {
          console.log(error);
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    },
    handleChange(e) {
      console.log(e);
      if (e.mp.detail.key) {
        this.current = e.mp.detail.key;
        switch (e.mp.detail.key) {
          case "tab1":
            this.toView = "tabkc";
            break;
          case "tab2":
            this.toView = "tabjs";
            break;
          case "tab3":
            this.toView = "tabml";
            break;

          default:
            break;
        }
      }
    },
    //根据id查询课程详情
    async getCourseSeriesById(id) {
      await this.$api.user
        .getCourseSeriesById({
          id: id
        })
        .then(res => {
          if (+res.code === 1) {
            this.courseDetail = res.data;
            this.evaConts.isAnonymity = res.data.isAnonymity;
            this.evaConts.avatarUrl = res.data.avatarUrl;
            this.evaConts.content = res.data.content;
            this.evaConts.nickName = res.data.nickName;
            // debugger
          }
        })
        .catch(error => {
          console.log(error);
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    },
    upper() {
      // debugger
    },
    scroll(e) {
      console.log(e);
      // debugger
      const scrollTop = +e.mp.detail.scrollTop;
      const tab2 = this.kcHeight + this.jsHeight;
      console.log(tab2);
      console.log(scrollTop);
      // debugger
      if (scrollTop > this.kcHeight && scrollTop < tab2) {
        this.isshow = true;
        this.current = "tab2";
      } else if (scrollTop < this.kcHeight && scrollTop > 300) {
        this.current = "tab1";
      } else if (scrollTop > tab2) {
        this.current = "tab3";
      } else if (scrollTop < 225) {
        this.isshow = false;
      }
      // debugger
    },
    lower() {}
  },
  onShow() {}
};
</script>

<style>
button::after {
  border: none;
}
.courseContain {
  width: 100%;
  background-color: rgba(245, 245, 247, 1);
}
.courseTabKc,
.courseTabJs,
.courseTabMl {
  width: 100%;
  background-color: #fff;
  padding-top: 1px;
}
.tabKcImg {
  width: 100%;
  height: 225px;
  background-color: rgba(184, 182, 196, 1);
}
.tabKcImg img {
  width: 100%;
  height: 100%;
}
.courseTabKc > p {
  font-size: 25px;
  width: 70px;
  font-family: ArialMT;
  font-weight: 400;
  color: rgba(255, 69, 65, 1);
  margin: 20px auto 18px 16px;
}
.learnTotal {
  width: 70px;
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(184, 182, 196, 1);
  margin: 0px auto 20px 16px;
}
.courseTabKc p > span {
  font-size: 13px;
}
.tabKcCont {
  width: 92%;
  margin: 0px auto 15px 16px;
  font-size: 21px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 82, 1);
}
.zhanwei {
  width: 100%;
  height: 15px;
  background: rgba(245, 245, 247, 1);
}
.tabKcTime {
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.K1 {
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(184, 182, 196, 1);
  text-align: center;
}
.K2 {
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 82, 1);
  padding-top: 9px;
  text-align: center;
}
.evaluate {
  width: 100%;
}
.evaluateTitle {
  width: 100%;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  margin: 20px auto 20px auto;
}
.evaluateTitle > p {
  font-size: 21px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(54, 52, 69, 1);
}
.evaluateTitle > p > span {
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(184, 182, 196, 1);
}
.evalLeft {
  display: inline-block;
  width: 6px;
  height: 20px;
  background: rgba(100, 156, 255, 1);
  margin-right: 9px;
}
.evalLine {
  width: 92%;
  height: 0.5px;
  margin: 0 auto;
  background: rgba(235, 235, 235, 1);
}
.moreEval {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 82, 1);
  margin: 17px auto 17px auto;
}
.courseTabJsCont {
  width: 92%;
  height: 700px;
  margin: 0 auto;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.zhanwei1 {
  width: 100%;
  height: 48px;
}
.courseFooter {
  width: 100%;
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  /* right: 4px; */
  border-top: 0.5px solid rgba(240, 240, 240, 1);
}
.M1 {
  flex: 0 0 42%;
  /* text-align: center; */
  padding-left: 15px;
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 82, 1);
}

.M1 span {
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(255, 69, 65, 1);
}
.Ycont {
  flex: 0 0 28%;
}
.Y1 {
  width: 100%;
  text-align: center;
  line-height: 49px;
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background: rgba(255, 162, 0, 1);
  border-radius: 0px;
}
.R1 {
  width: 100%;

  text-align: center;
  line-height: 49px;
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background: rgba(255, 69, 65, 1);
  border-radius: 0px;
  /* padding-right: 2px */
}
</style>
