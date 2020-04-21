<!--活动专区-->
<template>
  <div class="activityDetailbox">
    <div class="act_header">
      <img class="act_img" :src="activityDetailCont.imageUrl" alt />
      <div class="rule" @click="showRule=true">活动规则</div>
    </div>
    <div class="songbox">
      <div class="textbox">
        <div class="title">{{activityDetailCont.title}}</div>
        <div class="num">
          报名：
          <span>{{activityDetailCont.applyNum}}</span>
        </div>
      </div>
    </div>

    <div class="stepbox">
      <div class="step" v-for="(item, index) in activityDetailCont.stageList" :key="index">
        <div :class="['steptextbox', {'active':item.start}]">
          <div class="cont">{{item.title}}</div>
          <div class="date">{{dateFormatUtil(item.beginTime)}}-{{dateFormatUtil(item.endTime)}}</div>
        </div>
        <div class="stepline">
          <div :class="['line', {'active':item.start}]"></div>
          <div :class="['stepNum', {'active':item.start}]">{{item.stage}}</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="ipt">
      <input type="text" placeholder="请输入作者姓名查询" />
    </div>
    <div class="tabCont">
      <i-tabs :current="currenttab" @change="handleChange" i-class="detailTabs">
        <i-tab
          v-for="item in activityDetailCont.groupList"
          :key="item.groupCode"
          :title="item.groupName"
        ></i-tab>
      </i-tabs>
    </div>
    <div class="typelist">
      <div
        :class="['type_item', {'active':  item.listCode===listCode}]"
        v-for="item in listCodeList"
        :key="item.listCode"
        @click="showListCode(item.listCode)"
      >{{item.listName}}</div>
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
              <img src="../../../../../static/images/index/bofangyuying.png" alt />
            </div>
          </div>
          <div class="userinfo_b">
            <div class="point flexbox">
              <div class="point_left">
                <span class="guankan">
                  <img src="../../../../../static/images/index/guankan.png" alt />
                  {{item.listenNum}}
                </span>
                <span class="dianzhan">
                  <img src="../../../../../static/images/index/dianzhan.png" alt />
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

    <div class="all_rank" @click="showMore">
      <img src="../../../../../static/images/index/more.png" alt />
      点击查看完整榜单
    </div>

    <div class="rulebox" v-if="showRule">
      <div class="tablecell">
        <div class="rules">
          <img class="ruletitle" src="../../../../../static/images/index/rules.png" alt />
          <div class="rulecontent">
            <div class="h1">活动时间：</div>
            <div class="h5">
              作品提交时间：
              即日起~5月28日24时
              统一评审时间：
              5月29日-5月31日，我们将会进入下一阶段的名单。
            </div>
            <div class="h1">活动须知：</div>
            <div class="h5">
              1、请点击活动详情页面底部“立即报名”按钮，准确填写报名信息。
              2、个人交流展示阶段，朗诵篇目均节选自
            </div>
          </div>
        </div>
        <img
          class="close"
          @click="showRule=false"
          src="../../../../../static/images/index/closeicon.png"
          alt
        />
      </div>
    </div>
    <openapp></openapp>
  </div>
</template>

