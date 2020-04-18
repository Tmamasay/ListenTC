import fetch from '@/utils/fetch.js'
import {
  ShaAccess
} from '@/utils'
import store from '@/store/index';
import qs from 'qs';
const sendmobanmes = params => {
  return fetch({
    url: `${store.getters.baseurl}/api/v1/form/sendFormIds`,
    method: 'post',
    data: params,
  })
}


const activityList = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/general/v2/banner/activity/${params.levelCode}?lng=${params.lng}&lat=${params.lat}&userId=${params.userId}`,
    method: 'get',
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v2/banner/activity/${params.levelCode}`)
    }
  })
}

const everydayRead = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/read/v2/material/everyday`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v2/material/everyday`)
    }
  })
}


const activityDetail = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/activity/v2/activity/detail/${params.activityId}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/activity/v2/activity/detail/${params.activityId}`)
    }
  })
}
//首页推荐课程
const courseRecommend = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/general/v1/course/recommend/${params.levelCode}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v1/course/recommend/${params.levelCode}`)
    }
  })
}
//首页少年之声
const reviewRecommend = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/general/v1/review/recommend/${params.levelCode}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v1/review/recommend/${params.levelCode}`)
    }
  })
}



const activityRank = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/activity/v1/activity/works/${params.activityId}/${params.userId}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/activity/v1/activity/works/${params.activityId}/${params.userId}`)
    }
  })
}

// currentPage
// pageSize
// areaId
const activityArea = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/activity/v1/activity/area`,
    method: 'post',
    params: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/activity/v1/activity/area`)
    }
  })
}

const area = () => {
  return fetch({
    url: `${store.getters.baseurl}/general/v1/areas`,
    method: 'get',
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v1/areas`)
    }
  })
}

const message = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/user/message/${params.userId}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/user/message/${params.userId}`)
    }
  })
}

const notice = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/user/notice/${params.userId}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/user/notice/${params.userId}`)
    }
  })
}

const readBook = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/read/v2/book/${params.categoryId}/${params.levelCode}`,
    method: 'get',
    params: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v2/book/${params.categoryId}/${params.levelCode}`)
    }
  })
}
const readBookDetail = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/read/v2/book/detail/${params.bookId}`,
    method: 'get',
    params: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v2/book/detail/${params.bookId}`)
    }
  })
}
const readContentDetail = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/read/v1.5/book/detail/${params.bookId}`,
    method: 'get',
    params: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v1.5/book/detail/${params.bookId}`)
    }
  })
}


const userInfo = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/userInfo/${params.userId}`,
    method: 'get',
    params: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/userInfo/${params.userId}`)
    }
  })
}
// general/v1/dictionary/level
const saveUserInfo = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/user/info/${params.userId}`,
    method: 'post',
    data: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/user/info/${params.userId}`)
    }
  })
}


const tangy = {
  sendmobanmes, //推送模板消息
  everydayRead, //每日一读（首页）
  activityList, //活动列表（首页）
  activityDetail, //活动详情推荐（首页）
  area, //获取大区
  activityArea, //区域活动
  activityRank, //活动榜单
  message, //消息接口
  notice,
  readBook, //书屋读本
  readBookDetail, //读本详情
  readContentDetail, //书屋教材详情
  courseRecommend, //首页推荐课程
  reviewRecommend, //首页少年之声
  userInfo, //获取用户信息
  saveUserInfo, // 保存用户信息
}
export default tangy
