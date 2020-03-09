<!--加载我的课程==>-->
<template>
 <div class="myCourse">
	 <div class="myCourseTitle">
		 <p class="courseTitleRight">我的·课程</p>
		 <p class="courseTitleLeft">查看更多&nbsp;></p>
	 </div>
	 <div class="myCourseList">
		 <div class="myCourseListLeft"></div>
		 <div class="myCourseListRight">
			 <div class="myCourseListRightCont">
				 <p class="p1">建设工程经济概述</p>
				 <p class="p2">李立恒|开林特级讲师</p>
			 </div>
			 <div class="myCourseListRightImg">
				<img src="../../static/images/index/right.png" alt="" srcset="">
			 </div>

		 </div>	 
	 </div>


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
			
		}
		
}
</script>

<style>
.myCourse{
	width: 100%;
	height: 313px;
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
.myCourseList{
	width: 94%;
	display: flex;
	flex-direction: row;
    justify-content:space-between;
	margin: 15px auto;
	align-items:flex-end
}
.myCourseListLeft{
	width: 30%;
	height: 92px;
	background-color: grey;
	 border-radius:6px;
}
.myCourseListRight{
	width: 70%;
	height: 84px;
	background:rgba(244,245,248,1);
	display: flex;
	flex-direction: row;
	 justify-content:space-around;
}
.p1{
font-size:16px;
font-family:A02-;
font-weight:400;
color:rgba(67,66,82,1);
padding-top:22px;
padding-bottom: 9px;
}
.p2{
font-size:13px;
font-family:A02-;
font-weight:400;
color:rgba(184,182,196,1);
padding-bottom: 22px;
}
.myCourseListRightImg{
	width: 25px;
	height: 25px;
	padding: 29px 0px 29px 15px;
}
.myCourseListRightImg img{
	width: 100%;
	height: 100%;
}
</style>