<script>
import openapp from "@/components/openapp";
import { getActivityId, getUserId } from "@/utils/auth";
export default {
  components: {
    openapp //轮播
  },

  data() {
    return {
      activityDetailCont: {}, //活动详情容器
      showRule: false,
      currenttab: "",
      activityId: getActivityId(),
      groupList: [],
      listCode: "",
      listCodeList: [],
      activityRankCont: {},
      worksStage: 1,
      pageSize: 10
    };
  },
  watch: {
    currenttab: function(nv, ov) {
      if (nv) {
        this.groupList.forEach(it => {
          if (it.groupCode === nv) {
            this.listCodeList = it.activityLists;
          }
        });
      }
    }
  },
  mounted() {},
  onLoad() {},
  onShow() {
    this.getActivityDetail();
  },
  methods: {
    handleChange(e) {
      this.currenttab = e.mp.detail.key;
      this.getActivityRank();
    },
    //获取活动详情
    getActivityDetail() {
      console.log(this.activityId);
      
      const params = {
        activityId: this.activityId,
        stage: 1,
        userId: getUserId()
      };
      this.$api.tangy.activityDetail(params).then(res => {
        // console.log(res);
        this.worksStage = res.result.worksStage;
        this.activityDetailCont = res.result;
        this.currenttab = res.result.groupList[0].groupCode;
        this.groupList = res.result.groupList;
        this.listCodeList = res.result.groupList[0].activityLists;
        this.listCode = res.result.groupList[0].activityLists[0].listCode;
        this.getActivityRank();
      });
    },
    dateFormatUtil(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
    showListCode(code) {
      this.listCode = code;
      this.getActivityRank();
    },
    //活动榜单
    async getActivityRank() {
      const params = {
        currentPage: 1,
        pageSize: this.pageSize,
        activityId: this.activityId,
        userId: getUserId(),
        worksStage: 1,
        groupCode: this.currenttab,
        listCode: this.listCode //1004001001热门作品  1004001002分数榜单   1004001003人气榜单  1004001004最新作品
      };
      await this.$api.tangy.activityRank(params).then(res => {
        // console.log(res);
        this.activityRankCont = res.result.pageResults;
      });
    },
    showMore() {
      this.pageSize += 10;
      this.getActivityRank();
    }
  }
};
</script>

<style>
.h1 {
  margin: 10px auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
}
.h5 {
  margin: 10px auto;
  font-size: 14px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
}
.ruletitle {
  display: block;
  width: 220px;
  height: 43px;
  margin: 15px auto;
}
.rulecontent {
  width: 100%;
  height: calc(100% - 75px);
  background-color: #fffcea;
  box-sizing: border-box;
  padding: 15px;
  overflow: auto;
}
.close {
  width: 30px;
  height: 30px;
  display: block;
  margin: auto;
  margin-top: 20px;
}
.rules {
  width: 300px;
  height: 410px;
  border-radius: 5px;
  background-color: #fef7ca;
  margin: auto;
  box-sizing: border-box;
  padding: 7.5px;
}
.rulebox {
  position: fixed;
  display: table;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.tablecell {
  display: table-cell;
  vertical-align: middle;
}

.typelist {
  margin-top: 15px;
  display: flex;
  height: 20px;
  width: 100%;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 10px;
}
.type_item {
  border-radius: 10px;
  background-color: #f5f5f5;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #8e8e8e;
  width: 75px;
  height: 20px;
  text-align: center;
}
.type_item.active {
  color: #222222;
  background-color: #ffd948;
}
.all_rank {
  height: 120px;
  padding: 25px 25px 60px;
  text-align: center;
  font-size: 10px;
  box-sizing: border-box;
  line-height: 20px;
  font-weight: 400;
  color: rgba(61, 146, 241, 1);
}
.all_rank img {
  width: 20px;
  height: 4px;
  display: block;
  margin: auto;
}
.flexbox {
  padding: 5px;
  display: flex;
  justify-content: space-between;
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
.ipt input {
  width: 100%;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 24px;
  padding: 0 10px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  border-radius: 16px;
  padding-left: 20px;
}
.ipt {
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
}
.stepbox .step:first-child .stepline .line:first-child {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
}

.stepbox .step:first-child:last-child .stepline .line:last-child {
  border-top-right-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
}
.stepbox {
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  border-bottom: 1px solid #f2f2f2;
}
.cont {
  font-size: 11px;
}
.date {
  font-size: 10px;
}
.line {
  width: calc(50% - 9px);
  height: 5px;
  background-color: #f5f5f5;
}
.line.active {
  background-color: #41bd44;
}
.stepline {
  display: flex;
  justify-content: start;
  align-items: center;
}
.stepNum {
  width: 18px;
  height: 18px;
  margin: auto;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #f5f5f5;
  border-radius: 50%;
}
.stepNum.active {
  background-color: #41bd44;
}
.steptextbox {
  margin: auto;
  padding: 5px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  width: 98px;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  line-height: 14px;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
}
.steptextbox.active {
  background-color: #41bd44;
}
.steptextbox::after {
  display: block;
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #f5f5f5;
  bottom: 0;
  left: 50%;
  z-index: 1;
  transform: rotate(45deg);
  margin-left: -6px;
  margin-bottom: -6px;
}
.steptextbox.active::after {
  background-color: #41bd44;
}
.num {
  font-size: 10px;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
  line-height: 20px;
}
.num span {
  color: #ff900e;
}
.textbox {
  box-sizing: border-box;
  height: 85px;
  width: 100%;
  padding: 20px 10px;
  border-bottom: 1px solid #f2f2f2;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
}
.act_header {
  width: 100%;
  height: 195px;
  overflow: hidden;
  position: relative;
}
.act_img {
  width: 100%;
  height: 195px;
}
.rule {
  position: absolute;
  width: 70px;
  height: 20px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  right: 10px;
  top: 12px;
  z-index: 1;
  background-color: #ffd948;
  text-align: center;
  line-height: 20px;
}
</style>
