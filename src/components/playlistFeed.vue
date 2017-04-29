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
            <!-- <a class="card-footer-item" style="background: red; color: white;">Delete</a> -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  name: 'playlistFeed',
  data () {
    return {
      store
    }
  },
  mounted () {}
}
</script>

<style lang="css">
</style>
