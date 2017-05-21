<template>
  <div>
    <section class="section video-cover-plalist1 show"
    :style="
    'background:  url(' + bg + ') no-repeat center center fixed;'
    ">
    <div class="container">
      <div class="heading">
        <h1 class="title" :style=" 'color:' + font +';' ">Listening</h1>
        <h2 class="subtitle" :style=" 'color:' + font +';' ">
          Music is  Coming soon......
        </h2>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import query from '../../source/query.js'
import axios from 'axios'
export default {
  name: 'playlist1',
  data () {
    return {
      bg: '',
      query: query,
      data: [],
      font: ''
    }
  },
  mounted () {
    this.getBg()
  },
  methods: {
    getBg () {
      let vm = this
      let index = Math.floor(Math.random() * this.query.length) + 1
      console.log(this.query[index])
      let query = `https://api.giphy.com/v1/gifs/search?q=${this.query[index]}&api_key=dc6zaTOxFJmzC`
      axios.get(query).then((res) => {
        vm.data = res.data.data
      }).then(() => {
        let randombackground = Math.floor(Math.random() * vm.data.length) + 1
        vm.bg = vm.data[randombackground].images.original.url
        console.log('รูปภาพ : ', vm.bg)
        // rgb(239, 56, 40)
        let r = Math.floor((Math.random() * 255) + 0)
        let g = Math.floor((Math.random() * 255) + 0)
        let b = Math.floor((Math.random() * 255) + 0)
        vm.font = `rgb(${r}, ${g}, ${b})`
      })
    }
  }
}
</script>

<style>
.video-cover-plalist1 {
  /*background:  url(https://media.giphy.com/media/jqJ8RXZlNlLQA/giphy.gif) no-repeat center center fixed;*/
  background-size: cover !important;
}
.show {
  height: 100vh !important;
}
</style>
