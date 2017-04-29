<template>
<div class="container">
  <div class="columns">

    <div class="column is-two-thirds">
      <div class="field">
          <!-- <i class="fa fa-search" aria-hidden="true"></i> -->
          <input class="input is-info" type="text" placeholder="Search" v-model="search">
      </div>
      <br><br>
      <article class="media" style="cursor: pointer;" v-for="show in listFilter" @click="addPlaylist(show)">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="show.img">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{show.artist}}   | {{show.song}}</strong>
              <br>
              {{show.album}}
            </p>
          </div>
        </div>
      </article>
    </div>




    <div class="column">
      <label class="label">Playlist Add</label>
      <p class="control">
        <input class="input" type="text" placeholder="artist" v-model="playlistsName">
        <button class="button" style="background: rgb(208, 1, 74); color: white;" @click="addPlaylistFirebase">Create Playlist</button>
        <br>
        <article class="media" v-for="show in playlists">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="show.img">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{show.artist}}   | {{show.song}}</strong>
                <br>
                {{show.album}}
                <br>
                <button class="delete" @click="delPlaylist(show.id)"></button>
              </p>
            </div>
          </div>
        </article>


      </p>

    </div>
</div>
  </div>
</div>
</template>

<script>
/* global swal */
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
      if (data.name !== '' && data.playlists.length > 0) {
        this.store.dispatch('addPlaylistUser', data)
        swal('Add Music', 'ชื่อ' + this.playlistsName, 'success')
        this.playlists = []
        this.playlistsName = ''
      } else {
        swal('No', 'ต้องกรอกข้อมูลให้ครบ', 'error')
      }
    }
  },
  computed: {
    listFilter () {
      let text = this.search.trim().toLowerCase()
      return store.state.getAllSong.filter(item => {
        return item.artist.toLowerCase().indexOf(text) > -1
      })
    }
  }
}
</script>

<style>
.side1 {
  background-color: #fbf3f3;
}
</style>
