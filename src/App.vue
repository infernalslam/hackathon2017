<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
    <player v-if="store.state.toggle"></player>
  </div>
</template>

<script>
import store from './vuex/store'
import HeaderView from './components/Index/header'
import Player from './components/Player/player'
export default {
  name: 'app',
  components: {
    HeaderView,
    Player
  },
  data () {
    return {
      store
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Prompt');
* {
  font-family: 'Prompt', sans-serif;
}
</style>
