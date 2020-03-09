<!--热门资讯==>-->
<template>
 <div class="myCourse">
	 <div class="myCourseTitle" v-if="tabsign!==1">
		 <p class="courseTitleRight">热门·资讯</p>
		 <p class="courseTitleLeft">查看更多&nbsp;></p>
	 </div>
	 <div style="width:100%;height:1px"></div>
	 <div class="hostNewsCont" v-for="item in zixuList" :key="item.key">
		 <div class="hostNewsContLeft">
			<img src="" alt="" srcset="">
		 </div>
		 <div class="hostNewsContRight">
         <p class="h1">{{item.title}}</p>
		 <div class="hostFoot">
			 <img src="../../static/images/index/time.png" alt="">
			 <p>2019-03-03</p>
		 </div>
		 </div>	 
	 </div>
	 <div style="width:100%;height:1px"></div>


 </div>

</template>

<script>
	export default {
		props: ['zixuList','tabsign'],
		data() {
			return {
				
			}
		},
		mounted(){
			
		},
		methods:{
			
		}
		
}
</script>

<style>
.myCourse{
	width: 100%;
	/* height: 313px; */
	background:rgba(255,255,255,1);
    box-shadow:0px 0px 35px 0px rgba(88,91,117,0.17);
    border-radius:12px;
}
.myCourseTitle{
	width: 94%;
	display: flex;
	flex-direction: row;
    justify-content:space-between;
	margin: 0px auto;
	padding-top:15px;
	padding-bottom: 10px
}
.courseTitleRight{
	font-size:21px;
	font-family:A02-;
	font-weight:400;
	color:rgba(54,52,69,1);
}
.courseTitleLeft{
	font-size:13px;
	font-family:A02-;
	font-weight:400;
	color:rgba(184,182,196,1);
	line-height: 30px
}
.hostNewsCont{
	width: 94%;
	display: flex;
	flex-direction: row;
    justify-content:space-between;
	margin: 25px auto;
	/* align-items:flex-end */
}
.hostNewsContLeft{
	width: 25%;
	height: 97px;
	background:rgba(204,231,236,1);
   box-shadow:0px 5px 20px 0px rgba(157,173,225,0.3);
	 border-radius:6px;
}
.hostNewsContRight{
	width: 64%;
}
.h1{
font-size:16px;
font-family:A02-;
font-weight:400;
color:rgba(67,66,82,1);
line-height:23px;
padding-top: 9px;
height: 40px;
}
.hostFoot{
	display: flex;
	flex-direction: row;
	align-items:center;
	margin-top: 27px;
	
}
.hostFoot img{
	width: 12px;
	height: 12px;
}
.hostFoot p{
font-size:13px;
font-family:A02-;
font-weight:400;
color:rgba(184,182,196,1);
padding-left: 7px;
}
</style>