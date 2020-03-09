<!--搜索页面==>-->
<template>
  <div class="mySearch">
    <div class="searchHeader">
      <div class="search_input">
        <div class="search_img">
          <img src="../../../../static/images/index/Search.png" alt srcset>
        </div>
        <input
          class="searchKey"
          type="text"
          v-model.lazy="searchKey"
          focus="true"
          @confirm="beginSearch"
          placeholder="请输入课程名称/资讯"
        >
      </div>
      <p @tap="goclear">取消</p>
    </div>
    <div class="searchCont" v-if="searchcont.searchCourseList.length||searchcont.searchZiXunList.length">
      <i-tabs :current="current" @change="handleChange" i-class="detailTabs">
        <i-tab key="tab1" title="课程"></i-tab>
        <i-tab key="tab2" title="资讯"></i-tab>
      </i-tabs>
      <div class="showContLeft" v-show="current=='tab1'">
        <course v-if="searchcont.searchCourseList" :courseCont="searchcont.searchCourseList"></course>
        <p v-else>暂无更多内容</p>
      </div>
      <div class="showContRight" v-show="current=='tab2'">
        <news v-if="searchcont.searchZiXunList" :zixuList="searchcont.searchZiXunList" ></news>
        <p v-else>暂无更多内容</p>
      </div>
    </div>
    <div v-else>
      <div class="search_history">
        <p>搜索历史</p>
        <img  class="searchHisImg" @tap="delHistory" src="../../../../static/images/read/del.png" alt srcset>
      </div>
      <div class="searchKeyList">
        <p v-for="(item,index) in historyList" :key="index">{{item}}</p>
      </div>
      <div class="hotSearch">
        <p>大家都在搜</p>
        <!-- <img class="searchHisImg" src="../../../../static/images/read/del.png" alt srcset> -->
      </div>
      <div class="hotSearchKeyList">
        <p v-for="(item,index) in searchCache" :key="index">{{item.word}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { setHistory, getHistory } from "@/utils/auth";
import { unique } from "@/utils";
import course from "@/components/course";
import news from "@/components/news";

export default {
  props: ["zixuList"],
  components: {
    course, //课程
    news
  },
  data() {
    return {
      searchKey: "",
      current: "tab1",
      historyList: [],
      searchcont:{//搜索结果
       searchCourseList:[],//课程
       searchZiXunList:[]//资讯
      },
      searchCache:[]//搜索历史

    };
  },
  watch: {
    searchKey(oldvalue,value){
      if(!value){
        this.searchcont.searchCourseList=[];
        this.searchcont.searchZiXunList=[];
      }
    }
  },
  mounted() {
    const historyH = getHistory();
    if (historyH) {
      this.historyList = unique(getHistory()) ;
    } else {
      setHistory(this.historyList);
    }
    this.indexSearchCache()
  },
  methods: {
    goclear(){
      if(!this.searchKey){
         wx.navigateBack({
              delta: 2
            });
      }else{
        this.searchKey='';
        this.searchcont.searchCourseList=[];
        this.searchcont.searchZiXunList=[];
      } 
    },
    delHistory(){
      this.historyList=[];
      setHistory(this.historyList);
    },
    beginSearch(e) {
      //e.mp.detail.value
      this.historyList.push(e.mp.detail.value);
      this.historyList=unique(this.historyList)
      this.searchEndCont(e.mp.detail.value, 1);
      this.searchEndCont(e.mp.detail.value, 2);
    },
    handleChange(e) {
      this.current = e.mp.detail.key;
      // switch (e.mp.detail.key) {
      //   case "tab1":
      //     this.searchEndCont(this.searchKey, 1);
      //     break;
      //   case "tab2":
      //     this.searchEndCont(this.searchKey, 2);
      //     break;

      //   default:
      //     break;
      // }
    },
    async searchEndCont(searchKey, search_type) {
      //搜索请求
      var that = this;
      const _params = {
        currentPage: 1,
        showCount: 5,
        query: searchKey,
        search_type: search_type
      };
      await that.$api.user
        .indexSearch(_params)
        .then(res => {
          if (+res.code === 1 && res.data.list) {
            if(search_type==1){
              that.searchcont.searchCourseList = res.data.list;
            }else{
              that.searchcont.searchZiXunList = res.data.list;
            }  
          }else{
            wx.showToast({
            title: "没有相关内容",
            icon: "none",
            duration: 1000
          });
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
    indexSearchCache(){//搜索历史
     var that = this;
      that.$api.user
        .indexSearchCache()
        .then(res => {
          if (+res.code === 1 && res.data) {
            that.searchCache = res.data.usSearchRecord;
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
  onUnload() {
    setHistory(this.historyList);
    this.searchKey = "";
  }
};
</script>

<style>
.mySearch {
  width: 92%;
  margin: 0 auto;
}
.searchHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 14px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(201, 207, 221, 1);
  line-height: 16px;
  padding: 10px 0px 10px 0px;
}
.searchHeader p {
  font-size: 14px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(54, 52, 69, 1);
  /* margin-right: 10px */
}
.search_input {
  width: 85%;
  height: 34px;
  background: rgba(209, 214, 227, 0.4);
  border-radius: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.searchKey {
  margin-left: 10px;
}
.search_history {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 17px 0px 15px 0px;
}
.hotSearch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 15px 0px;
}

.searchHisImg {
  width: 15px;
  height: 15px;
  margin-right: 11px;
}

.search_history p,
.hotSearch p {
  font-size: 16px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(54, 52, 69, 1);
  margin-left: 5px;
}
.searchKeyList,
.hotSearchKeyList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.searchKeyList:after,
.hotSearchKeyList:after {
  content: "";
  flex: auto;
}
.searchKeyList p,
.hotSearchKeyList p {
  font-size: 13px;
  font-family: A02-;
  font-weight: 400;
  color: rgba(67, 66, 81, 1);
  padding: 8px 15px;
  border-radius: 14px;
  background: rgba(244, 245, 248, 1);
  margin-top: 10px;
}
</style>