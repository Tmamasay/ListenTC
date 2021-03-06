import chengx from '@/api/chengx'
import tangy from '@/api/tangy'
import {
  getToken,
  setUserId,
  setToken,
  setLevelCode,
  setUserinfo,
  setLevelName
} from '@/utils/auth'
// import {transformRequest} from '@/utils'
import qs from 'qs';

const user = {
  state: {
    userinfo: '',
    status: '',
    userId: '',
    code: '',
    levelCode: '',
    token: getToken(),
    power: '', //判断是否有权限进入名片 0未绑定员工 1绑定员工	
    card_id: 0, //临时存取客户关联的名片id 
    baseurl: 'http://test.sdb.new-class.cn', //调试地址
    // baseurl:'http://192.168.5.205:8123',//线上地址
    mblists: [], //存放模板id
    isPlayMusicId: '' //是否有正在播放的歌曲
    // baseurl:'http://bqa2nc.natappfree.cc/',
    // token:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhZG1pbiIsInN1YiI6IjI2MTQ4IiwiYXVkIjoidXNlciIsImV4cCI6MTU1MjI3MjQ4MCwibmJmIjoxNTUxNjY3NjgwLCJpYXQiOjE1NTE2Njc2ODAsImp0aSI6IjEzMWM0MzgyLTM4ZTItNDI3Zi04OGFjLWQ1OTU1ODY5MjFjNCJ9.xe4mmHs34GLC3CCUjegk_kZL29egq4xj5hwn5iHEhLw',
    // name: '',
    // avatar: '',
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_MUSICID: (state, isPlayMusicId) => { //保存当前播放id
      state.isPlayMusicId = isPlayMusicId
    },
    SET_POWER: (state, type) => { //用户是否绑定员工
      state.power = type
    },
    SET_FORMID: (state, data) => { //存放模板id
      state.mblists.push(data)
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_USERINFO: (state, userinfo) => { //基本信息
      state.userinfo = userinfo
    },
    SET_ID: (state, id) => { //用户名
      state.card_id = id
    },
    SET_USER_ID: (state, userId) => { //用id
      state.userId = userId
    },
    SET_LEVEL_CODE: (state, levelCode) => { //用户类型
      state.levelCode = levelCode
    },
    // SET_AVATAR: (state, avatar) => { //用户头像
    //   state.avatar = avatar
    // },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },


  actions: {
    //存起播放id
    putMusicId({
      commit
    }, id) {
      commit('SET_MUSICID', id);
    },
    //存取临时的id
    putCardId({
      commit
    }, id) {
      commit('SET_ID', id);
    },
    //存放模板id
    putMoBanId({
      commit
    }, data) {
      commit('SET_FORMID', data);
    },

    // 用户名登录，获取token
    LoginByWX({
      commit
    }, options) {
      // 
      return new Promise((resolve, reject) => {
        chengx.getToken(options).then((res) => {
          console.log(res);
          if (+res.code === 200) {
            const data = res.result
            //保存token
            console.log('新用户保存token和用户类型')
            commit('SET_TOKEN', data.accessToken); //保存toke
            commit('SET_USER_ID', data.userId); //保存用户id
            setToken(data.accessToken) //保存token到本地缓存
            setUserId(data.userId) //保存用户id到本地缓存
            tangy.userInfo({
                userId: data.userId
              })
              .then((rit) => {
                if (+res.code === 200) {
                  setLevelCode(rit.result.levelCode);
                  setLevelName(rit.result.levelName);
                }
              });
            resolve()
          }
        }).catch((error) => {
          reject(error)
        });
      })
    },

    // 获取用户信息
    SetUserMes({
      commit
    }, e) {
      return new Promise((resolve, reject) => {
        //提交用户信息到服务器
        // 
        user_api.upUserInfo(e.target.userInfo).then(res => {
            console.log(res);
            if (+res.code === 1) {
              console.log('存取用户信息====>到本地缓存')
              setUserinfo(e);
              resolve()
            } else {
              wx.showToast({
                title: res.message,
                icon: "none",
                duration: 1000
              });
            }
          })
          .catch(error => {
            wx.showToast({
              title: "网络异常",
              icon: "none",
              duration: 1000
            });
            reject(error)
          });
      })

    },
  }
}

export default user
