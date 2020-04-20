<template>
  <!--目录-->
  <div>
    <div class="readTopImg">
      <img :src="readBookDetail.imageUrl" alt srcset />
    </div>
    <div class="tabCont">
      <i-tabs :current="checkItem" @change="handleChange" i-class="detailTabs">
        <i-tab key="introduce" title="介绍"></i-tab>
        <i-tab key="catalog" title="目录"></i-tab>
      </i-tabs>
    </div>
    <!--简介-->
    <div v-show="checkItem=='introduce'" class="introduce">
      <!-- <div class="introduceImg"> -->
         <!-- <wxParse :content="readBookDetail.imageList[0].imageUrl"  /> -->
      <scroll-view scroll-y="true" class="introduceImg">
        <img :src="item.imageUrl" alt v-for="item in readBookDetail.imageList" :key="item.imageId" />
      </scroll-view>
      <!-- </div> -->
      <div class="contextIn">
        <div class="bookTitle">
          <p class="leftBook"></p>
          <p class="leftBookName">订阅须知</p>
        </div>
        <div class="contextCon">
          <p>{{readBookDetail.subscribeIntro}}</p>
        </div>
      </div>
    </div>
    <!--目录-->
    <div class="catalog" v-show="checkItem=='catalog'">
      <div class="cataContLine" >
        <div class="cataImg">
          <img src="../../../../static/images/play/incLine.png" alt srcset />
        </div>
        <p class="cataContext">播放全部</p>
        <span>（{{readBookDetail.subscribeNum}} 人已收听）</span>
      </div>
      <div class="cataContList" v-for="(item,index) in readBookDetail.contentList" :key="item.contentId">
        <div class="cataImg">
          <img src="../../../../static/images/play/incLine.png" alt srcset />
        </div>
        <div class="cataST" >
          <p>{{index+1}}. {{item.title}}</p>
          <div class="sTBtn">
            <p class="sTBtnLine" @click="goPlay(item)">免费试听</p>
            <div class="sTImg">
              <img src alt srcset />
            </div>
            <p class="sTime">{{item.timeLength}}'</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBtn">
      <p class="btnLeft">返回</p>
      <p class="btnRight">立即订阅</p>
    </div>
  </div>
</template>

<script>
// import footbutt from '@/components/footbut.vue' 

import { getUserId,setMusicInfo,setMusicList} from '@/utils/auth'

export default {
  components: {
    // footbutt
  },

  data() {
    return {
      checkItem: "catalog",
      readBookDetail: {}
    };
  },
  methods: {
    //跳转播放页
     goPlay(resource){
    setMusicInfo(resource)
      wx.navigateTo({
            url: `/pages/mine/about/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
    },
    handleChange(detail) {
      console.log(detail.mp.detail.key);
      this.checkItem = detail.mp.detail.key;
      //
    },
    //书屋读本详情
    getReadBookDetail(readId) {
      const params = {
        userId: getUserId(),
        bookId: readId
      };
      this.$api.tangy.readBookDetail(params).then(res => {
        console.log("书屋读本详情++++++++++++++++++++++++++++++++");
        console.log(res);
        this.readBookDetail = res.result;
        setMusicList(res.result.contentList)
      });
    },
       //书屋教材详情
  async  getReadContentDetail(bookId){
      const params = {
        userId:getUserId(),
        bookId:bookId,
      }
      await this.$api.tangy.readContentDetail(params).then(res=>{
        console.log("书屋教材详情++++++++++++++++++++++++++++++++");
        console.log(res);
        this.readBookDetail = res.result;
        setMusicList(res.result.contentList)  
      })
    },
  },

  onShow() { 
    const readId = this.$root.$mp.query.readId;
    const bookId = this.$root.$mp.query.bookId;
    if(readId){
        this.getReadBookDetail(readId);

    }else if(bookId){
      this.getReadContentDetail(bookId);

    }
  
      
  },
  created() {}
};
</script>

<style>
.readTopImg {
  width: 100%;
  height: 198px;
  /* background-color: cadetblue; */
}
.readTopImg img {
  width: 100%;
  height: 100%;
}
.introduce {
  width: 100%;
  margin-top: 5px;
}
.catalog {
  width: 100%;
  margin-top: 5px;
}
.introduceImg {
  width: 100%;
  height: 340px;
  /* background-color: chocolate; */
}
.introduceImg img {
  width: 100%;
  height: 100%;
  /* background-color: chocolate; */
}
.bookTitle {
  width: 95%;
  padding-top: 17px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.leftBook {
  width: 4px;
  height: 17px;
  background-color: #f3d24e;
}
.leftBookName {
  /* width:79px;
    height:38px; */
  font-size: 17px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(48, 48, 48, 1);
  line-height: 30px;
  margin-left: 9px;
}
.contextCon {
  width: 90%;
  margin: 25px auto;
}
.contextCon p {
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(109, 109, 109, 1);
  line-height: 24px;
}
.cataContLine {
  width: 95%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed rgba(238, 237, 237, 1);
}
.cataImg {
  width: 28px;
  height: 28px;
  margin: auto 9px auto 9px;
}
.cataImg img {
  width: 100%;
  height: 100%;
}
.cataContext {
  /* width:120px;
    height:30px; */
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.cataContLine span {
  /* width:157px;
    height:21px; */
  display: inline-block;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(160, 160, 160, 1);
  /* line-height:24px; */
}
.cataContList {
  width: 95%;
  height: 82px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed rgba(238, 237, 237, 1);
}
.cataST {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cataST > p {
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}
.sTBtn {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.sTBtnLine {
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  padding: 5px 8px;
  background-color: rgba(255, 217, 72, 1);
  border-radius: 19px;

  margin-right: 10px;
  /* margin: 13px  auto  auto 10px; */
}
.sTImg {
  width: 12px;
  height: 12px;
  background-color: cornflowerblue;
}
.sTImg img {
  width: 100%;
  height: 100%;
}
.sTime {
  font-size: 11px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(160, 160, 160, 1);
  margin-left: 5px;
}
.footerBtn {
  width: 100%;
  height: 63px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 9px 1px rgba(33, 22, 19, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
}
.btnLeft {
  width: 170px;
  height: 45px;
  background: rgba(232, 232, 232, 1);
  border-radius: 45px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  text-align: center;
  line-height: 45px;
}
.btnRight {
  width: 170px;
  height: 45px;
  background: rgba(255, 217, 72, 1);
  border-radius: 45px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  text-align: center;
  line-height: 45px;
}
</style>
