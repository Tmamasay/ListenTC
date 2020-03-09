function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

/***
 * 格式化时间
 * 
 */
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
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

export default {
  formatNumber,
  formatTime,
  getTouchData,
  unique
}
