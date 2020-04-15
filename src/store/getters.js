const getters = {
  baseurl: state => state.user.baseurl,
  token: state => state.user.token,
  type: state => state.user.type,
  cardid: state => state.user.card_id,
  userSt: state => state.user.userSt,
  formid: state => state.user.mblists,
  isPlayMusicId: state => state.user.isPlayMusicId,
  userId: state => state.user.userId,
}
export default getters
