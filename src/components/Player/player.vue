<template>
<div>
  <div class="player-title">
    <div class="player-title-side">คุณกำลังฟัง</div>
    <div style="border-bottom: 3px solid #003;"></div>
    <div style="padding-top: 20px; padding-left: 10px;">
      <i class="fa fa-step-forward" aria-hidden="true" style="cursor: pointer;"></i> &nbsp &nbsp
      <i class="fa fa-window-close" aria-hidden="true"></i> &nbsp &nbsp
      <span> เพลง  ชื่อศิลปิน อั้มบั้ล</span>
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
      store
    }
  }
}
</script>

<style>
.player-title {
  z-index: 99999;
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
</style>
