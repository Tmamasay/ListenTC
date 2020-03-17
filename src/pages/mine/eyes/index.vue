<template>
  <div>
    <div class="mineTop">
      <img src="" alt="">
    </div>
    <div class="bookTitle">
        <p class="leftBook"></p>
        <p class="leftBookName">温故而知新</p>
      </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      user_info: ""
    };
  },
  created() {
    // let key_token=this.$store.getters.user.token
  },
  methods: {},
  onShow() {}
};
</script>

<style scoped>
.mineTop{
  width:95%;
height:70px;
margin: 16px auto 0 auto;
background-color: cornflowerblue;
box-shadow:0px 0px 9px 2px rgba(33,22,19,0.1);
border-radius:5px;
}
.bookTitle{
  width: 95%;
  padding-top: 17px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items:center
  
}
  .leftBook{
     width: 4px;
     height: 17px;
     background-color: #F3D24E ;
   }
  .leftBookName{
    /* width:79px;
    height:38px; */
    font-size:17px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(48,48,48,1);
    line-height:30px;
    margin-left: 9px;
  }
</style>
