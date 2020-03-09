<template>
  <div class="readCont">
    <search></search>
    <div class="read_contain" v-if="cateZxList.length">
      <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
      <i-tab   v-for="item in cateZxList" :key="item.id" :title="item.name"></i-tab>
      </i-tabs>
      <div class="hotnews_contain">
      <hotnews v-if="zixuList.length" :zixuList="zixuList" :tabsign="1"></hotnews>
      <div class="none" v-else>暂无内容....</div>
      </div>
   </div>
  </div>
  
</template>
 
<script>
import search from '@/components/search'
import hotnews from '@/components/hotnews'
export default {
  components: {
      search,
      hotnews
  },

  data() {
    return {
      cateZxList:[],//资讯分类
      zixuList:[],//资讯列表
      current_scroll:''
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

  methods: {
    //切换资讯分类 
    handleChangeScroll(e){
       this.current_scroll=e.mp.detail.key
        var that=this;
      const _params={
        currentPage:1,
        showCount:5,
        id:e.mp.detail.key,
      }
      that.$api.user
        .getAllInfoListById(_params)
        .then(res => {
          if(+res.code===1&&res.data){
            that.zixuList=res.data.list
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
    //查询资讯分类
    getAllCategory(){
         this.$api.user
        .getAllCategory()
        .then(res => {
          if(+res.code===1){
            this.cateZxList=res.data
            this.current_scroll=res.data[0].id
            this.getInfoListById(res.data[0].id)
          }
          // debugger
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
    //初始化资讯列表
    getInfoListById(id){
        var that=this;
      const _params={
        currentPage:1,
        showCount:5,
        id:id,
      }
      // debugger
      that.$api.user
        .getAllInfoListById(_params)
        .then(res => {
          if(+res.code===1&&res.data){
            that.zixuList=res.data.list
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
  onHide(){
    
  },
  onLoad(){
  this.getAllCategory()

  },
  onUnload() {
    
  },
  onShow() {
    // wx.hideTabBar();
   
  },
  created() {
    
  }
};
</script>

<style>
.readCont{
  width: 100%;
}
.read_contain{
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
 }
</style>
