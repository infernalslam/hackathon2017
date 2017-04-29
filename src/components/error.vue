<template>
  <div>
    search : <input type="text" v-model="text"> <button @click="search(text)">+</button> <br>
    <div v-for="show in data">
      <img :src="show.snippet.thumbnails.high.url">
    </div>
  </div>
</template>

<script>
var youtube = require('youtube-finder')
var client = youtube.createClient({ key: 'AIzaSyAZ3RMSs6jrRFtL7auC6i02dAFo2ccO8S8' })
export default {
  name: 'user',
  data () {
    return {
      text: '',
      data: []
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
    }
  }
}
</script>
