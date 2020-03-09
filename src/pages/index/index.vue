<template>
  <div calss="contain_index">
   <!-- <div class="search_index">
     <div class="search_img">
       <img src="../../../static/images/index/Search.png" alt="" srcset="">
     </div>  
    <p class="search_cont">请输入课程名称/资讯</p>
   </div> -->
   <search></search>
   <div class="lunbo_contain">
      <lunbo></lunbo>
   </div>
   <div class="mycourse_contain" v-if="myCollect.length">
      <course :myCollect="myCollect"></course>
   </div>
   <div class="recommend_contain" v-if="todayCourseList.length">
      <recommend :todayCourseList="todayCourseList" @listento="ischange"></recommend>
   </div>
   <div class="tab_contain" v-if="categoryList.length">
      <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
      <i-tab   v-for="item in categoryList" :key="item.id" :title="item.name"></i-tab>
      </i-tabs>
      <courselist v-if="courseSeriesList.length" :courseSeriesList="courseSeriesList" @listencourse="changeCourse"></courselist>
   </div>
    <div class="hotnews_contain">
      <hotnews></hotnews>
   </div>
  </div>
</template>

<script>
import lunbo from '@/components/lunbo'
import search from '@/components/search'
import course from '@/components/mycourse'
import recommend from '@/components/recommendtoday'
import courselist from '@/components/courselist'
import hotnews from '@/components/hotnews'

export default {
  components: {
    lunbo,//轮播
    search,//搜索
    course,//我的课程
    recommend,//今日推荐
    courselist,//tab栏容器
    hotnews//热门资讯
  },
  data () {
    return {
     current_scroll: '',
     myCollect:[], //我的课程
     todayCourseList:[],//今日推荐课程
     categoryList:[],//所有课程分类
     courseSeriesList:[]//根据分页id查询首页课程列表(tab栏)
    }
  },
 computed:{
  //  avatarUrl(){
  //    console.log('-----kaishi')
  //    console.log(this.$store.getters.avatar)
  //   return this.$store.getters.avatar;
  //  },
  //  nickName(){
  //    return this.$store.getters.name;
  //  }
 
  },
  

  methods: {
    ischange(){
      // debugger
      this.getTodayCourseSeriesList();//今日推荐--->换一换
    },
    changeCourse(){

    },
     handleChangeScroll (e) {
       //getCourseSeries
        // debugger
        this.current_scroll=e.mp.detail.key
        var that=this;
      const _params={
        currentPage:1,
        showCount:3,
        more_type:0,
        categoryId:e.mp.detail.key,
      }
      that.$api.user
        .getCourseSeries(_params)
        .then(res => {
          if(+res.code===1&&res.data){
            // debugger
            that.courseSeriesList=res.data.list
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error)
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    },
    //获取我的课程
    getMyCollect(){
       var that=this;
      const _params={
        currentPage:1,
        showCount:2
      }
      that.$api.user
        .getMyCollect(_params)
        .then(res => {
          if(+res.code===1&&res.data){
            //debugger
            that.myCollect=res.data.list
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error)
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    },
    //查询今日推荐
    getTodayCourseSeriesList(){
       var that=this;
      const _params={
        currentPage:1,
        showCount:4,
        more_type:0
      }
       that.$api.user
        .getTodayCourseSeriesList(_params)
        .then(res => {
          if(+res.code===1){
            that.todayCourseList=res.data.list
            
          }
          console.log('hhhhhhh--------->');
          console.log(res.data.list);
        })
        .catch(error => {
          console.log(error)
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    },
    //查询所有的课程分类
     getCourseCategoryList(){
        this.$api.user
        .getCourseCategoryList()
        .then(res => {
          if(+res.code===1){
            this.categoryList=res.data
            this.current_scroll=res.data[0].id
          }
          console.log('ffffff--------->');
          console.log(res.data);
        })
        .catch(error => {
          console.log(error)
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
    },
    //广告banner
    getAdvertisement(){
				const that=this
				that.$api.user
        .getAdvertisement()
        .then(res => {
          if(+res.code===1&&res.data){
            that.imgUrls=res.data.list
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error)
          wx.showToast({
            title: "网络异常",
            icon: "none",
            duration: 1000
          });
        });
			}

    
  },

  // created () {
  //   // let app = getApp()
  // },
  created(){
     let user_token
    if (mpvuePlatform === 'wx') {
      console.log('------------------>')
      user_token = mpvue.getStorageSync('Admin-Token');
      this.userInfo=mpvue.getStorageSync('user_info');
      console.log(user_token);
      console.log(mpvue.getStorageSync('user_info'));
    if(!user_token){
    // if(user_token){
      console.log('-------去授权----------->')
      var that=this;
      wx.login({
					success: function(res) {
						console.log(res.code)
						if(res.code) {
                //登录获取token
              that.$store.dispatch('LoginByWX',res.code).then(res=>{
                console.log('token保存成功------>')
                // debugger
                 that.getMyCollect();//我的课程
                 that.getAdvertisement()//广告banner
                 that.getTodayCourseSeriesList();//今日推荐
                 that.getCourseCategoryList()//课程分类
                        // wx.navigateTo({
                        //   url: '/pages/shouquan/main',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
                        //     })
              })
      		}
					}
				});
       
    }else{
     this.getMyCollect();//我的课程
     this.getTodayCourseSeriesList();//今日推荐
     this.getCourseCategoryList()//课程分类
    }
  }
  }
}
</script>

<style scoped>
 .contain_index{
   width:92%;
   /* height:800px; */
   background-color: #FDFDFD
   
 }

 .lunbo_contain{
   width:92%;
   margin: 15px auto;
 }
 .mycourse_contain{
   width:92%;
   margin: 15px auto;
 }
 .hotnews_contain{
   width:92%;
   margin: 15px auto;
 }
 .recommend_contain{
   width:92%;
   margin: 15px auto;
 }
 .tab_contain{
   width:92%;
   margin: 35px auto 0px auto;
 }

</style>
