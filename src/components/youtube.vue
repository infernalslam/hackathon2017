<template>
  <div>

    <div class="field is-grouped">
      <p class="control is-expanded"><input class="input" type="text" placeholder="search" v-model="text"></p>
      <p class="control"><a class="button is-info" @click="search(text)">Search</a></p>
    </div>


    <div class="columns">



      <div class="column">

        <div class="field">
          <label class="label" style="color: #fff;">playlist</label>
          <p class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="playlist" v-model="playlist">
          <input class="input is-success" type="text" placeholder="album" v-model="album">
          <input class="input is-success" type="text" placeholder="dec" v-model="dec">
          <span class="icon is-small is-right"><i class="fa fa-check"></i></span>
          <span class="tag is-success" style="cursor: pointer;" @click="upload()">upload to Firebase</span>
          </p>
        </div>

        <div class="column">
          <form-youtube :tracks="tracks" :del-tracks="delTracks"/>
        </div>

      </div>



      <div class="column">
        <view-list :data="data" :add-tracks="addTracks" />
      </div> 


    </div>

  </div>
</template>

<script>
/* global swal */
import store from '../vuex/store.js'
import FormYoutube from './youtube/form'
import viewList from './youtube/viewList'
var youtube = require('youtube-finder')
var client = youtube.createClient({ key: 'AIzaSyAZ3RMSs6jrRFtL7auC6i02dAFo2ccO8S8' })
export default {
  name: 'youtube',
  components: {
    FormYoutube,
    viewList
  },
  data () {
    return {
      text: '',
      data: [],
      tracks: [],
      playlist: '',
      album: '',
      dec: '',
      store
    }
  },
  methods: {
    search (text) {
      var params = {
        part: 'snippet',
        q: text,
        maxResults: 50
      }
      let vm = this
      client.search(params, function (err, res) {
        if (err) console.log(err)
        vm.data = res.items
        console.log(vm.data)
      })
    },
    addTracks (data) {
      let set = {
        album: data.snippet.title,
        artist: data.snippet.title,
        id: data.id.videoId,
        img: data.snippet.thumbnails.high.url,
        song: data.snippet.title,
        vote: 0,
        youtubeID: data.id.videoId
      }
      this.tracks.push(set)
      swal('ได้ทำการเพิ่มเพลงเเล้ว', '🤣', 'success')
    },
    delTracks (data) {
      console.log(data.youtubeID)
      var index = this.tracks.findIndex(i => i.youtubeID === data.youtubeID)
      this.tracks.splice(index, 1)
    },
    upload () {
      if (this.playlist !== '' && this.album !== '' && this.dec !== '') {
        let data = {
          artist: this.playlist,
          album: this.album,
          dec: this.dec,
          img: this.tracks[0].img,
          tracks: this.tracks
        }
        this.store.dispatch('uploadFirebase', data)
        this.text = ''
        this.data = []
        this.tracks = []
        this.playlist = ''
        this.album = ''
        this.dec = ''
        swal('Add', 'Success', 'success')
      } else swal('No', 'ต้องกรอกข้อมูลให้ครบ', 'error')
    }
  }
}
</script>
