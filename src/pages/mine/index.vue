<template>
  <div>
  
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'

export default {
          components: {
         
          },

          data () {
            return {
              user_info:''
            }
          },
          created () {
            // let key_token=this.$store.getters.user.token
          
        },
        onShow(){
          if (mpvuePlatform === 'wx') {
              console.log('------------------>')
              this.user_info=mpvue.getStorageSync('user_info');
        }
        }

}
</script>

<style>

</style>
