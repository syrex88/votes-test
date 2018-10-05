export const state = () => ({
  votes_expired: []
})

export const mutations = {
  ADD_VOTES_EXPIRED(state, votes_expired) {
    state.votes_expired = state.votes_expired.concat(votes_expired)
  }
}
