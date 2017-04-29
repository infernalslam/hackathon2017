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
const db = firebase.database().ref('data')

const store = new Vuex.Store({
  state: {
    album: [],
    toggle: false,
    listPlayer: {
      album: '',
      artist: '',
      dec: '',
      id: '',
      img: '',
      tracks: []
    },
    listTrack: []
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
    },
    closePlayer (context) {
      context.commit('closePlayer')
    },
    nextSong (context) {
      context.commit('nextSong')
    },
    uploadFirebase (context, payload) {
      context.commit('uploadFirebase', payload)
    }
  },
  mutations: {
    getApiAlbum (state, payload) {
      state.album = payload
    },
    listPlayer (state, payload) {
      state.listTrack = []
      state.toggle = true
      state.listPlayer = {
        album: payload.album,
        artist: payload.artist,
        dec: payload.dec,
        id: payload.id,
        img: payload.img,
        tracks: payload.tracks
      }
      payload.tracks.forEach(i => {
        state.listTrack.push({...i})
      })
    },
    closePlayer (state) {
      state.toggle = false
      state.listPlayer = {
        album: '',
        artist: '',
        dec: '',
        id: '',
        img: '',
        tracks: []
      }
    },
    nextSong (state) {
      state.listTrack.splice(0, 1)
      if (state.listTrack.length > 0) {
        console.log('next')
      } else {
        console.log('error')
        let index = Math.floor(Math.random() * state.album.length) + 1
        state.listPlayer = state.album[index]
        state.listPlayer.tracks.forEach(i => {
          state.listTrack.push({...i})
        })
      }
    },
    uploadFirebase (state, payload) {
      db.push(payload)
    }
  }
})

export default store
