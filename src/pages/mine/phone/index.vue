<template>
    <div class="tip_contain">
      <div class="tip_content">
        <div class="tip_content_header">提示</div>
        <div class="tip_content_cont">您的名片创建成功,已进入审核流程,请关注您的微信服务通知.谢谢！</div>
        <div class="tip_content_footer">确定</div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['text']
}
</script>
 
<style>
 .tip_contain{
   width: 100vw;
   height: 100vh;
   background:rgba(0,0,0,0.4);
   z-index: 999;
 }
 .tip_content{
   width: 83%;
   top:30%;
   height: 195px;
   background:rgba(255,255,255,1);
   border-radius:10px;
   position: absolute;
    left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
 }
 .tip_content_header{
   text-align: center;
   width: 100%;
   padding: 13px 0px 11px 0px;
   font-size:20px;
    font-family:HiraginoSansGB-W3;
    font-weight:normal;
    color:rgba(66,66,66,1);
   border-bottom: 1px solid rgba(221,219,222,1);
 }
 .tip_content_cont{
   text-align: left;
   width: 90%;
   margin: 0 auto;
   line-height: 30px;
   padding: 20px 0px 20px 0px;
   font-size:18px;
    font-family:HiraginoSansGB-W3;
    font-weight:normal;
    color:rgba(66,66,66,1);
    
 }
 .tip_content_footer{
   border-top: 1px solid rgba(221,219,222,1);
   text-align: center;
   width: 100%;
   padding: 13px 0px 11px 0px;
   font-size:20px;
  font-family:HiraginoSansGB-W3;
  font-weight:normal;
  color:rgba(42,140,230,1);
 }
</style>
