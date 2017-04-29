import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAUW0HgyW7nBGBrUPdlWmDBMpHUHOSwpB0',
  authDomain: 'fir-auth-12e52.firebaseapp.com',
  databaseURL: 'https://fir-auth-12e52.firebaseio.com',
  projectId: 'fir-auth-12e52',
  storageBucket: 'fir-auth-12e52.appspot.com',
  messagingSenderId: '221877419354'
}
firebase.initializeApp(config)
// const db = firebase.database().ref('data')

const store = new Vuex.Store({
  state: {
    album: [],
    toggle: false,
    listPlayer: []
  },
  getters: {
    allAlbum: state => { return state.album },
    toggle: state => { return state.toggle }
  },
  actions: {
    getApiAlbum (context, payload) {
      context.commit('getApiAlbum', payload)
    },
    listPlayer (context, payload) {
      context.commit('listPlayer', payload)
    }
  },
  mutations: {
    getApiAlbum (state, payload) {
      state.album = payload
    },
    listPlayer (state, payload) {
    }
  }
})

export default store
