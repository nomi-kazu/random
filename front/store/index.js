export const state = () => {
  return {
    access_token: null,
    uid: null,
    id: null
  }
}
export const mutations = {
  setUser (state, res) {
    state.access_token = res.headers['access-token']
    state.uid = res.data.data.uid
    state.id = res.data.data.id
    // state.client
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    try {
      await this.$axios.post(process.env.API_URL + '/api/v1/auth/sign_in', { email, password }
      ).then((res) => {
        console.log(res)
        commit('setUser', res)
      })
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }
}
