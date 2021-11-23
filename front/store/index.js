import Cookies from 'universal-cookie'

export const state = () => {
  return {
    access_token: '',
    uid: '',
    client: '',
    id: '',
    isAuthenticated: false
  }
}
export const mutations = {
  setUser (state, res) {
    state.access_token = res.headers['access-token']
    state.uid = res.headers.uid
    state.client = res.headers.client
    state.id = res.data.data.id
    state.isAuthenticated = true
  },
  setHeader (state, headers) {
    state.access_token = headers['access-token']
    state.uid = headers.uid
    state.client = headers.client
    state.isAuthenticated = true
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
  },
  nuxtClientInit ({ commit }) {
    const cookies = new Cookies()
    try {
      console.log(cookies)
      commit('setHeader', { headers: cookies.cookies})
    } catch (err) {
      // No valid cookie found
    }
  }
}
