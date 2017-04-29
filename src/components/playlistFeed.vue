<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column is-3" v-for="show in store.state.playlistUser">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img :src="show.img" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Playlist :: {{show.name}}</p>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" @click="store.dispatch('userPlaylist', show)">Play</a>
            <a class="card-footer-item" style="background: red; color: white;" @click="del(show)">Delete</a>
          </footer>

          <article class="message is-primary">
            <div class="message-body" v-for="track in show.playlists">
              {{track.artist}} | {{track.song}}
            </div>
          </article>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js'
import axios from 'axios'
export default {
  name: 'playlistFeed',
  data () {
    return {
      store,
      showPlaylist: []
    }
  },
  mounted () {
  },
  methods: {
    del (data) {
      this.store.dispatch('deletePlaylist', data)
      var vm = this
      axios.get('https://fir-auth-12e52.firebaseio.com/playlists.json').then(res => {
        let setData = []
        for (var index in res.data) {
          if (res.data.hasOwnProperty(index)) {
            setData.push({
              ...res.data[index],
              id: index
            })
          }
        }
        vm.store.dispatch('getApiPlaylistUser', setData)
        this.$router.push({path: '/playlistFeed'})
      })
    }
  }
}
</script>

<style lang="css">
</style>
