<template>
  <!--消息中心-->
  <div class="mesCont">
    <div style="width:100%;height:10px;background:#F7F7F7;"></div>

    <div class="mesContent" v-for="(item, index) in messageList" :key="index" @click="gotoDetail(item)">
      <div class="dian"></div>
      <div class="T1">
        <p class="C1">{{item.title}}</p>
        <p class="C2">{{item.content}}</p>
        <div class="C3">
          <p class="D1">{{item.createTime}}</p>
          <p class="D2">查看详情</p>
        </div>
      </div>
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
      messageList: []
    };
  },
  onShow() {
    this.getMessage();
  },
  created() {},
  methods: {
    getMessage() {
      const params = {
        currentPage: 1,
        pageSize: 10000
      };
      this.$api.tangy.message(params).then(res => {
        this.messageList = res.result.pageResults;
      });
    },
    gotoDetail(it){
      wx.navigateTo({
        url: `/pages/index/setUp/messageDetail/main?messageId=${it.messageId}`
      });
    }
  }
};
</script>

<style scoped>
.dian {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: red;
  left: 10px;
  top: 10px;
}
.mesCont {
  width: 100%;
  height: 100vh;
  background: #f7f7f7;
}
.mesContent {
  width: 95%;
  margin: 0px auto;
  height: 160px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 9px 2px rgba(33, 22, 19, 0.06);
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
}

.T1 {
  width: 100%;
  margin: 0 auto;
}
.C1 {
  padding: 0 20px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  /* line-height:24px; */
  padding-top: 19px;
}
.C2 {
  padding: 0 20px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
  /* line-height:18px; */
  padding-top: 17px;
  padding-bottom: 17px;
  border-bottom: 1px solid #eeeeee;
}
.C3 {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}
.D1 {
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
}
.D2 {
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(61, 146, 241, 1);
}
</style>
