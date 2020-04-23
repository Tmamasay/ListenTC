<template>
  <div class="readCont">
    <div class="readBook" v-if="readBookCont.length">
      <div class="bookTitle">
        <p class="leftBook"></p>
        <p class="leftBookName">读本</p>
      </div>
      <div class="bookCont" @click="gopages(readBookCont[0].bookId)">
        <div class="bookImg">
          <img :src="readBookCont[0].coverImageUrl" alt srcset />
        </div>
        <p>{{readBookCont[0].title}}</p>
      </div>
      <div class="bookLineTwo">
        <div class="lineLeft" @click="gopages(readBookCont[1].bookId)">
          <div class="leftImg">
            <img :src="readBookCont[1].coverImageUrl" alt srcset />
          </div>
          <p class="leftLine">{{readBookCont[1].title}}</p>
        </div>
        <div class="lineRight" @click="gopages(readBookCont[1].bookId)">
          <div class="leftImg">
            <img :src="readBookCont[1].coverImageUrl" alt srcset />
          </div>
          <p class="leftLine">{{readBookCont[1].title}}</p>
        </div>
      </div>
    </div>
    <!--教材-->
    <div class="teachMatCont">
      <div class="bookTitle">
        <p class="leftBook"></p>
        <p class="leftBookName">教材</p>
      </div>
      <div class="tabCont">
        <i-tabs :current="tabKey" @change="handleChange" i-class="detailTabs" :scroll="true">
          <i-tab
            i-class="detailtab"
            :key="item.categoryId"
            :title="item.name"
            v-for="item in classList"
          ></i-tab>
          <!-- <i-tab key="tab2" title="3~4年级"></i-tab>
          <i-tab key="tab3" title="4~6年级"></i-tab>
          <i-tab key="tab4" title="7~9年级"></i-tab>-->
        </i-tabs>
      </div>
      <div class="bookListCont">
        <!-- <div class="showBookList"> -->
        <div
          class="bookLine"
          v-for="item in readContent"
          :key="item.bookId"
          @click="goKbenpages(item.bookId)"
        >
          <img :src="item.coverImageUrl" alt srcset />
        </div>
        <!-- </div> -->
        <!-- <div class="shaowBook"></div>
        <div class="shaowBookTai"></div>-->
      </div>
    </div>
    <!-- <search></search>
    <div class="read_contain" v-if="cateZxList.length">
      <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
      <i-tab   v-for="item in cateZxList" :key="item.id" :title="item.name"></i-tab>
      </i-tabs>
      <div class="hotnews_contain">
      <hotnews v-if="zixuList.length" :zixuList="zixuList" :tabsign="1"></hotnews>
      <div class="none" v-else>暂无内容....</div>
      </div>
    </div>-->
  </div>
</template>
 
