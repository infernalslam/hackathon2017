<template>
<div class="hero-body">
  <div class="container">
    <h1 class="title" style="text-align: center; color: #fff">ใครก็สามารถเพิ่มเพลงใหม่ๆ ได้ ตอนนี้  <font style="color: rgb(239, 56, 40)">{{count}}</font>  เพลง</h1>
    <h2 class="subtitle" style="text-align: center;background-color: #00013a;color: #fff;">เป็นชุมชนดนตรีที่เชื่อมต่อนักดนตรีและแฟน ๆ ผ่านทางแพลตฟอร์มออนไลน์และกิจกรรมแบบออฟไลน์เช่น เพลงสตรีมมิ่ง <font style="color: #ff3;">Beta 0.1.4 </font></h2>
    <div class="columns">
      <div class="column" style="text-align: center; color: rgb(255, 255, 51)">
        <social-sharing url="https://fir-auth-12e52.firebaseapp.com" inline-template>
        <div>
          <network network="facebook">
            <i class="fa fa-fw fa-facebook" style="cursor: pointer;"></i> Facebook
          </network>
          <!--<network network="googleplus">
            <i class="fa fa-fw fa-google-plus" style="cursor: pointer;"></i> Google +
          </network>-->
          <!--<network network="linkedin">
            <i class="fa fa-fw fa-linkedin" style="cursor: pointer;"></i> LinkedIn
          </network>
          <network network="pinterest">
            <i class="fa fa-fw fa-pinterest" style="cursor: pointer;"></i> Pinterest
          </network>
          <network network="reddit">
            <i class="fa fa-fw fa-reddit" style="cursor: pointer;"></i> Reddit
          </network>-->
          <network network="twitter">
            <i class="fa fa-fw fa-twitter" style="cursor: pointer;"></i> Twitter
          </network>
          <!--<network network="vk">
            <i class="fa fa-vk" style="cursor: pointer;"></i> VKontakte
          </network>
          <network network="weibo">
            <i class="fa fa-weibo" style="cursor: pointer;"></i> Weibo
          </network>
          <network network="whatsapp">
            <i class="fa fa-fw fa-whatsapp" style="cursor: pointer;"></i> Whatsapp
          </network>-->
        </div>
      </social-sharing>
      </div>
    </div>
  </div>
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
