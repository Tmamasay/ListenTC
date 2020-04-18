<template>
  <div calss="contain_index">
    <div
      class="index_top"
      style="background-image: url(../../../../../static/images/index/bg_top.png)"
    >
      <div class="user_operation">
        <div class="selt" v-if="gradeList&&gradeList.length>0">
          <seletline :gradeLists="gradeList" @getLevelCode="getLevelCode"></seletline>
        </div>

        <div class="mine_info" @click="isWxLogin">
          <div class="user_img">
            <div class="message_num">8</div>
            <img :src="userInfo.avatarUrl" style="width:100%;height:100%" alt srcset />
          </div>
          <div class="my">我的</div>
        </div>
      </div>

      <div class="lunbo_contain" v-if="bannerActivityList&&bannerActivityList.bannerList">
        <lunbo :imgUrls="bannerActivityList.bannerList"></lunbo>
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
        v-if="everydayReadCont"
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

      <div class="act_lunbo" v-if="bannerActivityList&&bannerActivityList.works">
        <turb :imgUrls="bannerActivityList.works"></turb>
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
        <div class="area">重庆专区</div>
        <div class="tab">
          <button class="active">朗读</button>
          <button>演讲</button>
          <button>征文</button>
        </div>
      </div>

      <div class="tabCont">
        <!-- <i-tabs current="tab1" @change="handleChange" i-class="detailTabs">
          <i-tab key="tab1" title="小学组"></i-tab>
          <i-tab key="tab2" title="初中组"></i-tab>
          <i-tab key="tab3" title="高中组"></i-tab>
          <i-tab key="tab4" title="中职组"></i-tab>
        </i-tabs>-->
      </div>

      <div class="content">
        <div class="content_item" v-for="(index,item) in activityRankCont" :key="item.reviewItemId">
          <div class="header_item" style="background-image:url(https://www.dummyimage.com/60x60)">
            <div
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/first.png)"
            >1</div>
          </div>
          <div class="user_info">
            <div class="userinfo_top">
              <div>
                <div class="content_name">杨子轩《美丽的春天》</div>
                <div class="content_school">杨紫璐小学</div>
              </div>
              <div class="operation">
                <img src="../../../static/images/index/bofangyuying.png" alt />
              </div>
            </div>
            <div class="userinfo_b">
              <div class="point flexbox">
                <div class="point_left">
                  <span class="guankan">
                    <img src="../../../static/images/index/guankan.png" alt /> 222
                  </span>
                  <span class="dianzhan">
                    <img src="../../../static/images/index/dianzhan.png" alt /> 222
                  </span>
                </div>
                <div class="point_right">
                  专家评分：
                  <span>198分</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content_item">
          <div class="header_item" style="background-image:url(https://www.dummyimage.com/60x60)">
            <div
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/second.png)"
            >2</div>
          </div>
          <div class="user_info">
            <div class="userinfo_top">
              <div>
                <div class="content_name">杨子轩《美丽的春天》</div>
                <div class="content_school">杨紫璐小学</div>
              </div>
              <div class="operation">
                <img src="../../../static/images/index/dabofang.png" alt />
              </div>
            </div>
            <div class="userinfo_b">
              <div class="point flexbox">
                <div class="point_left">
                  <span class="guankan">
                    <img src="../../../static/images/index/guankan.png" alt /> 222
                  </span>
                  <span class="dianzhan">
                    <img src="../../../static/images/index/dianzhan.png" alt /> 222
                  </span>
                </div>
                <div class="point_right">
                  专家评分：
                  <span>198分</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content_item">
          <div class="header_item" style="background-image:url(https://www.dummyimage.com/60x60)">
            <div
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/third.png)"
            >3</div>
          </div>
          <div class="user_info">
            <div class="userinfo_top">
              <div>
                <div class="content_name">杨子轩《美丽的春天》</div>
                <div class="content_school">杨紫璐小学</div>
              </div>
              <div class="operation">
                <img src="../../../static/images/index/pic.png" alt />
              </div>
            </div>
            <div class="userinfo_b">
              <div class="point flexbox">
                <div class="point_left">
                  <span class="guankan">
                    <img src="../../../static/images/index/guankan.png" alt /> 222
                  </span>
                  <span class="dianzhan">
                    <img src="../../../static/images/index/dianzhan.png" alt /> 222
                  </span>
                </div>
                <div class="point_right">
                  专家评分：
                  <span>198分</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content_item">
          <div class="header_item" style="background-image:url(https://www.dummyimage.com/60x60)">
            <div
              class="header_bg"
              style="background-image:url(../../../../../static/images/index/fouth.png)"
            >4</div>
          </div>
          <div class="user_info">
            <div class="userinfo_top">
              <div>
                <div class="content_name">杨子轩《美丽的春天》</div>
                <div class="content_school">杨紫璐小学</div>
              </div>
              <div class="operation">
                <img src="../../../static/images/index/pic.png" alt />
              </div>
            </div>
            <div class="userinfo_b">
              <div class="point flexbox">
                <div class="point_left">
                  <span class="guankan">
                    <img src="../../../static/images/index/guankan.png" alt /> 222
                  </span>
                  <span class="dianzhan">
                    <img src="../../../static/images/index/dianzhan.png" alt /> 222
                  </span>
                </div>
                <div class="point_right">
                  专家评分：
                  <span>198分</span>
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
        <div class="yitem"  v-for="item in reviewRecommendList" :key="item.reviewItemId">
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
  </div>
