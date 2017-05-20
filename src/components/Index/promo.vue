<template>
<div>
  <!-- <div class="container">
    <h1 class="title" style="text-align: center; color: #fff">ใครก็สามารถเพิ่มเพลงใหม่ๆ ได้ ตอนนี้  <font style="color: rgb(239, 56, 40)">{{count}}</font>  เพลง</h1>
    <h2 class="subtitle" style="text-align: center;background-color: #00013a;color: #fff;">เป็นชุมชนดนตรีที่เชื่อมต่อนักดนตรีและแฟน ๆ ผ่านทางแพลตฟอร์มออนไลน์และกิจกรรมแบบออฟไลน์เช่น เพลงสตรีมมิ่ง <font style="color: #ff3;">Beta 0.1.4 </font></h2>
    <div class="columns">
      <div class="column" style="text-align: center; color: rgb(255, 255, 51)">
        <social-sharing url="https://fir-auth-12e52.firebaseapp.com" inline-template>
        <div>
          <network network="facebook">
            <i class="fa fa-fw fa-facebook" style="cursor: pointer;"></i> Facebook
          </network>
          <network network="twitter">
            <i class="fa fa-fw fa-twitter" style="cursor: pointer;"></i> Twitter
          </network>
        </div>
      </social-sharing>
      </div>
    </div>
  </div> -->


  <section class="hero is-fullheight bgpromo">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <b>√ Hackathon Musicß <font style="color: rgb(239, 56, 40)"> beta 0.15</font></b>
      </h1>
      <h2 class="subtitle">
          Play your musicß & have total song  <font style="color: rgb(239, 56, 40)">{{count}}</font> songs
      </h2>
    </div>
  </div>
</section>




</div>
</template>

<script>
import store from '../../vuex/store'
export default {
  name: 'promo',
  data () {
    return {
      store
    }
  },
  computed: {
    count () {
      var count = 0
      this.store.state.album.forEach(i => {
        count += i.tracks.length
        console.log(i.tracks.length)
      })
      return count
    }
  }
}
</script>

<style scoped>
.bgpromo {
  /*background-color: rgb(255,226,31);*/
  /*background: linear-gradient(135deg,#f4ed4f,#e2b223);*/
  /*https://taeyeon-thailand.firebaseapp.com/img/16sgd_copy.jpg*/
  /*background: url(http://img.kpopmap.com/wp-content/uploads_kpopmap/2017/02/taeyeon-i-got-love22.png) no-repeat;*/
  background: url(https://taeyeon-thailand.firebaseapp.com/img/16sgd_copy.jpg) no-repeat;
  background-size: 100%;
}


</style>
