<template>
   <div class="card_top">
        <div class="card_top_pad">
          <div class="card_top_header">
            <div class="card_top_header_conth">
              <div class="card_top_header_img">
                <img src="../../static/images/card/card.png" alt srcset>
              </div>
            </div>
            <div class="card_top_header_cont">
              <p>工商注册/建筑资质/财税代理/知识产权</p>
              <p>贷款代办/教育培训/法律咨询/品牌建设</p>
            </div>
          </div>
          <p class="card_name">
            {{info.userName}}
            <span>{{info.userDuty}}</span>
          </p>
          <div class="card_info">
            <div class="card_info_left">
              <div class="card_info_left_content1">
                <div class="card_info_left_line">
                  <div class="card_icon">
                    <img src="../../static/images/card/cards/card_p.png" alt srcset>
                  </div>
                  <div class="card_cont">{{info.companyTel}}</div>
                </div>
                <div class="card_info_left_line" >
                  <div class="card_icon3">
                    <img src="../../static/images/card/cards/card_ip.png" alt srcset>
                  </div>
                  <div class="card_cont">{{info.userTel}}</div>
                </div>
              </div>
              <div class="card_info_left_line">
                <div class="card_icon">
                  <img src="../../static/images/card/cards/card_i.png" alt srcset>
                </div>
                <div class="card_cont">{{info.companyWeb}}</div>
              </div>
              <div class="card_info_left_line">
                <div class="card_icon2">
                  <img src="../../static/images/card/cards/card_l.png" alt srcset>
                </div>
                <div class="card_cont1">{{info.userAddress}}</div>
              </div>
            </div>
            <div class="card_info_right">
              <div class="card_scan">
                <img src="../../static/images/card/cards/card_e.png" @click="show_tips" alt srcset>
              </div>
            </div>
          </div>
        </div>
        <tipspub v-if="showpop" v-on:panelShow="closePop"></tipspub>
      </div>
</template>

<script>
import tipspub from '@/components/Tipspub'
export default {
  components: {
   tipspub
  }, 
  props:['info'],
  data() {
    return {
      showpop:false,
      panelShow:false,
    };
  },
  methods: {
 
  show_tips(){
    // this.showpop= true;
    // this.panelShow=true;
      wx.previewImage({
        current:this.info.userQrTemplateUrl, // 当前显示图片的http链接
        urls: [this.info.userQrTemplateUrl] // 需要预览的图片http链接列表
      });
  },
  closePop(data){
				this.panelShow=false;
				this.showpop=false;
          },
  }
}
</script>
 
<style>
.card_top {
  width: 94%;
  height: 221px;
  position: absolute;
  top: 88px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 94, 182, 0.22);
  border-radius: 10px;
}
 .card_top_pad {
  width: 92%;
  margin: 0 auto;
}
.card_top_header {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  flex: 1;
}
.card_top_header_conth {
  flex: 0 0 35%;
}
.card_top_header_img {
  width: 124px;
  height: 31px;
}
.card_top_header_img img {
  width: 100%;
  height: 100%;
}
.card_top_header_cont {
  flex: 0 0 65%;
  margin-top: 2px;
}

.card_top_header_cont p {
  font-size: 23rpx;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(105, 114, 128, 1);
  text-align: center;
  line-height: 15px;
}
.card_name {
  font-size: 24px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  padding: 20px 0px 15px 0px;
}
.card_name span {
  font-size: 14px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
}
.card_info {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.card_info_left {
  flex: 0 0 75%;
}
.card_info_right {
  flex: 0 0 25%;
}
.card_info_left_content1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.card_info_left_line {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  margin-right: 8px;
  align-items: center;
  margin-bottom: 7px;
}
.card_icon {
  width: 11px;
  height: 12px;
}
.card_icon2 {
  width: 13px;
  height: 14px;
}
.card_icon3 {
  width: 9px;
  height: 12px;
}
.card_icon3 img {
  /* width: 100%;
    height: 100%; */
  display: inline;
}
.card_icon2 img {
  /* width: 100%;
    height: 100%; */
  display: inline;
}
.card_icon img {
  /* width: 100%;
    height: 100%; */
  display: inline;
}
.card_cont {
  font-size: 16px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(105, 114, 128, 1);
  padding-left: 4px;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
  /* word-wrap: break-word;
    word-break: normal; */
}
.card_cont1 {
  font-size: 16px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(105, 114, 128, 1);
  padding-left: 4px;
  overflow: hidden;
/* text-overflow:ellipsis; */
/* white-space: nowrap; */
  word-wrap: break-word;
    word-break: normal;
    height: 35px;
}
.card_scan {
  width: 60px;
  height: 60px;
  /* float: right; */
  margin-top: 4px;
  margin-left: 10px;
  overflow: hidden;
}
.card_scan img {
  width: 100%;
  height: 100%;
}
</style>
