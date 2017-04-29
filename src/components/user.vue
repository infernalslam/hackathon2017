<template>
<div>
  <div class="columns">
    <div class="column side1">
      Search -> <input type="text" v-model="search">

      <div v-for="show in store.state.getAllSong">
        {{show.artist}} <br>
        {{show.song}} <br>
        <img :src="show.img" @click="addPlaylist(show)" style="width: 30%"> <br>
        <hr>
      </div>
    </div>
    <div class="column">
      <label class="label">Playlist name</label>
      <p class="control">
        <input class="input" type="text" placeholder="artist" v-model="playlistsName">
      </p>
        <hr>
        <div v-for="show in playlists">
          <span class="tag is-success" style="font-size: 16px;">{{show.song}}</span>
          <span class="tag is-danger" style="font-size: 10px;">{{show.youtubeID}}</span>
          <button class="delete" @click="delPlaylist(show.id)"></button>
        </div>
        <p class="control">
          <button class="button" style="background: rgb(208, 1, 74); color: white;" @click="addPlaylistFirebase">Create Playlist</button>
        </p>
      </div>
    </div>
    <div class="column"></div>
  </div>
</div>
</template>

<script>
import store from '../vuex/store.js'
import axios from 'axios'
export default {
  name: 'user',
  data () {
    return {
      search: '',
      store,
      playlists: [],
      playlistsName: ''
    }
  },
  mounted () {
    console.log('start')
    if (store.state.uid === '') {
      this.$router.push({ path: '/' })
    }
    var vm = this
    axios.get('https://fir-auth-12e52.firebaseio.com/data.json').then(res => {
      let setData = []
      for (var index in res.data) {
        if (res.data.hasOwnProperty(index)) {
          setData.push({
            ...res.data[index],
            id: '_' + Math.random().toString(36).substr(2, 9)
          })
        }
      }
      vm.store.dispatch('getApiAlbum', setData)
      vm.store.dispatch('getAllSong')
    })
  },
  methods: {
    addPlaylist (playList) {
      this.playlists.push(playList)
    },
    delPlaylist (id) {
      var index = this.playlists.findIndex(item => item.id === id)
      this.playlists.splice(index, 1)
    },
    addPlaylistFirebase () {
      var data = {
        uid: this.store.state.uid,
        name: this.playlistsName,
        playlists: this.playlists,
        img: 'https://res.cloudinary.com/dswcocz3f/image/upload/v1493484649/dvd-24527_640_emaf0d.png'
      }
      this.store.dispatch('addPlaylistUser', data)
    }
  }
}
</script>

<style>
.side1 {
  background-color: #fbf3f3;
}
</style>
