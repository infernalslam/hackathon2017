<template>
<div class="hero-body">
  <div class="container">
    <h1 class="title" style="text-align: center;">ใครก็สามารถ เพิ่มเพลงใหม่ๆ ได้</h1>
    <h2 class="subtitle" style="text-align: center;">เป็นชุมชนดนตรีที่เชื่อมต่อนักดนตรีและแฟน ๆ ผ่านทางแพลตฟอร์มออนไลน์และกิจกรรมแบบออฟไลน์ <br> เช่น เพลงสตรีมมิ่ง</h2>
    <div class="columns">
      <div class="column" style="text-align: center;">
        <social-sharing url="https://fir-auth-12e52.firebaseapp.com" inline-template>
        <div>
          <network network="facebook">
            <i class="fa fa-fw fa-facebook" style="cursor: pointer;"></i> Facebook
          </network>
          <network network="googleplus">
            <i class="fa fa-fw fa-google-plus" style="cursor: pointer;"></i> Google +
          </network>
          <network network="linkedin">
            <i class="fa fa-fw fa-linkedin" style="cursor: pointer;"></i> LinkedIn
          </network>
          <network network="pinterest">
            <i class="fa fa-fw fa-pinterest" style="cursor: pointer;"></i> Pinterest
          </network>
          <network network="reddit">
            <i class="fa fa-fw fa-reddit" style="cursor: pointer;"></i> Reddit
          </network>
          <network network="twitter">
            <i class="fa fa-fw fa-twitter" style="cursor: pointer;"></i> Twitter
          </network>
          <network network="vk">
            <i class="fa fa-vk" style="cursor: pointer;"></i> VKontakte
          </network>
          <network network="weibo">
            <i class="fa fa-weibo" style="cursor: pointer;"></i> Weibo
          </network>
          <network network="whatsapp">
            <i class="fa fa-fw fa-whatsapp" style="cursor: pointer;"></i> Whatsapp
          </network>
        </div>
      </social-sharing>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'promo'
}
</script>
