import fetch from '@/utils/fetch.js'
import { getLevelCode,getUserId } from "@/utils/auth";
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
    url: `${store.getters.baseurl}/course/v1/category/course/${getLevelCode()}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/course/v1/category/course/${getLevelCode()}`)
      // 'Authorization':store.getters.token
    }
  })
}
//年级
const getClazz = params => {
  return fetch({
    url: `${store.getters.baseurl}/general/v1/grade`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v1/grade`)
      // 'Authorization':store.getters.token
    }
  })
}
//收藏 
const putCollection = params => {
  return fetch({
    url: `${store.getters.baseurl}/read/v1/record/collection/${getUserId()}`,
    method: 'post',
    // data:params,
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v1/record/collection/${getUserId()}`)
      // 'Authorization':store.getters.token
    }
  })
}
//点赞
const putRecord = params => {
  return fetch({
    url: `${store.getters.baseurl}/read/v1/record/like/${getUserId()}`,
    method: 'post',
    // data:params,
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v1/record/like/${getUserId()}`)
      // 'Authorization':store.getters.token
    }
  })
}

const chengx = {
  getFans, //查询粉丝用户
  getToken, //获取登录凭证
  getUserOpenId, //获取openid
  getCategoryCourse,//学堂列表
  getClazz,//查询年级api
  putCollection ,//收藏 
  putRecord //点赞
}
export default chengx
