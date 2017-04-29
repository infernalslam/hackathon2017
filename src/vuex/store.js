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
const playlists = firebase.database().ref('playlists')

const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})

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
    listTrack: [],
    displayName: '',
    photoURL: '',
    uid: '',
    loginFacebook: true,
    logOut: false,
    getAllSong: [],
    playlistUser: []
  },
  getters: {
    allAlbum: state => { return state.album },
    toggle: state => { return state.toggle },
    getAllSong: state => { return state.getAllSong },
    playlistUser: state => { return state.playlistUser }
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
    },
    login (context) {
      context.commit('login')
    },
    logOut (context) {
      context.commit('logOut')
    },
    getAllSong (context) {
      context.commit('getAllSong')
    },
    addPlaylistUser (context, payload) {
      context.commit('addPlaylistUser', payload)
    },
    getApiPlaylistUser (context, payload) {
      context.commit('getApiPlaylistUser', payload)
    },
    userPlaylist (context, payload) {
      context.commit('userPlaylist', payload)
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
    },
    login (state) {
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // var token = result.credential.accessToken
        var user = result.user
        state.displayName = user.displayName
        state.photoURL = user.photoURL
        state.uid = user.uid
        console.log(state.uid, state.displayName)
        state.loginFacebook = false
        state.logOut = true
      }).catch(function (error) {
        console.log(error)
      })
    },
    logOut (state) {
      state.playlistUser = []
      state.listTrack = []
      state.toggle = false
      state.listPlayer = {
        album: '',
        artist: '',
        img: '',
        tracks: []
      }
      firebase.auth().signOut().then(function () {
        state.displayName = ''
        state.photoURL = ''
        state.loginFacebook = true
        state.logOut = false
      })
    },
    getAllSong (state) {
      state.album.find(item => {
        item.tracks.map(i => {
          let arr = {
            id: i.id,
            artist: i.artist,
            album: i.album,
            img: i.img,
            song: i.song,
            vote: i.vote,
            youtubeID: i.youtubeID
          }
          state.getAllSong.push(arr)
        })
      })
    },
    addPlaylistUser (state, payload) {
      console.log(payload)
      playlists.push(payload)
    },
    getApiPlaylistUser (state, payload) {
      console.log(payload.filter(i => i.uid === state.uid))
      state.playlistUser = payload.filter(i => i.uid === state.uid)
    },
    userPlaylist (state, payload) {
      state.listTrack = []
      state.toggle = true
      state.listPlayer = {
        album: payload.album,
        artist: payload.name,
        img: payload.img,
        tracks: payload.playlists
      }
      payload.playlists.forEach(i => {
        state.listTrack.push({...i})
      })
    }
  }
})

export default store
