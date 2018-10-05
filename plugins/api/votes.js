export default ({ app, store }, inject) => {
  inject('votes', () => {
    return {}
  })

  app.$votes.getListExpired = async (page, perPage) => {
    let data = await app.$axios.get(
      `/api/votes?perPage=${perPage}&page=${page}&expired=true`
    )
    let votes = data.data.data.votes
    store.commit('ADD_VOTES_EXPIRED', votes)
  }
}
