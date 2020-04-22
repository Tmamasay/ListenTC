import fetch from '@/utils/fetch.js'
import {
  getLevelCode,
  getUserId,
  getActivityId,
  getActCode
} from "@/utils/auth";
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
    url: `${store.getters.baseurl}/general/v2/banner/activity/${getLevelCode()}?lng=${params.lng}&lat=${params.lat}&userId=${getUserId()}`,
    method: 'get',
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v2/banner/activity/${getLevelCode()}`)
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
// 每日一读完整内容
const everydayReadContent = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/read/v2/material/content/${params.contentId}`,
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
    url: `${store.getters.baseurl}/general/v1/course/recommend/${getLevelCode()}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v1/course/recommend/${getLevelCode()}`)
    }
  })
}
//首页少年之声
const reviewRecommend = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/general/v1/review/recommend/${getLevelCode()}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v1/review/recommend/${getLevelCode()}`)
    }
  })
}

const activityRank = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/activity/v1/activity/works/${params.activityId}/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/activity/v1/activity/works/${params.activityId}/${getUserId()}`)
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
    url: `${store.getters.baseurl}/user/v1/user/message/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/user/message/${getUserId()}`)
    }
  })
}

const messageDetail = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/user/message/${params.messageId}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/user/message/${params.messageId}`)
    }
  })
}

const notice = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/user/notice/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/user/notice/${getUserId()}`)
    }
  })
}

const readBook = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/read/v2/book/${params.categoryId}/${getLevelCode()}`,
    method: 'get',
    params: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v2/book/${params.categoryId}/${getLevelCode()}`)
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
    url: `${store.getters.baseurl}/user/v1/userInfo/${getUserId()}`,
    method: 'get',
    params: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/userInfo/${getUserId()}`)
    }
  })
}
const saveUserInfo = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/user/info/${getUserId()}`,
    method: 'post',
    data: params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/user/info/${getUserId()}`)
    }
  })
}

//获取用户类型
const getAttribute = () => {
  return fetch({
    url: `${store.getters.baseurl}/general/v2.1/module/type/attribute`,
    method: 'get',
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v2.1/module/type/attribute`)
    }
  })
}


//获取短信验证码
const verificationCode = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/applet/v1/verificationCode`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/applet/v1/verificationCode`)
    }
  })
}

//保存用户手机
const saveUserPhone = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/applet/v1/mobile/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/applet/v1/mobile/${getUserId()}`)
    }
  })
}

const getHistory = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/course/v2/course/history/${getUserId()}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/course/v2/course/history/${getUserId()}`)
    }
  })
}

const getAreaJson = () => {
  return fetch({
    url: `http://192.168.5.205:8124/json/province.json`,
    method: 'get',
  })
}

const getVisitor = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/user/v1/visitor/session`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/visitor/session`)
    }
  })
}

//我的课程 
const myCourse = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/course/v1/course/user/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/course/v1/course/user/${getUserId()}`)
    }
  })
}
//我的读本
const myRead=(params)=>{
  return fetch({
    url: `${store.getters.baseurl}/read/v1.5/book/user/${getUserId()}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v1.5/book/user/${getUserId()}`)
    }
  })
}

//我的课程详情
const courseDetail = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/course/v1/course/user/${getUserId()}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/course/v1/course/user/${getUserId()}`)
    }
  })
}

//我收藏的课程 
const myStudyCourse = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/course/v1/lesson/collection/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/course/v1/lesson/collection/${getUserId()}`)
    }
  })
}


//我收藏的范文
const myReadCollect=(params)=>{
  return fetch({
    url: `${store.getters.baseurl}/read/v1/content/collection/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v1/content/collection/${getUserId()}`)
    }
  })
}


const peopleDetail = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/activity/v1/review/recommend/${getLevelCode()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/activity/v1/review/recommend/${getLevelCode()}`)
    }
  })
}


const peopleActDetail = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/activity/v1/review/item/${params.itemId}`,
    method: 'get',
    params,
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/activity/v1/review/item/${params.itemId}`)
    }
  })
}

const reviewAct = (params) => {
  return fetch({
    url: `${store.getters.baseurl}/activity/v1/review/${getActCode()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/activity/v1/review/${getActCode()}`)
    }
  })
}


const follow = (params) =>{
  return fetch({
    url: `${store.getters.baseurl}/user/v1/follow/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/follow/${getUserId()}`)
    }
  })
}

const fans = (params) =>{
  return fetch({
    url: `${store.getters.baseurl}/user/v1/fans/${getUserId()}`,
    method: 'post',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/fans/${getUserId()}`)
    }
  })
}


const getIndexUserInfo = ()=>{
  return fetch({
    url: `${store.getters.baseurl}/user/v1/userInfo/home/${getUserId()}`,
    method: 'get',
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/user/v1/userInfo/home/${getUserId()}`)
    }
  })
}

const tangy = {
  sendmobanmes, //推送模板消息
  everydayRead, //每日一读（首页）
  everydayReadContent,// 每日一读完整内容
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
  getHistory, //查询历史课程
  getAreaJson,
  getAttribute, // 获取用户类型
  verificationCode, //获取手机验证码
  saveUserPhone, //用户绑定手机号
  getVisitor, //游客模式
  peopleDetail, //少年之声列表
  peopleActDetail, //少年之声详情
  reviewAct, //少年之声活动列表
  follow,//关注的用户
  fans,//粉丝用户
  messageDetail,//消息详情
  getIndexUserInfo,//获取首页用户信息
  myStudyCourse, //我收藏的课程
  myReadCollect,//我的收藏范文
  myRead,//我的范文
  myCourse,//我的课程
  courseDetail,//课程详情
}
export default tangy
