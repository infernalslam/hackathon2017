<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
    <transition name="fade">
      <player v-if="store.state.toggle"></player>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  mounted () {
    var vm = this
    axios.get('https://fir-auth-12e52.firebaseio.com/admins.json').then(res => {
      let setData = []
      for (var index in res.data) {
        if (res.data.hasOwnProperty(index)) {
          setData.push({
            ...res.data[index]
          })
        }
      }
      vm.store.dispatch('getApiAdmins', setData)
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Prompt');
@import url('https://fonts.googleapis.com/css?family=Raleway');
body {
      background-color: #000;
}
* {
  /*font-family: 'Prompt', sans-serif;*/
  font-family: 'Raleway', sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to
{
  opacity: 0
}
</style>
