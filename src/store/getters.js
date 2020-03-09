const getters = {
    baseurl: state => state.user.baseurl,
    token: state => state.user.token,
    type: state => state.user.type,
    cardid:state => state.user.card_id,
    userSt: state => state.user.userSt,
    formid:state => state.user.mblists,


}
export default getters