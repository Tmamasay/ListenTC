<template>
  <div calss="contain_index">
    <div
      class="index_top"
      style="background-image: url(../../../../../static/images/index/bg_top.png)"
    >
      <div class="user_operation">
        <!-- <div class="selt" v-if="gradeList&&gradeList.length>0"> -->
        <div class="selt" @click="powerDrawer" data-statu="open">
          {{levelCodeName}}
          <span class="sjx"></span>
          <!-- <seletline :gradeLists="gradeList" @getLevelCode="getLevelCode"></seletline> -->
        </div>

        <div class="mine_info" @click="isWxLogin">
          <div class="user_img">
            <div class="message_num">8</div>
            <img :src="userInfo.headImageUrl" style="width:100%;height:100%" alt srcset />
          </div>
          <div class="my">我的</div>
        </div>
      </div>

      <div class="lunbo_contain" v-if="works">
        <lunbo :imgUrls="works"></lunbo>
      </div>

      <div class="news">
        <swiper
          class="newswiper"
          circular="false"
          indicator-dots="true"
          indicator-color="rgba(255,255,255,0.8)"
          indicator-active-color="rgba(255,255,255,1)"
          autoplay="false"
          interval="5000"
          duration="1000"
          vertical="true"
          style="height:25px"
        >
          <block>
            <swiper-item @click="gotoMessage">
              <img class="bofang inline" src="../../../static/images/index/bofang.png" alt />
              <div class="message_text inline">歌唱关于全国青少年“五好小公民”主题教…</div>
              <div class="message_date inline fr">
                11月22日
                <img
                  src="../../../static/images/index/go_right.png"
                  class="go_right inline"
                  alt
                />
              </div>
              <!-- <navigator :url="'../../'+item.jumpUrl" open-type="navigate"> -->
              <!-- <navigator url='../../pages/index/chaihb/main' open-type="navigate"> -->
              <!-- <navigator > -->
              <!-- </navigator> -->
            </swiper-item>
            <swiper-item>
              <img class="bofang inline" src="../../../static/images/index/bofang.png" alt />
              <div class="message_text inline">歌唱关于全国青少年“五好小公民”主题教…</div>
              <div class="message_date inline fr">
                11月22日
                <img
                  src="../../../static/images/index/go_right.png"
                  class="go_right inline"
                  alt
                />
              </div>
              <!-- <navigator :url="'../../'+item.jumpUrl" open-type="navigate"> -->
              <!-- <navigator url='../../pages/index/chaihb/main' open-type="navigate"> -->
              <!-- <navigator > -->
              <!-- </navigator> -->
            </swiper-item>
          </block>
        </swiper>
      </div>
    </div>

    <!-- 每日一读 -->
    <div class="every_day">
      <div
        class="reading_box"
        style="background-image:url(../../../../../static/images/index/maohao.png)"
        @click="gotoEverydayRead"
        v-if="everydayReadCont&&everydayReadCont.length"
      >
        <div class="read_text">{{everydayReadCont[0].content}}</div>
        <div class="read_people">——{{everydayReadCont[0].author}}</div>
        <img src="../../../static/images/index/every_day.png" alt class="read_img" />
      </div>
    </div>

    <!-- 活动专区 -->
    <div class="normalbox">
      <div class="titlebox">
        <div
          class="title_text"
          style="background-image:url(../../../static/images/index/zuzi.png)"
        >活动专区</div>
        <div class="more" @click="gotoActivityArea">
          更多
          <img src="../../../static/images/index/go_right.png" class="go_right inline" alt />
        </div>
      </div>

      <div class="act_lunbo" v-if="bookList">
        <turb :imgUrls="bookList"></turb>
      </div>
    </div>
    <!-- 活动排行榜 -->
    <div class="normalbox">
      <div class="titlebox">
        <div
          class="title_text"
          style="background-image:url(../../../static/images/index/zuzi.png)"
        >活动排行榜</div>
      </div>

      <div class="flexbox">
        <div class="area">
          <div class="selt" @click="powerDrawer2" data-statu="open">
            {{areaName}}
            <span class="sjx"></span>
          </div>
        </div>
        <!-- <div class="tab">
          <button class="active">朗读</button>
          <button>演讲</button>
          <button>征文</button>
        </div>-->
      </div>

      <div class="tabCont">
        <i-tabs :current="currenttab" @change="handleChange" i-class="detailTabs">
          <i-tab v-for="item in groupList" :key="item.groupCode" :title="item.groupName"></i-tab>
        </i-tabs>
      </div>

      <div class="content">
        <div class="content_item" v-for="(item,index) in activityRankCont" :key="index">
          <div class="header_item" :style="{backgroundImage:'url('+item.imageUrl+')'}">
            <div
              v-if="item.ranking===1"
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/first.png)"
            >{{ item.ranking }}</div>
            <div
              v-else-if="item.ranking===2"
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/second.png)"
            >{{ item.ranking }}</div>
            <div
              v-else-if="item.ranking===3"
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/third.png)"
            >{{ item.ranking }}</div>
            <div
              v-else
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/fouth.png)"
            >{{ item.ranking }}</div>
          </div>
          <div class="user_info">
            <div class="userinfo_top">
              <div>
                <div class="content_name">{{item.author}}《{{item.title}}》</div>
                <div class="content_school">{{item.schoolName}}</div>
              </div>
              <div class="operation">
                <img src="../../../static/images/index/bofangyuying.png" alt />
              </div>
            </div>
            <div class="userinfo_b">
              <div class="point flexbox">
                <div class="point_left">
                  <span class="guankan">
                    <img src="../../../static/images/index/guankan.png" alt />
                    {{item.listenNum}}
                  </span>
                  <span class="dianzhan">
                    <img src="../../../static/images/index/dianzhan.png" alt />
                    {{item.likeNum}}
                  </span>
                </div>
                <div class="point_right">
                  专家评分：
                  <span>{{item.score}}分</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="all_rank" @click="gotoActivityDetail">
        <img src="../../../static/images/index/more.png" alt />
        点击查看完整榜单
      </div>
    </div>
    <div class="putonghua">
      <img class="act_putonghua" src="../../../static/images/index/putonghua.png" alt />
    </div>

    <!-- 读本推荐 -->
    <div class="normalbox">
      <div class="titlebox">
        <div
          class="title_text"
          style="background-image:url(../../../static/images/index/zuzi.png)"
        >读本推荐</div>
      </div>
      <div class="books" @click="gotoReadBook">
        <div class="first_book">
          <img class="left_pic" src="https://www.dummyimage.com/160x90" alt />
          <div class="ovl">
            <div class="book_title">美好生活 劳动创造</div>
            <div class="book_content">朗诵标准音 · 小学版</div>
            <div class="book_people">
              <img class="org_ej" src="../../../static/images/index/orangeerji.png" alt /> 1667人
            </div>
          </div>
        </div>
      </div>
      <div class="radios">
        <img class="open" src="../../../static/images/index/dabofang.png" alt />
        <div class="ovl h100">
          1. 前响复元音韵母
          <img class="mianfei" src="../../../static/images/index/mianfei.png" alt />
          <div class="fr book_people">
            <img class="org_ej" src="../../../static/images/index/orangeerji.png" alt /> 1667人
          </div>
        </div>
      </div>
      <div class="radios">
        <img class="open" src="../../../static/images/index/dabofang.png" alt />
        <div class="ovl h100">
          1. 前响复元音韵母
          <img class="mianfei" src="../../../static/images/index/mianfei.png" alt />
          <div class="fr book_people">
            <img class="org_ej" src="../../../static/images/index/orangeerji.png" alt /> 1667人
          </div>
        </div>
      </div>
    </div>

    <!-- 读本推荐 -->

    <div class="normalbox">
      <div class="titlebox">
        <div
          class="title_text"
          style="background-image:url(../../../static/images/index/zuzi.png)"
        >教材推荐</div>
      </div>

      <div
        class="bookrack"
        style="background-image:url(../../../../../static/images/index/bookrack.png)"
        v-if="courseRecommendList&&courseRecommendList.length"
      >
        <img
          v-for="item in courseRecommendList"
          :src="item.imageUrl"
          :key="item.courseId"
          alt
          @click="gotoBookDetail"
        />
        <!-- <img src="https://www.dummyimage.com/100x140" alt /> -->
        <!-- <img src="https://www.dummyimage.com/100x140" alt /> -->
      </div>
      <!-- <div
        class="bookrack mb0"
        style="background-image:url(../../../../../static/images/index/bookrack.png)"
      >
        <img src="https://www.dummyimage.com/100x140" alt />
        <img src="https://www.dummyimage.com/100x140" alt />
        <img src="https://www.dummyimage.com/100x140" alt />
      </div>-->
    </div>

    <!-- 少年之声 -->

    <div class="normalbox">
      <div class="titlebox">
        <div
          class="title_text"
          style="background-image:url(../../../static/images/index/zuzi.png)"
        >少年之声</div>
        <div class="more" @click="gotoVoiceofchildren">
          更多
          <img src="../../../static/images/index/go_right.png" class="go_right inline" alt />
        </div>
      </div>

      <div class="young" v-if="reviewRecommendList&&reviewRecommendList.length">
        <div
          class="yitem"
          v-for="item in reviewRecommendList"
          :key="item.reviewItemId"
          @click="gotoVoiceofchildrenDetail(item.reviewItemId)"
        >
          <img :src="item.imageUrl" alt />
        </div>

        <!-- <div class="yitem">
          <img src="https://www.dummyimage.com/170x94" alt />
        </div>

        <div class="yitem">
          <img src="https://www.dummyimage.com/170x94" alt />
        </div>

        <div class="yitem">
          <img src="https://www.dummyimage.com/170x94" alt="1" />
        </div>-->
      </div>
    </div>

    <div v-if="guideStep == 1 && guide">
      <div class="mask-step-1" v-if="guide"></div>
      <img class="grade-choose-arrow" src="../../../static/images/index/grade-choose-arrow.png" alt />
      <div class="guide-text-1">
        点击这里选择学龄段
        <br />显示适合你的内容
      </div>
      <div class="guide-btn-1" @click="nextStep">我知道了</div>
    </div>
    <div v-if="guideStep == 2">
      <div class="mask-step-2" v-if="guide"></div>
      <img
        class="personal-center-arrow"
        src="../../../static/images/index/personal-center-arrow.png"
        alt
      />
      <div class="guide-text-2">点击这里进入个人中心</div>
      <div class="guide-btn-2" @click="complete">我知道了</div>
    </div>
    <animation-draw
      ref="animationDrawer"
      :showName="'年级'"
      @getValue="getLevelCodeValue"
      :list="gradeList"
      :showModalStatus="showModalStatus"
    ></animation-draw>
    <animation-draw
      ref="animationDrawer2"
      :showName="'专区'"
      @getValue="getRankValue"
      :list="areaList"
      :showModalStatus="showRankModal"
    ></animation-draw>
  </div>
