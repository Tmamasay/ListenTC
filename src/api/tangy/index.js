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
  ;
  return fetch({
    url: `${store.getters.baseurl}/general/v2/banner/activity/${params.levelCode}`,
    method: 'get',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/general/v2/banner/activity/${params.levelCode}`)
    }
  })
}

const everydayRead = (params) => {
  ;
  return fetch({
    url: `${store.getters.baseurl}/read/v2/material/everyday`,
    method: 'get',
    data: qs.stringify(params),
    headers: {
      'access': ShaAccess(`${store.getters.baseurl}/read/v2/material/everyday`)
    }
  })
}

const tangy = {
  sendmobanmes, //推送模板消息
  everydayRead, //每日一读
  activityList, //活动列表
}
export default tangy
