<template lang="html">
  <div class="">
    <div class="" v-for="show in store.state.playlistUser">
      {{show.name}}
      <img :src="show.img" alt="" width="20%">
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
