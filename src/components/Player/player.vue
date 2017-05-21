<template>
<div>

<transition name="fade">
  <div v-if="showList" class="test" @click.self="showList = false">
    <div v-for="(s, i) in store.state.listPlayer.tracks" style="cursor: pointer;" @click="store.dispatch('selectSong', s)">
      <span style="color: #ff3;"> # {{i + 1}} </span> {{s.song}} <br>
    </div>
  </div>
</transition>


    <youtube id="youtube" :video-id="store.state.listTrack[0].youtubeID" :player-vars="{autoplay: 1}"
     @ended="ended"
     style="
     visibility: hidden;
     width: 0;
     height: 0;
     position: fixed;
     "></youtube>
    <!-- <br><br><br><br><br><br> -->

  <div class="player-title" style="background-color: #000">
    <div class="player-title-side" style="color: #ff3;">Your listening ...</div>
    <div style="border-bottom: 3px solid #ff3;"></div>
    <div style="padding-top: 20px; padding-left: 10px;">


        <span>
          <i v-show="toggle === 'playVideo' " class="fa fa-play" aria-hidden="true" @click="pause('pauseVideo')"></i>
          <i v-show="toggle === 'pauseVideo' " class="fa fa-pause" aria-hidden="true" @click="play('playVideo')"></i>
        </span>
        &nbsp &nbsp


      <!--<span v-if="toggle === 'playVideo' " @click="pause('pauseVideo')"><i class="fa fa-play" aria-hidden="true"></i></span> &nbsp &nbsp-->
      <!--<span v-if="toggle === 'pauseVideo' " @click="play('playVideo')"><i class="fa fa-pause" aria-hidden="true"></i></span> &nbsp &nbsp-->
      <i class="fa fa-step-forward" aria-hidden="true" @click="store.dispatch('nextSong')" style="cursor: pointer;"></i> &nbsp &nbsp
      <i class="fa fa-window-close" aria-hidden="true" @click="store.dispatch('closePlayer', show)" style="cursor: pointer;"></i> &nbsp &nbsp
      <!--<span> เพลง {{store.state.listTrack[0].song}}  ชื่อศิลปิน {{store.state.listTrack[0].artist}} อั้มบั้ล {{store.state.listTrack[0].album}}</span>-->
      <span style="color: rgb(255, 255, 51)"> SONG  : {{ store.state.listTrack[0].song}}
             <!--ชื่อศิลปิน {{store.state.listTrack[0].artist}}-->
             <!--อั้มบั้ล {{store.state.listTrack[0].album}}-->
      </span>
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
      showList: false,
      toggle: 'pauseVideo'
    }
  },
  methods: {
    ended () {
      console.log('end music')
      store.dispatch('nextSong')
    },
    pause (event) {
      console.log('pause', event)
      this.toggle = event
      let div = document.getElementById('youtube')
      let iframe = div.getElementsByTagName('iframe')[0].contentWindow
      iframe.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')
    },
    play (event) {
      console.log('play', event)
      this.toggle = event
      let div = document.getElementById('youtube')
      let iframe = div.getElementsByTagName('iframe')[0].contentWindow
      iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
    }
  }
}
</script>

<style>
.test {
  position: fixed;
  height: 82vh;
  width: 300px;
  top: 6%;
  right: 0;
  background-color: #00013a;
  z-index: 100;
  color: #fff;
  padding: 45px 38px 13px 15px;
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
  /*background-color: #00013a;*/
  background-color: #1440c1;
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

.fa-step-forward {
  color: #ff3;
}

.fa-window-close {
  color: #ff3;
}
.fa-play {
  color: #ff3;
}
.fa-pause {
  color: #ff3;
}

</style>
