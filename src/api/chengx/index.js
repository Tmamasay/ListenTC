import fetch from '@/utils/fetch.js'
import store from '@/store/index';
//查询粉丝用户
const getFans= params=>{
    return fetch({
        url:`${store.getters.baseurl}/v1/fans`,
        method:'post',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//获取token 
const gettoken_api= params=>{
    return fetch({
        url:`${store.getters.baseurl}user/getToken?code=${params.code}`,
        method:'get',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
const chengx={
    getFans //查询粉丝用户
}
export default chengx