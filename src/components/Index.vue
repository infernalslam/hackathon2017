<template>
  <div>
    <promo />
    <!-- <playlist1 /> -->
    <album />
    <playlist1 />
    <playlist1 />
  </div>
</template>

<script>
import axios from 'axios'
import Promo from './Index/promo'
import Playlist1 from './Index/playlist1'
import Album from './Index/album'
import store from '../vuex/store.js'
export default {
  name: 'Index',
  data () {
    return {
      store
    }
  },
  components: {
    Promo,
    Playlist1,
    Album
  },
  mounted () {
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
      vm.store.dispatch('getApiAlbum', setData.reverse())
    })
  }
}
</script>