</template>

<script>
import tangy from "@/api/tangy";
import lunbo from "@/components/lunbo";
import seletline from "@/components/select";
import turb from "@/components/turb";
import { getToken, getUserinfo, getLevelCode } from "@/utils/auth";
export default {
  components: {
    lunbo, //轮播
    turb,
    seletline
  },
  data() {
    return {
      levelCode: getLevelCode() || "", //年级
      everydayReadCont: null, //每日一读容器
      activityRankCont: [], //排行榜
      bannerActivityList: [], //banner图容器
      courseRecommendList: [], //首页推荐课程
      reviewRecommendList: [], //首页少年之声
      gradeList: [],
      userInfo: {},
      imgUrls: [
        {
          imgUrl: "https://www.dummyimage.com/355x185",
          jumpUrl: `/pages/index/activity/detail/main`
        },
        {
          imgUrl: "https://www.dummyimage.com/355x185",
          jumpUrl: `/pages/index/activity/detail/main`
        },
        {
          imgUrl: "https://www.dummyimage.com/355x185",
          jumpUrl: `/pages/index/activity/detail/main`
        }
      ]
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
      }
    }
  },
  computed: {},
  onShow() {
    this.userInfo = getUserinfo();
    if (this.userInfo) {
      this.getAttribute(); //年级
      // if(getLevelCode()){

      // }
    }
  },
  methods: {
    getLevelCode() {
      this.levelCode = getLevelCode();
    },
    // //所有年级api
    // getGrade() {
    //   this.$api.chengx.getGrade().then(res => {
    //     this.gradeList = res.result.levelList;
    //     console.log(this.gradeList);
    //     console.log("年级列表++++++++++++++++++++++++++++++++");
    //   });
    // },
    getAttribute() {
      this.$api.tangy.getAttribute().then(res => {
        this.gradeList = res.result.levelList || [];
      });
    },

    //每日一读
    getEveryDayRead() {
      const params = {
        levelCode: this.$store.getters.levelCode,
        userId: 456061438071431200,
        limit: 1
      };
      this.$api.tangy.everydayRead(params).then(res => {
        console.log("每日一读++++++++++++++++++++++++++++++++");
        this.everydayReadCont = res.result;
      });
    },
    //首页推荐课程 reviewRecommend
    courseRecommend() {
      const params = {
        levelCode: this.$store.getters.levelCode
      };
      this.$api.tangy.courseRecommend(params).then(res => {
        console.log("首页推荐课程++++++++++++++++++++++++++++++++");
        this.courseRecommendList = res.result;
      });
    },
    //首页少年之声
    reviewRecommend() {
      const params = {
        levelCode: this.$store.getters.levelCode
      };
      this.$api.tangy.reviewRecommend(params).then(res => {
        console.log("首页少年之声++++++++++++++++++++++++++++++++");
        this.reviewRecommendList = res.result;
      });
    },
    //获取消息
    getMessage() {
      const params = {
        currentPage: 1,
        pageSize: 10,
        userId: 456061438071431200
      };
      this.$api.tangy.message(params).then(res => {
        console.log("获取消息++++++++++++++++++++++++++++++++");
        console.log(res);
      });
    },
    //活动榜单
    getActivityRank() {
      const params = {
        currentPage: 1,
        pageSize: 10,
        activityId: 202003050007,
        userId: 456061438071431200,
        worksStage: 1,
        groupCode: 1003001002,
        listCode: 1004001001
      };
      this.$api.tangy.activityRank(params).then(res => {
        console.log("活动榜单++++++++++++++++++++++++++++++++");
        // console.log(res);
        this.activityRankCont = res.result.pageResults;
      });
    },
    //区域活动
    getActivityArea() {
      const params = {
        currentPage: 1,
        pageSize: 10,
        areaId: "7953772"
      };
      this.$api.tangy.activityArea(params).then(res => {
        console.log("区域活动++++++++++++++++++++++++++++++++");
        console.log(res);
      });
    },

    //获取大区
    getArea() {
      this.$api.tangy.area().then(res => {
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
    getActivityList() {
      const params = {
        levelCode: this.$store.getters.levelCode,
        userId: "1",
        limit: 1,
        lng: "123",
        lat: "123"
      };
      this.$api.tangy.activityList(params).then(res => {
        console.log("获取banner列表+++++++++++++++++");
        this.bannerActivityList = res.result;
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
    }
  }
};
</script>

<style scoped>
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
  z-index: 9999;
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
