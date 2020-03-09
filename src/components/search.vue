<template>
	<div class="search_index" @click="goSearch">
     <div class="search_img">
       <img src="../../static/images/index/Search.png" alt="" srcset="">
     </div>  
    <p class="search_cont">请输入课程名称/资讯</p>
   </div>
</template>

<script>
	export default {
		// props: ['imgUrls'],
		data() {
			return {
			}
		},
		mounted(){
			
		},
		methods:{
      goSearch(){
        wx.navigateTo({
            url: `/pages/read/searchpage/main`,   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
            })
      }
		}
		
}
</script>

<style>
 .search_index{
    width:92%;
    height:34px;
    background:rgba(209,214,227,.4);
    /* background: #ffffff;; */
    /* opacity:0.4; */
    /* color:rgba(209,214,227,.7); */
    border-radius:17px;
   display: flex;
   flex-direction: row;
   margin: 0 auto; 
 }
 .search_cont{
   font-size:14px;
    font-family:A02-;
    font-weight:400;
    color:rgba(201,207,221,1);
    line-height:16px;
    padding: 10px 
    /* margin-left:10px; */
 }
 .search_img{
   width: 19px;
   height: 19px;
   /* margin-left: 15px; */
   z-index:5;
   margin: 7px 0px 8px 15px;
 }
 .search_img img{
   width: 100%;
   height: 100%;
 }
</style>