<script>
import { getLevelCode } from "@/utils/auth";
export default {
  components: {},

  data() {
    return {
      readBookCont: [], //读本容器
      readContent: [], //教材容器
      zixuList: [], //资讯列表
      current_scroll: "",
      classList: [], //年级列表
      tabKey: ""
    };
  },
  watch: {
    // signMove: function(newval, oldval) {
    //   if (newval) {
    //     const godirec = getTouchData(
    //       this.endX,
    //       this.endY,
    //       this.startX,
    //       this.startY
    //     );
    //     if (godirec == "right") {
    //       console.log("========right");
    //       wx.navigateTo({
    //         url: "/pages/card/business/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
    //       });
    //     } else if (godirec == "left") {
    //       console.log("========left");
    //       wx.navigateTo({
    //         url: "/pages/card/contact/main" //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
    //       });
    //     }
    //   }
    //   console.log(newval);
    //   console.log(oldval);
    // }
  },
  onShow() {
    this.getReadBook(40080000);
    this.getReadBook(40090000);
    this.getClazz(); //年级
    // this.getReadBookDetail();
    // wx.hideTabBar();
  },
  methods: {
    handleChange(detail) {
      console.log(detail.mp.detail.key);
      this.tabKey = detail.mp.detail.key;
      this.getReadBook(40090000);
      //
    },

    //s书屋读本
    async getReadBook(categoryId) {
      const params = {
        currentPage: 1,
        pageSize: 10,
        levelCode: getLevelCode(),
        categoryId: categoryId //40080000 是读本  40090000教材
      };
      await this.$api.tangy.readBook(params).then(res => {
        console.log("s书屋读本++++++++++++++++++++++++++++++++");
        console.log(res);
        if (categoryId == 40080000) {
          //读本
          this.readBookCont = res.result.pageResults;
        } else if (categoryId == 40090000) {
          this.readContent = res.result.pageResults;
        }
      });
    },
    gopages(id) {
      wx.navigateTo({
        url: `/pages/read/catalog/main?readId=${id}` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    goKbenpages(id) {
      wx.navigateTo({
        url: `/pages/read/catalog/main?bookId=${id}` //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
      });
    },
    //年级
    async getClazz() {
      await this.$api.tangy.readBookType().then(res => {
        this.classList = res.result || [];
        this.tabKey = this.classList[0].categoryId;
      });
    },
    //切换资讯分类
    handleChangeScroll(e) {
      this.current_scroll = e.mp.detail.key;
      var that = this;
      const _params = {
        currentPage: 1,
        showCount: 5,
        id: e.mp.detail.key
      };
      that.$api.user
        .getAllInfoListById(_params)
        .then(res => {
          if (+res.code === 1 && res.data) {
            that.zixuList = res.data.list;
          }
          console.log(res);
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
    //初始化资讯列表
    getInfoListById(id) {
      var that = this;
      const _params = {
        currentPage: 1,
        showCount: 5,
        id: id
      };
      //
      that.$api.user
        .getAllInfoListById(_params)
        .then(res => {
          if (+res.code === 1 && res.data) {
            that.zixuList = res.data.list;
          }
          console.log(res);
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
  },
  onHide() {},
  onLoad() {},
  onUnload() {},

  created() {}
};
</script>

<style  scoped>
.readCont {
  width: 100%;
  background: rgba(247, 247, 247, 1);
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
.bookCont {
  width: 95%;
  /* height:185px; */
  height: 225px;
  margin: 16px auto 0px auto;
  /* background:rgba(255,255,255,1); */
  box-shadow: 0px 0px 9px 2px rgba(33, 22, 19, 0.06);
  border-radius: 10px;
  /* background-color: aquamarine; */
  overflow: hidden;
}
.bookImg {
  width: 100%;
  height: 185px;
  /* background-color: aquamarine; */
}
.bookImg img {
  width: 100%;
  height: 100%;
}
.bookCont p {
  width: 100%;
  height: 40px;
  width: 376px;
  padding: 0 10px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 40px;
}
.bookLineTwo {
  width: 95%;
  margin: 10px auto 10px auto;
  display: flex;
  justify-content: space-between;
}
.lineLeft {
  width: 49%;
  height: 129px;
  background-color: cadetblue;
  box-shadow: 0px 0px 9px 2px rgba(33, 22, 19, 0.06);
  border-radius: 5px;
  overflow: hidden;
}
.lineRight {
  width: 49%;
  height: 129px;
  background-color: cadetblue;
  box-shadow: 0px 0px 9px 2px rgba(33, 22, 19, 0.06);
  border-radius: 5px;
  overflow: hidden;
}
.leftImg {
  width: 100%;
  height: 90px;
}
.leftImg img {
  width: 100%;
  height: 100%;
}
.leftLine {
  width: 100%;
  height: 39px;
  line-height: 39px;
  padding: 0 10px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  background-color: #fff;
}
.teachMatCont {
  width: 100%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
}
.bookListCont {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
}
.showBookList {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.bookLine {
  width: 44%;
  height: 215px;
  background: rgba(171, 171, 184, 1);
  border-radius: 5px;
  margin-top: 24px;
  margin-bottom: -4px;
  z-index: 900;
}
.bookLine img {
  width: 100%;
  height: 100%;
}
.shaowBook {
  width: 95%;
  margin: 0 auto;
  height: 13px;
  background: rgba(235, 235, 235, 1);
  transform: perspective(12px) rotateX(0.7deg);
  /* border-left: 20px solid transparent;
    border-right: 20px solid transparent; */
}
.shaowBookTai {
  width: 95%;
  margin: 0 auto;
  height: 17px;
  background: rgba(254, 254, 254, 1);
  box-shadow: 0px 0px 6px 0px rgba(33, 22, 19, 0.15);
}
.detailTabs {
  margin: 0 10px;
}

.detailtab {
  width: 80px !important;
}
/* .read_contain{
   width:92%;
   margin: 35px auto 0px auto;
}
 .hotnews_contain{
   width:100%;
   margin: 15px auto;
 }
 .none{
   font-size:16px;
	font-family:A02-;
	font-weight:400;
	color:rgba(184,182,196,1);
  text-align: center;
  padding-top: 50px;
 } */
</style>