</template>

<script>
import tangy from "@/api/tangy";
import lunbo from "@/components/lunbo";
import seletline from "@/components/select";
import areaselect from "@/components/areaselect";
import animationDraw from "@/components/animationDraw";
import turb from "@/components/turb";
import {
  getToken,
  getUserinfo,
  getUserId,
  getLevelCode,
  getActCode,
  setActCode,
  setActivityId,
  getActivityId,
  setLevelCode,
  getLevelName
} from "@/utils/auth";
export default {
  components: {
    lunbo, //轮播
    turb,
    seletline,
    areaselect,
    animationDraw
  },
  data() {
    return {
      levelCode: getLevelCode() || "", //年级
      levelCodeName: getLevelName() || "请选择",
      everydayReadCont: null, //每日一读容器
      activityRankCont: [], //排行榜
      bannerActivityList: null, //banner图容器
      courseRecommendList: [], //首页推荐课程
      reviewRecommendList: [], //首页少年之声
      gradeList: [],
      actCode: getActCode() || "",
      areaList: [],
      userInfo: {},
      showlevelCode: true,
      groupList: [], //当前活动分组列表
      activityId: getActivityId(), //当前活动id
      currenttab: "", //当前组
      guide: false,
      guideStep: 1,
      works: [],
      bookList: [],
      userId: getUserId(),
      showModalStatus: false,
      showRankModal: false,
      animation: {},
      animationData: {},
      areaName: "请选择"
    };
  },
  watch: {
    levelCode: function(newval, oldval) {
      if (newval) {
        this.getEveryDayRead();
        this.getActivityList();
        this.getSysInfo();
        this.courseRecommend();
        this.reviewRecommend();
        this.getArea();
        this.getActivityArea();
        this.getActivityRank();
        this.getMessage();
        this.getIndexBanner();
      }
    },
    actCode: function(nv, ov) {
      if (nv) {
        this.getActivityArea();
      }
    },
    currenttab: function(nv, ov) {
      if (nv) {
        this.getActivityRank();
      }
    }
  },
  computed: {},
  onShow() {
    this.levelCodeName = getLevelName();
    debugger;
    console.log(this.levelCodeName);

    this.userId = getUserId();
    if (this.userId) {
      this.getAttribute(); //年级
      this.getCurrentUserInfo();
      if (this.levelCode !== "" && this.levelCode !== "请选择") {
        this.getEveryDayRead();
        this.getActivityList();
        this.getSysInfo();
        this.courseRecommend();
        this.reviewRecommend();
        this.getArea();
        this.getActivityArea();
        this.getActivityRank();
        this.getMessage();
        this.getIndexBanner();
      }
    } else {
      wx.navigateTo({
        url: `/pages/shouquan/main`
      });
    }
  },
  methods: {
    getIndexBanner() {
      this.$api.tangy.getIndexBanner().then(res => {
        this.works = res.result;
      });
    },
    getRankValue(e) {
      this.areaName = e.name;
      this.actCode = e.areaId;
      setActCode(e.areaId);
      this.getActivityArea();
    },
    powerDrawer(e) {
      this.$refs.animationDrawer.powerDrawer(e);
    },
    powerDrawer2(e) {
      this.$refs.animationDrawer2.powerDrawer(e);
    },
    getCurrentUserInfo() {
      this.$api.tangy.userInfo().then(res => {
        this.userInfo = res.result;
        this.levelCode = res.result.levelCode;
        console.log(res);
      });
    },
    nextStep() {
      this.guideStep = 2;
    },
    complete() {
      this.guideStep = 0;
    },
    closelevelCode() {
      this.showlevelCode = false;
    },
    getLevelCodeValue(e) {
      this.levelCode = e.value;
      this.levelCodeName = e.name;
      setLevelCode(e.value);
    },
    async getAttribute() {
      await this.$api.tangy.getAttribute().then(res => {
        this.gradeList = res.result.levelList || [];
      });
    },
    getActivityDetail() {
      const params = {
        activityId: this.activityId,
        stage: 1,
        userId: getUserId()
      };
      this.$api.tangy.activityDetail(params).then(res => {
        this.groupList = res.result.groupList;
        this.currenttab = this.groupList[0].groupCode;
        this.activityDetailCont = res.result;
      });
    },
    //改变活动分组
    handleChange(e) {
      this.currenttab = e.mp.detail.key;
    },
    //区域活动
    async getActivityArea() {
      const params = {
        currentPage: 1,
        pageSize: 10,
        areaId: this.actCode
      };
      await this.$api.tangy.activityArea(params).then(res => {
        if (res.result && res.result.pageResults.length > 0) {
          this.activityId = res.result.pageResults[0].activityId;
          setActivityId(this.activityId);
          this.getActivityDetail();
          this.getActivityRank();
        } else {
          wx.showToast({
            title: "当前专区未开展活动",
            icon: "none",
            duration: 1000
          });
        }
        console.log(res);
      });
    },
    //每日一读
    async getEveryDayRead() {
      const params = {
        levelCode: getLevelCode(),
        userId: getUserId(),
        limit: 10
      };
      await this.$api.tangy.everydayRead(params).then(res => {
        this.everydayReadCont = res.result;
      });
    },
    //首页推荐课程 reviewRecommend
    async courseRecommend() {
      const params = {
        levelCode: getLevelCode()
      };
      await this.$api.tangy.courseRecommend(params).then(res => {
        this.courseRecommendList = res.result;
      });
    },
    //首页少年之声
    async reviewRecommend() {
      const params = {
        levelCode: getLevelCode()
      };
      await this.$api.tangy.reviewRecommend(params).then(res => {
        this.reviewRecommendList = res.result;
      });
    },
    //获取消息
    async getMessage() {
      const params = {
        currentPage: 1,
        pageSize: 10,
        userId: getUserId()
      };
      await this.$api.tangy.message(params).then(res => {
        console.log("获取消息++++++++++++++++++++++++++++++++");
        console.log(res);
      });
    },
    //活动榜单
    async getActivityRank() {
      const params = {
        currentPage: 1,
        pageSize: 10,
        activityId: this.activityId,
        userId: getUserId(),
        worksStage: 1,
        groupCode: this.currenttab,
        listCode: 1004001001 //1004001001热门作品  1004001002分数榜单   1004001003人气榜单  1004001004最新作品
      };
      await this.$api.tangy.activityRank(params).then(res => {
        console.log("活动榜单++++++++++++++++++++++++++++++++");
        // console.log(res);
        this.activityRankCont = res.result.pageResults;
      });
    },

    //获取大区
    async getArea() {
      await this.$api.tangy.area().then(res => {
        this.areaList = res.result;
        console.log("获取大区++++++++++++++++++++++++++++++++");
        console.log(res);
      });
    },
    getSysInfo() {
      wx.getSystemInfo({
        success: function(res) {
          console.log("设备信息++++++++++++++++++++++++++++++++");
          console.log(res);
        }
      });
    },
    gotoEverydayRead() {
      wx.navigateTo({
        url: `/pages/index/everydayread/main` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    //获取banner列表
    async getActivityList() {
      const params = {
        levelCode: getLevelCode(),
        userId: getUserId(),
        limit: 1,
        lng: "123",
        lat: "123"
      };
      await this.$api.tangy.activityList(params).then(res => {
        this.bookList = res.result.bannerList.map(res => {
          res.jumpUrl = "/pages/index/activity/detail/main";
          return res;
        });
      });
    },
    isWxLogin() {
      if (!getToken()) {
        // if (0) {
        wx.navigateTo({
          url: `/pages/shouquan/main` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
        });
      } else {
        wx.navigateTo({
          url: `/pages/index/setUp/main` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
        });
      }
      // const that = this;
      // wx.login({
      //   success: function(res) {
      //     console.log(res.code);
      //     if (res.code) {
      //       //登录获取token
      //       that.$store.dispatch("LoginByWX", res.code).then(res => {
      //         ;
      //       });
      //     }
      //   }
      // });
    },
    gotoActivityArea() {
      wx.navigateTo({
        url: `/pages/index/activity/main`
      });
    },
    gotoActivityDetail() {
      wx.navigateTo({
        url: `/pages/index/activity/detail/main`
      });
    },
    gotoVoiceofchildren() {
      wx.navigateTo({
        url: `/pages/index/voiceofchildren/main`
      });
    },
    gotoReadBook() {
      wx.navigateTo({
        url: `/pages/read/catalog/main`
      });
    },
    gotoBookDetail() {
      wx.navigateTo({
        url: `/pages/read/catalog/main`
      });
    },
    gotoMessage() {
      wx.navigateTo({
        url: `/pages/index/setUp/messageCenter/main`
      });
    },
    gotoVoiceofchildrenDetail(id) {
      wx.navigateTo({
        url: `/pages/index/voiceofchildrendetail/main?bookId=${id}`
      });
    }
  }
};
</script>

<style scoped>
/*button*/
.btn {
  width: 80%;
  padding: 20rpx 0;
  border-radius: 10rpx;
  text-align: center;
  margin: 40rpx 10%;
  background: #0c1939;
  color: #fff;
}

.mask-step-1 {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 5px;
  border: 1 solid #000;
  opacity: 0.6;
  box-shadow: 0 0 0 9000px #000;
  pointer-events: none;
}
.mask-step-2 {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 5px;
  border: 1 solid #000;
  opacity: 0.6;
  box-shadow: 0 0 0 9000px #000;
  pointer-events: none;
}
.grade-choose-arrow {
  width: 56px;
  height: 49px;
  position: absolute;
  top: 60px;
  left: 85px;
}
.personal-center-arrow {
  width: 56px;
  height: 49px;
  position: absolute;
  top: 60px;
  right: 85px;
}
.guide-text-1 {
  font-size: 14px;
  color: rgb(255, 255, 255);
  text-align: center;
  position: absolute;
  top: 110px;
  left: 85px;
}
.guide-text-2 {
  font-size: 14px;
  color: rgb(255, 255, 255);
  text-align: center;
  position: absolute;
  top: 110px;
  right: 85px;
}
.guide-btn-1 {
  font-size: 12px;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 217, 72);
  width: 75px;
  height: 28px;
  position: absolute;
  top: 159px;
  left: 102px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.guide-btn-2 {
  font-size: 12px;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 217, 72);
  width: 75px;
  height: 28px;
  position: absolute;
  top: 139px;
  right: 120px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
}
.leftbox {
  float: left;
  height: 100%;
  width: 100px;
  padding: 10px;
  background-color: #fff;
}
.young {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.yitem {
  width: 170px;
  height: 94px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.yitem img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.bookrack {
  margin-bottom: 15px;
  padding: 0 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  gap: 15px;
  height: 165px;
  width: 100%;
  background: no-repeat bottom center;
  background-size: 100%;
}
.bookrack img {
  display: inline-block;
  width: 100px;
  height: 140px;
  border-radius: 5px;
}
.mb0 {
  margin-bottom: 0;
}
.h100 {
  height: 100%;
  border-bottom: 1px dashed #eeeded;
}
.open {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  float: left;
}
.mianfei {
  width: 56px;
  height: 19px;
  vertical-align: middle;
  margin-left: 10px;
}
.org_ej {
  width: 11px;
  height: 10px;
}
.book_people {
  font-size: 12px;
  font-weight: 400;
  color: #fe5e5e;
  line-height: 24px;
}
.book_content {
  font-size: 12px;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
  line-height: 24px;
}
.book_title {
  line-height: 30px;
  font-size: 15px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.radios {
  height: 55px;
  padding-top: 15px;
  box-sizing: border-box;
  line-height: 25px;
  font-size: 15px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.first_book {
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px dashed #eeeded;
}
.first_book::after {
  display: block;
  clear: both;
  content: "";
}
.left_pic {
  width: 160px;
  height: 90px;
  float: left;
  margin-right: 11px;
  border-radius: 5px;
}
.ovl {
  overflow: hidden;
}
.putonghua {
  height: 140px;
  background: rgba(245, 245, 245, 1);
  width: 100%;
}
.act_putonghua {
  width: 100%;
  height: 100%;
}
.all_rank {
  height: 60px;
  padding: 25px 25px 5px;
  text-align: center;
  font-size: 10px;
  box-sizing: border-box;
  line-height: 20px;
  font-weight: 400;
  color: rgba(61, 146, 241, 1);
  padding-bottom: 60px;
}
.all_rank img {
  width: 20px;
  height: 4px;
  display: block;
  margin: auto;
}
.point {
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(145, 145, 145, 1);
}
.point_right span {
  color: #fe5e5e;
}
.point_left span {
  margin-right: 20px;
}
.point_left .guankan img {
  width: 17px;
  height: 12px;
}
.point_left .dianzhan img {
  width: 12px;
  height: 12px;
}
.operation {
  width: 28px;
  line-height: 56px;
}
.operation img {
  width: 28px;
  height: 28px;
}
.userinfo_top {
  display: flex;
  height: 40px;
  justify-content: space-between;
}
.content_school {
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
}
.content_name {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.sjx {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 10rpx solid transparent;
  border-right: 10rpx solid transparent;
  border-top: 10rpx solid #000;
  margin-left: 10rpx;
  vertical-align: middle;
}
.user_info {
  padding-left: 14px;
  height: 100%;
  width: calc(100% - 60px);
  border-bottom: 1px dashed #eeeded;
}
.content_item {
  box-sizing: border-box;
  display: flex;
  height: 110px;
  width: 100%;
  padding: 10px;
  padding-bottom: 0;
  padding-top: 28px;
}
.header_item {
  width: 60px;
  height: 60px;
  background: no-repeat center center;
  background-size: cover;
  border-radius: 50%;
}
.header_bg {
  width: 60px;
  height: 60px;
  background: no-repeat center center;
  background-size: cover;
  font-size: 10px;
  color: #fff;
  line-height: 104px;
  text-align: center;
}
.area {
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  color: rgba(67, 67, 67, 1);
}
.tab button {
  display: inline-block;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #8e8e8e;
  background-color: #f5f5f5;
  margin-left: 4px;
}
.tab button.active {
  color: #222;
  background-color: #ffd948;
}
.contain_index {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* height:800px; */
  background-color: green;
}
.flexbox {
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.index_top {
  width: 100%;
  height: 285px;
  background: no-repeat center top;
  background-size: 100%;
  box-sizing: border-box;
}
.user_operation {
  padding: 10px;
  height: 26px;
  display: flex;
  justify-content: space-between;
}
.user_img {
  display: inline-block;
  vertical-align: middle;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: #fff;
  position: relative;
}
.message_num {
  min-width: 12px;
  height: 12px;
  background-color: #fe5e5e;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -3px;
  margin-right: -3px;
  line-height: 12px;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.my {
  display: inline-block;
  font-size: 12px;
  vertical-align: middle;
  height: 26px;
  line-height: 26px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(67, 67, 67, 1);
}
.news {
  padding: 0 10px;
  margin-top: 20px;
  height: 25px;
  line-height: 25px;
}
.message_text {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
}
.message_date {
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
}
.bofang {
  width: 12px;
  height: 12px;
  margin-right: 5px;
}
.selt {
  font-size: 14px;
  line-height: 28px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(67, 67, 67, 1);
}
.go_right {
  width: 5px;
  height: 9px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.inline {
  display: inline-block;
  vertical-align: middle;
}
.lunbo_contain {
  width: calc(100% - 20px);
  margin: auto;
}

.every_day {
  width: 100%;
  height: 155px;
  background: rgba(245, 245, 245, 1);
  padding: 15px 10px;
  box-sizing: border-box;
}
.reading_box {
  width: 100%;
  height: 100%;
  position: relative;
  background: center center no-repeat;
  background-size: cover;
  padding-top: 20px;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: 2px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(67, 67, 67, 1);
  line-height: 24px;
}
.read_text {
  margin: 0 65px;
}
.read_people {
  padding: 0 25px;
  text-align: right;
}
.read_img {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -7px;
  margin-top: -7px;
  width: 56px;
  height: 56px;
}
.normalbox {
  padding: 30px 10px 10px;
}
.titlebox {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.title_text {
  background: no-repeat left center;
  background-size: 4px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(48, 48, 48, 1);
  line-height: 19px;
  padding-left: 13px;
}
.more {
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(109, 109, 109, 1);
}
</style>
