const TokenKey = 'Admin-Token'
const Userinfo='user_info'
const appToken='app_Token' //oem小程序标识
const userPhone='userPhone'//手机号
const searchKey='historyKey'//搜索关键字

//存取token到本地--->本地缓存
export function getToken() {
  return wx.getStorageSync(TokenKey)
}

export function setToken(token) {
 try {
    return wx.setStorageSync(TokenKey,token)
  } catch (e) {
    return this.setstorage(TokenKey,token)
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
    return wx.setStorageSync(searchKey,keylist)
  } catch (e) {
    return this.setstorage(searchKey,keylist)
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
    return wx.setStorageSync(appToken,token)
  } catch (e) {
    return this.setstorage(appToken,token)
  }
}
//存取用户手机号码--->本地缓存
export function getUserPhone() {
  return wx.getStorageSync(userPhone)
}

export function setUserPhone(phone) {
  
 try {
    return wx.setStorageSync(userPhone,phone)
  } catch (e) {
    return this.setstorage(userPhone,phone)
  }
}

//存取用户信息--->本地缓存
export function getUserinfo() {
    return wx.getStorageSync(Userinfo)
  }
  
  export function setUserinfo(info) {
   try {
      return wx.setStorageSync(Userinfo,info)
    } catch (e) {
      return this.setstorage(Userinfo,info)
    }
  }
  
  export function removeUserinfo() {
    return wx.removeStorageSync(Userinfo)
  }