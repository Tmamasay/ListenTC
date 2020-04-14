import fetch from '@/utils/fetch.js'
import {
  ShaAccess
} from '@/utils'
import store from '@/store/index';
import qs from 'qs';
//查询粉丝用户
const getFans = params => {
  return fetch({
    url: `${store.getters.baseurl}/v1/fans`,
    method: 'post',
    data: params,
    headers: {
      'content-type': 'application/json;charset=UTF-8',

      // 'Authorization':store.getters.token
    }
  })
}
//获取token 
const getToken = params => {
  return fetch({
    url: `${store.getters.baseurl}/applet/v1/appletSession`,
    method: 'post',
    // data:params,
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/applet/v1/appletSession`)
      // 'Authorization':store.getters.token
    }
  })
}
//获取OpenId 
const getUserOpenId = params => {
  return fetch({
    url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx20087bccdc7397f2&secret=c0e5d67b6c3e341c458cd3fe3e607e3b&js_code=${params.code}&grant_type=authorization_code`,
    method: 'get',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      // 'Authorization':store.getters.token
    }
  })
}
//学堂列表
 const getCategoryCourse = params => {
  return fetch({
    url: `${store.getters.baseurl}/course/v1/category/course/1001001003`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/course/v1/category/course/1001001003`)
      // 'Authorization':store.getters.token
    }
  })
}

const chengx = {
  getFans, //查询粉丝用户
  getToken, //获取登录凭证
  getUserOpenId, //获取openid
  getCategoryCourse//学堂列表
}
export default chengx
