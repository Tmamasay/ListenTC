<!--活动专区-->
<template>
  <div class="activityDetailbox">
    <div class="act_header">
      <img class="act_img" src="https://www.dummyimage.com/375x195" alt />
      <div class="rule" @click="showRule=true">活动规则</div>
    </div>
    <div class="songbox">
      <div class="textbox">
        <div class="title">让阅读点亮孩子的智慧人生-【朗诵】</div>
        <div class="num">
          报名：
          <span>32</span>
        </div>
      </div>
    </div>

    <div class="stepbox">
      <div class="step1">
        <div class="steptextbox active">
          <div class="cont">个人展示</div>
          <div class="date">3月22日-3月28日</div>
        </div>
        <div class="stepline">
          <div class="line active"></div>
          <div class="stepNum active">1</div>
          <div class="line"></div>
        </div>
      </div>
      <div class="step2">
        <div class="steptextbox">
          <div class="cont">个人展示</div>
          <div class="date">3月22日-3月28日</div>
        </div>
        <div class="stepline">
          <div class="line"></div>
          <div class="stepNum">2</div>
          <div class="line"></div>
        </div>
      </div>
      <div class="step3">
        <div class="steptextbox">
          <div class="cont">个人展示</div>
          <div class="date">3月22日-3月28日</div>
        </div>
        <div class="stepline">
          <div class="line"></div>
          <div class="stepNum">3</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="ipt">
      <input type="text" placeholder="请输入作者姓名查询" />
    </div>
    <div class="tabCont">
      <i-tabs current="tab1" i-class="detailTabs">
        <i-tab key="tab1" title="小学组"></i-tab>
        <i-tab key="tab2" title="初中组"></i-tab>
        <i-tab key="tab3" title="高中组"></i-tab>
        <i-tab key="tab4" title="中职组"></i-tab>
      </i-tabs>
    </div>
    <div class="typelist">
      <div class="type_item active">热门作品</div>
      <div class="type_item">分数排行</div>
      <div class="type_item">人气榜单</div>
      <div class="type_item">最新作品</div>
    </div>
    <div class="content">
      <div class="content_item">
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
              <img src="../../../../../static/images/index/bofangyuying.png" alt />
            </div>
          </div>
          <div class="userinfo_b">
            <div class="point flexbox">
              <div class="point_left">
                <span class="guankan">
                  <img src="../../../../../static/images/index/guankan.png" alt /> 222
                </span>
                <span class="dianzhan">
                  <img src="../../../../../static/images/index/dianzhan.png" alt /> 222
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
              <img src="../../../../../static/images/index/dabofang.png" alt />
            </div>
          </div>
          <div class="userinfo_b">
            <div class="point flexbox">
              <div class="point_left">
                <span class="guankan">
                  <img src="../../../../../static/images/index/guankan.png" alt /> 222
                </span>
                <span class="dianzhan">
                  <img src="../../../../../static/images/index/dianzhan.png" alt /> 222
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
              <img src="../../../../../static/images/index/pic.png" alt />
            </div>
          </div>
          <div class="userinfo_b">
            <div class="point flexbox">
              <div class="point_left">
                <span class="guankan">
                  <img src="../../../../../static/images/index/guankan.png" alt /> 222
                </span>
                <span class="dianzhan">
                  <img src="../../../../../static/images/index/dianzhan.png" alt /> 222
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
              <img src="../../../../../static/images/index/pic.png" alt />
            </div>
          </div>
          <div class="userinfo_b">
            <div class="point flexbox">
              <div class="point_left">
                <span class="guankan">
                  <img src="../../../../../static/images/index/guankan.png" alt /> 222
                </span>
                <span class="dianzhan">
                  <img src="../../../../../static/images/index/dianzhan.png" alt /> 222
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
          >5</div>
        </div>
        <div class="user_info">
          <div class="userinfo_top">
            <div>
              <div class="content_name">杨子轩《美丽的春天》</div>
              <div class="content_school">杨紫璐小学</div>
            </div>
            <div class="operation">
              <img src="../../../../../static/images/index/pic.png" alt />
            </div>
          </div>
          <div class="userinfo_b">
            <div class="point flexbox">
              <div class="point_left">
                <span class="guankan">
                  <img src="../../../../../static/images/index/guankan.png" alt /> 222
                </span>
                <span class="dianzhan">
                  <img src="../../../../../static/images/index/dianzhan.png" alt /> 222
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

    <div class="all_rank">
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
        <img class="close" @click="showRule=false" src="../../../../../static/images/index/closeicon.png" alt />
      </div>
    </div>
    <openapp></openapp>
  </div>
</template>

<script>
import openapp from "@/components/openapp";
export default {
  components: {
    openapp //轮播
  },

  data() {
    return {
      value5: "",
      showRule: false
    };
  },
  mounted() {},
  onLoad() {},
  methods: {},

  onShow() {}
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
.step1 .stepline .line:first-child {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
}

.step3 .stepline .line:last-child {
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
