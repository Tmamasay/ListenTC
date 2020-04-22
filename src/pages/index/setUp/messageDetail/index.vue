<template>
  <!--消息详情-->
  <div class="mesContent">
    <div class="title">{{message.title}}</div>
    <div class="date">{{message.createTime}}</div>
    <div class="text">{{message.content}}</div>
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
      message: {}
    };
  },
  onShow() {
    this.getMessageDetail();
  },
  created() {},
  methods: {
    getMessageDetail() {
      const messageId = this.$root.$mp.query.messageId;
      this.$api.tangy.messageDetail({ messageId }).then(res => {
        this.message = res.result;
      });
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  line-height: 24px;
  padding: 15px;
  box-sizing: border-box;
  border-top: 1px solid #ededed;
  text-indent: 2em;
}
.mesContent {
  width: 95%;
  margin: 0px auto;
  margin-top: 10px;
  height: 97vh;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 9px 2px rgba(33, 22, 19, 0.06);
  border-radius: 10px;
  padding: 15px 0;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
}
.title {
  font-size: 18px;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
  padding: 0 15px;
  box-sizing: border-box;
}
.date {
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
  line-height: 20px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 10px 0;
}
</style>
