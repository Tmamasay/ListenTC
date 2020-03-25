<template>
<!--我的关注-->
  <div class="follwCont">
    <div class="tabCont">
         <i-tabs :current="checkItem" @change="handleChange" i-class="detailTabs">
          <i-tab key="follwing" title="关注"></i-tab>
          <i-tab key="fans" title="粉丝"></i-tab>
    </i-tabs>
    </div>
    <div v-show="checkItem=='follwing'" class="follwing">
      <div class="follwLine">
        <div class="follwAvter">
          <div class="avterImg">
            <img src="" alt="" srcset="">
          </div>
          <p >机器人小Q</p>
        </div>
        <p class="follwTo">+关注</p>

      </div>

    </div>
    <div v-show="checkItem=='fans'" class="fans">

    </div>
  </div>
</template>

<script>
// import footbutt from '@/components/footbut.vue'
export default {
  components: {
    // footbutt
  },

  data() {
    return {
      checkItem:'fans'

    };
  },
  methods: {
    handleChange(detail){
      console.log(detail.mp.detail.key)
      this.checkItem=detail.mp.detail.key
      // debugger
    }
    
  },
  onShow() {
    
  },
  created() {
  }
};
</script>

<style scoped>
.follwLine{
  width: 95%;
  height: 69px;
  display: flex;
   justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.follwAvter{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.avterImg{
  width:43px;
height:43px;
border-radius:50%;
background-color: cadetblue;
}
.avterImg img{
  width: 100%;
  height: 100%;
}
.follwAvter p{
  font-size:15px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(67,67,67,1);
  padding-left: 8px;
}
.follwTo{
  width:56px;
  height:19px;
  background:rgba(255,217,72,1);
  border-radius:19px;
  font-size:10px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(67,67,67,1);
  text-align: center;
  line-height: 19px;
}
</style>
