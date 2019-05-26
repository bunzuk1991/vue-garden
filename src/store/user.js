import * as firebase from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    logout (state) {
      state.user = null
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async logoutUser ({ commit }) {
      commit('clearError')
      try {
        await firebase.auth().signOut()
        commit('logout')
      } catch (error) {
        commit('setError', error.message)
        throw error
      }

    },
    autoLogin ({ commit }, payload) {
      commit('setUser', new User(payload.uid))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLoggetIn (state) {
      return state.user !== null
    }
  }
}
