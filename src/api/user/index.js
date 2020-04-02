import fetch from '@/utils/fetch.js'
import store from '@/store/index';

//上传用户详细信息
const upUserInfo= params=>{
    return fetch({
        url:`${store.getters.baseurl}user/saveUserInfoWx`,
        method:'post',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//获取token 
const gettoken_api= params=>{
    return fetch({
        url:`${store.getters.baseurl}user/getToken?code=${params.code}`,
        method:'get',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//获取轮播图
const getAdvertisement=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/advert/getAdvertisement`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}

//查询我的课程(试看、购买、收藏)
const getMyCollect=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/MyCollect/getMyCollect?currentPage=${params.currentPage}&showCount=${params.showCount}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//查询该课程是否已经购买过
const checkCourseSeriesIsBuy=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/courseSeries/checkCourseSeriesIsBuy?id=${params.id}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}

//根据id查询课程的详情
const getCourseSeriesById=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/courseSeries/getCourseSeriesById?id=${params.id}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}

//查询今日推荐
const getTodayCourseSeriesList=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/courseSeries/getTodayCourseSeriesList?currentPage=${params.currentPage}&showCount=${params.showCount}&more_type=${params.more_type}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//查询所有的课程分类
const getCourseCategoryList=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/courseCategory/getCourseCategoryList`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//根据课程分类查询首页的课程  
const getCourseSeries=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/courseSeries/getCourseSeries?currentPage=${params.currentPage}&showCount=${params.showCount}&more_type=${params.more_type}&categoryId=${params.categoryId}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//查询所有的资讯分类
const getAllCategory=params=>{
    return fetch({
        url:`${store.getters.baseurl}/api/v1/hnInfo/getAllCategory`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//切换课程分类
const getAllInfoListById=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/hnInfo/getAllInfoListById?currentPage=${params.currentPage}&showCount=${params.showCount}&id=${params.id}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//保存我的收藏
const saveMyCollect=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/MyCollect/saveMyCollect`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}

//解密手机号码 
const getDecryptWxPhone=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/user/getDecryptWxPhone`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}

//获取订单编号
const createWaitPayOrder=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/pay/createWaitPayOrder`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//获取支付参数
const payWaitOrder=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/pay/payWaitOrder`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//搜索 
const indexSearch=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/search/indexSearch?currentPage=${params.currentPage}&showCount=${params.showCount}&query=${params.query}&search_type=${params.search_type}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//进入搜索页面,查询用户的搜索记录
const indexSearchCache=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/search/indexSearchCache`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}








//创建我的名片
const create_card=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/user/saveHnUser`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//获取解密后的微信手机号
const get_phonenumber=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/user/getDecryptWxPhone`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//获取部门列表
const list_department=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/department/listDepartment`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}

//客户绑定员工名片
const rel_business_card=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/user/relBusinessCard`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//查询所绑定的名片
const search_business_cardlist=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/user/listRelBusinessCard?currentPage=${params.currentPage}&showCount=${params.showCount}&query=${params.query}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//查询分公司
const search_company=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/branchOffice/listBranchOffice`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//根据id查询名片详情
const search_card_byid=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/user/findHnUserById?id=${params.id}`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//客户绑定员工名片
const check_card=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/user/relBusinessCard`,
        method:'POST',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
    })
}
//获取阿里云OSS服务上传文件的凭证
const getAliyunOssToken=params=>{
    return fetch({
        url:`${store.getters.baseurl}api/v1/aliyunOss/getAliyunOssToken`,
        method:'GET',
        data:params,
         headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'Authorization':store.getters.token
         }
        })
    }
 



const user={
    upUserInfo,//上传用户信息
    gettoken_api,//获取token
    getAdvertisement,//查询轮播图
    getMyCollect,//查询我的课程
    getTodayCourseSeriesList,//查询今日推荐
    getCourseCategoryList,//查询所有的课程分类
    getCourseSeries,//根据课程分类查询首页的课程
    checkCourseSeriesIsBuy,//查询课程是否购买过
    getCourseSeriesById,//根据id查询课程详情
    getAllCategory,//查询所有资讯分类
    getAllInfoListById,//切换资讯分类
    getDecryptWxPhone,//解密手机号码
    createWaitPayOrder,//获取订单编号
    payWaitOrder,//支付参数
    saveMyCollect,//保存我的收藏
    indexSearch,//搜索
    indexSearchCache,//搜索记录

    create_card,//创建名片

    search_card_byid,//根据id查询名片
    search_company,//查询分公司
    get_phonenumber,//获取解密后的手机微信号
    list_department,//获取部门列表
    rel_business_card,//客户绑定员工名片
    search_business_cardlist,//查询所绑定的名片
    check_card, //客户绑定员工名片
    getAliyunOssToken //获取阿里云OSS服务上传文件的凭证
}
export default user;