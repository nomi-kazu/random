import Cookies from 'universal-cookie'

export const state = () => {
  return {
    accessToken: '',
    uid: '',
    client: '',
    id: '',
    isAuthenticated: false
  }
}
export const mutations = {
  setUser (state, res) {
    state.accessToken = res.headers['access-token']
    state.uid = res.headers.uid
    state.client = res.headers.client
    state.id = res.data.data.id
    state.isAuthenticated = true
  },
  setHeader (state, headers) {
    state.accessToken = headers['access-token']
    state.uid = headers.uid
    state.client = headers.client
    state.isAuthenticated = true
  },
  clearUser (state) {
    state.accessToken = null
    state.isAuthenticated = false
    state.uid = null
    state.client = null
    state.id = null
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    try {
      await this.$axios.post(process.env.API_URL + '/api/v1/auth/sign_in', {
        email,
        password
      }).then((res) => {
        commit('setUser', res)
      })
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout ({ commit }, { accessToken, client, uid }) {
    try {
      await this.$axios.delete(process.env.API_URL + '/api/v1/auth/sign_out', {
        headers: {
          'access-token': accessToken,
          client,
          uid
        }
      })
      commit('clearUser')
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
