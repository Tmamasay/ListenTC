<template>
  <div class="voiceofchildren">
    <div class="areaBox">
      <areaselect :areaLists="areaList" @getActCode="getActCode"></areaselect>
    </div>

    <div class="list">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="gotoDetail(item.reviewItemId)"
      >
        <div class="item_img">
          <img class="content_img" :src="item.imageUrl" alt />
          <div
            class="left_top"
            style="background-image:url(../../../../static/images/index/memo.png)"
          >
            <img class="herji" src="../../../../static/images/index/herji.png" alt />
            {{item.playNum}}
          </div>
          <img class="right_bottom" src="../../../../static/images/index/bf.png" alt />
        </div>
        <div class="item_content">
          <div class="item_title">{{item.title}}</div>
          <div class="flbb">
            <div class="item_people">朗读者：{{item.author}}</div>
            <!-- <div class="dianzhan active">
              <img class="reddz" src="../../../../static/images/index/dianzhan_red.png" alt />
              533
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areaselect from "@/components/areaselect";
import { getActCode } from "@/utils/auth";
export default {
  components: { areaselect },
  data() {
    return {
      list: [],
      areaList: [],
      actCode: getActCode() || "",
    };
  },
  mounted() {},
  onLoad() {},
  methods: {
    gotoDetail(id) {
      wx.navigateTo({
        url: `/pages/index/voiceofchildrendetail/main?bookId=${id}`
      });
    },
    getActCode() {
      this.actCode = getActCode();
      this.peopleDetail();
    },
    peopleDetail() {
      const params = {
        currentPage: 1,
        pageSize: 100
      };
      this.$api.tangy.reviewAct(params).then(res => {
        this.list = res.result.pageResults;
        console.log(res);
      });
    },

    //获取大区
    async getArea() {
      await this.$api.tangy.area().then(res => {
        this.areaList = res.result;
      });
    }
  },

  onShow() {
    this.getArea();
    this.peopleDetail();
  }
};
</script>

<style>
.dianzhan {
  font-size: 12px;
  color: rgba(145, 145, 145, 1);
}
.dianzhan.active {
  color: #fe5e5e;
}
.reddz {
  width: 12px;
  height: 12px;
}
.flbb {
  display: flex;
  line-height: 20px;
  justify-content: space-between;
}
.item_content {
  padding: 8px;
  box-sizing: border-box;
}
.item_people {
  font-size: 10px;
  font-weight: 400;
  color: rgba(142, 142, 142, 1);
}
.item_title {
  font-size: 13px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.herji {
  width: 11px;
  height: 10px;
}
.item_img {
  width: 100%;
  height: 94px;
  position: relative;
}
.content_img {
  width: 100%;
  height: 100%;
}
.left_top {
  display: block;
  width: 55px;
  height: 18px;
  position: absolute;
  left: 0;
  margin-left: -4px;
  text-align: center;
  top: 5px;
  z-index: 1;
  background: no-repeat center center;
  background-size: cover;
  font-size: 10px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(67, 67, 67, 1);
}
.right_bottom {
  display: block;
  width: 21px;
  height: 21px;
  position: absolute;
  right: 7px;
  bottom: 7px;
  z-index: 1;
}
.list {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 170px;
  height: 155px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 20px;
}
.areaBox {
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  font-weight: 400;
  padding: 0 10px;
  background-color: #fff;
  color: rgba(109, 109, 109, 1);
  z-index: 100;
}
.current_area {
  color: #222222;
}
.voiceofchildren {
  background-color: #f7f7f7;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
