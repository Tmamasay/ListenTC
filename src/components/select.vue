<template>
  <div>
      <div class="title" @click="dianji">{{xz_value}}<span class="sjx"></span></div>
      <div  v-if="isShow">
        <scroll-view  scroll-y="true" class="list">
        <p v-for="(item,index) in gradeLists" :key="index" @click="xuanzhi(item)">{{item.name}}</p>
        </scroll-view>
      </div>
  </div>
</template>

<script>
import { setLevelCode,getLevelCode } from "@/utils/auth";
export default {
   props: ["gradeLists"],
  data () {
    return {
      isShow:false,
      list:[
        {name:"列表1"},
        {name:"列表2"},
        {name:"列表3"},
        {name:"列表4"}
      ],
      xz_value:getLevelCode()||'请选择'
    }
  },

  created () {
    
  },
  methods: {
    dianji(){
      this.isShow = !this.isShow;
    },
    xuanzhi(e){
      this.xz_value = e.name;
      setLevelCode(e.value)
      this.$emit('getLevelCode')
      this.isShow = false
      console.log(e);
    }
  }
}
</script>

<style scoped>
.title{
  width:180rpx;
  height:50rpx;
  /* border:1px solid #aaa; */
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(67,67,67,1);
z-index: 999;
}
.sjx{
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 7rpx solid transparent;
  border-right: 7rpx solid transparent;
  border-top: 20rpx solid #000;
  margin-left:20rpx;
}
.list{
  z-index: 999;
  width:180rpx;
  height: 55px;
  margin-top:5rpx;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(67,67,67,1);
  /* border:1px solid #aaa; */
}
</style>
