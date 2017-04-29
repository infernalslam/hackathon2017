<template>
<div>
  <transition name="fade">
    <div v-show="showList" class="test" v-for="show in store.state.listPlayer.tracks" @click="showList = false">
      {{show.song}}
    </div>
  </transition>

    <youtube :video-id="store.state.listTrack[0].youtubeID" :player-vars="{autoplay: 1}" @ended="ended" style="position: fixed;"></youtube>
    <br><br><br><br><br><br>

  <div class="player-title">
    <div class="player-title-side">คุณกำลังฟัง</div>
    <div style="border-bottom: 3px solid #003;"></div>
    <div style="padding-top: 20px; padding-left: 10px;">
      <i class="fa fa-step-forward" aria-hidden="true" @click="store.dispatch('nextSong')" style="cursor: pointer;"></i> &nbsp &nbsp
      <i class="fa fa-window-close" aria-hidden="true" @click="store.dispatch('closePlayer', show)" style="cursor: pointer;"></i> &nbsp &nbsp
      <span> เพลง {{store.state.listTrack[0].song}}  ชื่อศิลปิน {{store.state.listTrack[0].artist}} อั้มบั้ล {{store.state.listTrack[0].album}}</span>
      <div style="float: right; cursor: pointer;"><i class="fa fa-bars" style="background-color:#ff3;"aria-hidden="true" @click="showList = true"></i></div>
    </div>
  </div>


</div>
</template>

<script>
import store from '../../vuex/store'
export default {
  name: 'player',
  data () {
    return {
      store,
      showList: false
    }
  },
  methods: {
    ended () {
      console.log('end music')
      store.dispatch('nextSong')
    }
  }
}
</script>

<style>
.test {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  height: 87.5vh;
  width: 200px;
  background-color: #00013a;
  color: white;
}
.player-title {
  z-index: 99;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: #eee;
  width: 100%;
  height: 100px;
  padding: 12px;
  transition: .4s ease-out;
}
.player-title-side {
  color: #fff;
  font-style: normal!important;
  font-size: 22px;
  padding: 0 15px;
  margin-bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #00013a;
  margin-right: 70%;
  font-weight: 600;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to
{
  opacity: 0
}

</style>
