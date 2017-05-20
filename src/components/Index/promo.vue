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

<transition name="fade">

  <section class="hero is-fullheight bgpromo"
  :style=" 'background:  url(' + bg + ') no-repeat;' ">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <b>√ Hackathon Musicß <font style="color: rgb(239, 56, 40)"> beta 0.15</font></b>
      </h1>
      <h2 class="subtitle">
          Play your musicß & have total song  <font style="color: rgb(239, 56, 40)">{{count}}</font> songs <br>
          <social-sharing url="https://fir-auth-12e52.firebaseapp.com" inline-template>
          <div>
            <network network="facebook">
              <i class="fa fa-fw fa-facebook" style="cursor: pointer;"></i> <b style="cursor: pointer;"> Facebook </b>
            </network>
            <network network="twitter">
              <i class="fa fa-fw fa-twitter" style="cursor: pointer;"></i> <b style="cursor: pointer;"> Twitter </b>
            </network>
          </div>
        </social-sharing>
      </h2>
    </div>
  </div>
</section>

</transition>




</div>
</template>

<script>
import background from '../../source/background.js'
import store from '../../vuex/store'
export default {
  name: 'promo',
  data () {
    return {
      store,
      data: [],
      bg: ''
    }
  },
  computed: {
    count () {
      var count = 0
      this.store.state.album.forEach(i => {
        count += i.tracks.length
      })
      return count
    }
  },
  methods: {
    getBg () {
    }
  },
  mounted () {
    this.data = background
    let index = Math.floor(Math.random() * this.data.length) + 0
    this.bg = this.data[index].bg
    console.log(this.bg)
  }
}
</script>

<style scoped>
.bgpromo {
  background-size: cover !important;
  /*background-color: rgb(255,226,31);*/
  /*background: linear-gradient(135deg,#f4ed4f,#e2b223);*/
  /*https://taeyeon-thailand.firebaseapp.com/img/16sgd_copy.jpg*/
  /*background: url(http://img.kpopmap.com/wp-content/uploads_kpopmap/2017/02/taeyeon-i-got-love22.png) no-repeat;*/
  /*background: url(https://taeyeon-thailand.firebaseapp.com/img/16sgd_copy.jpg) no-repeat;*/
  background-size: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}


</style>
