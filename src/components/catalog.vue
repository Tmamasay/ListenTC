<!--课程目录==>-->
<template>
 <div class="courseCatalog">
	 <div class="courseCatCont" v-for="(item,index) in catalogList" :key="index">
		 <div class="courseCatFather" @tap='show(item.id)'>
			 <div class="CatFatherLeft">
				 <img src="../../static/images/index/play.png" alt="" srcset="">
			 </div>
			 <div class="CatFatherMiddle">{{item.name}}</div>
			 <div class="CatFatherRight">
				 <img v-if="item.id==signOpen" src="../../static/images/index/open.png" alt="" srcset="">
				 <img v-else src="../../static/images/index/close.png" alt="" srcset="">
			 </div>
		 </div> 
		  
		 <div v-show="item.id==signOpen" class="courseCatChild" v-for="(child,i) in item.childItemList" :key="i">
			 <div class="CatChildLeft">
				 <!-- <img src="../../static/images/index/play.png" alt="" srcset=""> -->
			 </div>
			 <div class="CatChildMiddle">{{child.name}}</div>
			 <div class="CatChildRight">
				 <div v-if="isbuy==0">
				 <img v-if="child.isListen=='0'" src="../../static/images/index/unplay.png" alt="" srcset="" @tap="shikan(0,child.id)">
				 <p v-else-if="child.isListen=='1'" @tap="shikan(1,child.id)">试听</p>
				 </div>
				 <div v-else-if="isbuy==1">
					 <p>38:11</p>
				 </div>
			 </div>
		 </div>
	 </div>
	 <!-- <div class="courseCatCont">
		 <div class="courseCatFather">
			 <div class="CatFatherLeft">
				 <img src="../../static/images/index/play.png" alt="" srcset="">
			 </div>
			 <div class="CatFatherMiddle">第三章 概念</div>
			 <div class="CatFatherRight">
				 <img src="../../static/images/index/open.png" alt="" srcset="">
			 </div>
		 </div>
		
	 </div> -->
	
 </div>

</template>

<script>
	export default {
		props: ['catalogList','isbuy'],
		data() {
			return {
				evalCont:'这个消防工程师《消防安全综合能力》精讲班+冲刺班非常好，非常棒，好评哟！',
				signOpen:'',
				isCZ:[]
			}
		},
		mounted(){
			
		},
		methods:{
			show(e){
				const foundIndex = this.isCZ.findIndex(el => el === e);
				if(foundIndex!==-1){
					this.signOpen=0
					this.isCZ=this.isCZ.filter(el => el !== e);
					// debugger
				}else{
					this.isCZ.push(e)
					this.signOpen=e
						console.log(e)
						// debugger

				}
			  
			},
			shikan(e){
				debugger
				if(e==1){
                 
				}else if(e==0){
					 wx.showToast({
						title: "购买后才可以观看哦",
						icon: "none",
						duration: 2000
					});
				}
			}
			
		}
		
}
</script>

<style>
.courseCatalog{
	width: 100%;
	margin: 0 auto;	
}
.courseCatCont{
	border-bottom: 0.5px solid rgba(240,240,240,1)
}
.courseCatFather{
  display: flex;
  flex-direction: row;
  align-items:center ;
  flex: 1;
  padding-top: 17px;
  margin-bottom:18px 
}
.CatFatherLeft{
	flex: 0 0 10%;	
}
.CatFatherLeft img{
	width: 18px;
	height: 15px;
}
.CatFatherMiddle{
	flex: 0 0 75%;
	font-size:16px;
	font-family:A02-;
	font-weight:400;
	color:rgba(67,66,82,1);
	
}

.CatFatherRight{
	flex: 0 0 15%;
	
}
.CatFatherRight>img{
	width: 10px;
	height: 10px;
	 float:right
}
.courseCatChild{
	display: flex;
  flex-direction: row;
  align-items:center ;
  flex: 1;
  height: 22px;
  margin: 27px auto 18px auto
}
.CatChildLeft{
	flex: 0 0 10%;	
}
.CatChildLeft img{
	width: 18px;
	height: 15px;
}
.CatChildMiddle{
	flex: 0 0 75%;
	font-size:13px;
	font-family:A02-;
	font-weight:400;
	color:rgba(67,66,82,1);
	padding: 27px auto 
}
.CatChildRight{
	flex: 0 0 15%;
	
}
.CatChildRight img{
	width: 10px;
	height: 13px;
	 float:right
}
.CatChildRight p{
	width: 51px;
	height: 22px;
	background:rgba(61,131,255,0);
	border:1px solid rgba(61,131,255,1);
	border-radius:11px;
	text-align: center;
	line-height: 22px;
	font-size:13px;
	font-family:A02-;
	font-weight:400;
	color:rgba(61,131,255,1);
	 float:right
}
.isshow{

}
</style>