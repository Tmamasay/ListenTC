// import moment from 'moment' // 时间日期转换
import sha1 from 'sha1' // 
import { Base64 } from 'js-base64';
// var sha1 = require('sha1');


function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
/***
 * 播放时间格式化 入参是04:30这种
 * 
 */
export function formatMusic(str) {
   const Arr=str.split(':')
   const A=(+Arr[0])*60
   const B=+Arr[1]
  return A+B
}

/***
 * 日期格式化
 * 
 */
// export function dateformat(dataStr, pattern) {
//   return moment(dataStr).format(pattern)
// }
/***
 * 格式化时间
 * 
 */

export function _changeTimeBySecond(second) {
  function _addZero(time) {
    let str = time;
    if (time < 10) {
      str = '0' + time;
    }
    return str;
  }
  var hourTime = 0;
  var minuteTime = 0;
  var secondTime = 0;
  if (second > 60) {  //如果秒数大于60
    minuteTime = Math.floor(second / 60);
    secondTime = Math.floor(second % 60);
    if (minuteTime >= 60) {  //如果分钟大于60
      hourTime = Math.floor(minuteTime / 60);
      minuteTime = Math.floor(minuteTime % 60);
    } else {
      hourTime = 0;
    }
  } else {
    hourTime = 0;
    minuteTime = 0;
    if (second == 60) {  //如果秒数等于60
      minuteTime = 1;
      secondTime = 0;
    } else {
      secondTime = second;
    }
  }
  // var timeResult = _addZero(hourTime) + ':' +_addZero(minuteTime) + ':' + _addZero(secondTime);
  var timeResult = _addZero(Math.round(minuteTime) ) + ':' + _addZero(Math.round(secondTime) );
  return timeResult;
}

/***
 * 判断用户滑动
 * 左滑还是右滑
 */
export function getTouchData(endX, endY, startX, startY){
  let turn = "";
  if (endX - startX > 70 && Math.abs(endY - startY) < 50) {      //右滑
    turn = "right";
  } else if (endX - startX < -70 && Math.abs(endY - startY) < 50) {   //左滑
    turn = "left";
  }
  return turn;
}
export  function unique (arr) {
  return Array.from(new Set(arr))
}

/***
 * 加密算法(app)
 * 
 */
export function ShaAccess(dataStr) {
  return Base64.encode(sha1(`oczhkj123456${dataStr}`))
}
/***
 * 表单序列化(app)
 * 
 */
export function transformRequest(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  console.log(formData)
  
  return formData
}
export default {
  formatNumber,
  ShaAccess,
  getTouchData,
  unique,
  transformRequest
}
