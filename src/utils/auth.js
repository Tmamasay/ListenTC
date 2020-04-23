const TokenKey = 'Admin-Token'
const Userinfo = 'user_info'
const appToken = 'app_Token' //oem小程序标识
const userPhone = 'userPhone' //手机号
const searchKey = 'historyKey' //搜索关键字
const levelCode = 'LevelCode' //年级等级
const userId = 'userId' //年级等级
const musicInfo = 'MusicInfo' //music信息
const musicList = 'musicList' //music信息
const sysType = 'sysType' //手机类型
const actCode = 'actCode' //活动code
const activityId = 'activityId' //当前活动id
const levelName = 'levelName' //身份名称

//存取token到本地--->本地缓存
export function getToken() {
  return wx.getStorageSync(TokenKey)
}

export function setToken(token) {
  try {
    return wx.setStorageSync(TokenKey, token)
  } catch (e) {
    return this.setstorage(TokenKey, token)
  }
}
export function removeToken() {
  return wx.removeStorageSync(TokenKey)
}
//存取历史搜索
export function getHistory() {
  return wx.getStorageSync(searchKey)
}

export function setHistory(keylist) {
  try {
    return wx.setStorageSync(searchKey, keylist)
  } catch (e) {
    return this.setstorage(searchKey, keylist)
  }
}
export function removeHistory() {
  return wx.removeStorageSync(searchKey)
}
//存取小程序的唯一标识--->本地缓存
export function getAppToken() {
  return wx.getStorageSync(appToken)
}

export function setAppToken(token) {

  try {
    return wx.setStorageSync(appToken, token)
  } catch (e) {
    return this.setstorage(appToken, token)
  }
}
//存取用户手机号码--->本地缓存
export function getUserPhone() {
  return wx.getStorageSync(userPhone)
}

export function setUserPhone(phone) {

  try {
    return wx.setStorageSync(userPhone, phone)
  } catch (e) {
    return this.setstorage(userPhone, phone)
  }
}

//存取用户信息--->本地缓存
export function getUserinfo() {
  return wx.getStorageSync(Userinfo)
}

export function setUserinfo(info) {
  try {
    return wx.setStorageSync(Userinfo, info)
  } catch (e) {
    return this.setstorage(Userinfo, info)
  }
}

export function removeUserinfo() {
  return wx.removeStorageSync(Userinfo)
}
//存取用户年级等级--->本地缓存
export function getLevelCode() {
  return wx.getStorageSync(levelCode)
}

export function setLevelCode(code) {
  try {
    return wx.setStorageSync(levelCode, code)
  } catch (e) {
    return this.setstorage(levelCode, code)
  }
}
export function getLevelName() {
  return wx.getStorageSync(levelName)
}

export function setLevelName(name) {
  try {
    return wx.setStorageSync(levelName, name)
  } catch (e) {
    return this.setstorage(levelName, name)
  }
}
export function removeLevelCode() {
  return wx.removeStorageSync(levelCode)
}
//存取用户UserID--->本地缓存
export function getUserId() {
  return wx.getStorageSync(userId)
}

export function setUserId(id) {
  try {
    return wx.setStorageSync(userId, id)
  } catch (e) {
    return this.setstorage(userId, id)
  }
}
//存取用户SysType--->本地缓存
export function getSysType() {
  return wx.getStorageSync(sysType)
}

export function setSysType(type) {
  try {
    return wx.setStorageSync(sysType, type)
  } catch (e) {
    return this.setstorage(sysType, type)
  }
}

export function removeUserId() {
  return wx.removeStorageSync(userId)
}

//存取用户当前播放数据--->本地缓存
export function getMusicInfo() {
  return wx.getStorageSync(musicInfo)
}

export function setMusicInfo(music) {
  try {
    return wx.setStorageSync(musicInfo, music)
  } catch (e) {
    return this.setstorage(musicInfo, music)
  }
}

export function removeMusicInfo() {
  return wx.removeStorageSync(musicInfo)
}

//存取用户当前播放的list--->本地缓存
export function getMusicList() {
  return wx.getStorageSync(musicList)
}

export function setMusicList(list) {
  try {
    return wx.setStorageSync(musicList, list)
  } catch (e) {
    return this.setstorage(musicList, list)
  }
}

export function removeMusicList() {
  return wx.removeStorageSync(musicList)
}

//存取用户活动code--->本地缓存
export function getActCode() {
  return wx.getStorageSync(actCode)
}

export function setActCode(code) {
  try {
    return wx.setStorageSync(actCode, code)
  } catch (e) {
    return this.setstorage(actCode, code)
  }
}


//存取用户活动id--->本地缓存
export function getActivityId() {
  return wx.getStorageSync(activityId)
}

export function setActivityId(id) {
  try {
    return wx.setStorageSync(activityId, id)
  } catch (e) {
    return this.setstorage(activityId, id)
  }
}
