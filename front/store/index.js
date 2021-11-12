import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      loading: false
    },
    mutations: {
      setLoading(state, payload) {
        state.loading = payload;
      }
    }
  })
}

export default store