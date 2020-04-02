import fetch from '@/utils/fetch.js'
import store from '@/store/index';
const sendmobanmes= params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/form/sendFormIds`,
        method:'post',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
const tangy={
    sendmobanmes //推送模板消息
}
export default tangy