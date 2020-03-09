<!--评论列表==>-->
<template>
 <div class="courseEvaluate">
	 <div class="courseEvaluateHeader" v-if="evaConts.isAnonymity==1">
		 <div class="courseEvaluateImge">
			 <img src="../../static/images/shouquan/aver.png" alt="" srcset="">
		 </div>
		 <div class="courseEvaluateTitle">
			 <p class="Cname">匿名评价</p>
			 <p class="Ctime">2019-04-09</p>
		 </div>
	 </div>
	  <div class="courseEvaluateHeader" v-else>
		 <div class="courseEvaluateImge">
			 <img :src="evaConts.avatarUrl" alt="" srcset="">
		 </div>
		 <div class="courseEvaluateTitle">
			 <p class="Cname">{{evaConts.nickName}}</p>
			 <p class="Ctime">2019-04-09</p>
		 </div>
	 </div>
	 <p class="evalCont">{{evaConts.content}}</p>
	 <div class="evalLine1"></div>
 </div>

</template>

<script>
	export default {
		props: ['evaConts'],
		data() {
			return {
				evalCont:'这个消防工程师《消防安全综合能力》精讲班+冲刺班非常好，非常棒，好评哟！'
			}
		},
		mounted(){
			
		},
		methods:{
			
		}
		
}
</script>

<style>
.courseEvaluate{
	width: 92%;
	margin: 0 auto;	
}
.courseEvaluateHeader{
  display: flex;
 flex-direction: row;
  align-items:center ;
  margin: 15px auto 0px auto;
}
.courseEvaluateImge{
	width:40px;
	height:40px;
	border-radius:50%;
	background-color: burlywood;
	margin-right: 9px;
}
.courseEvaluateImge img{
	width: 100%;
	height: 100%;
}
.Cname{
	font-size:16px;
	font-family:A02-;
	font-weight:400;
	color:rgba(67,66,82,1);
	/* line-height:56px; */
}
.Ctime{
	font-size:13px;
	font-family:A02-;
	font-weight:400;
	color:rgba(184,182,196,1);
	padding-top: 6px;
}
.evalCont{
	font-size:16px;
	font-family:A02-;
	font-weight:400;
	color:rgba(67,66,82,1);
	margin: 17px auto 20px auto;
}
.evalLine1{
  width: 100%;
  height: 0.5px;
  margin: 0 auto;
  background:rgba(235,235,235,1);
}
</style>