<template>
  <nav id="top" class="nav" style="background-color: #ff3; color: rgb(0, 0, 51) !important;">
        <div class="container">
            <div class="nav-left">
              <router-link class="nav-item is-tab" style="color: rgb(0, 0, 51) !important;" to="/">หน้าเเรก</router-link>
              <router-link class="nav-item is-tab" style="color: rgb(0, 0, 51) !important;" to="/create">สร้าง Playlist</router-link>
            </div>
            <div class="nav-right">
              <div class="nav-item is-tab" v-show="store.state.loginFacebook"
              style="color: rgb(0, 0, 51) !important; cursor: pointer;"
              @click="store.dispatch('login')">login</div>
            </div>


              <div class="nav-item is-tab" v-show="store.state.logOut"
              style="color: rgb(0, 0, 51) !important; cursor: pointer;"
              @click="store.dispatch('login')">logOut | {{store.state.displayName}}</div>

              <img :src="store.state.photoURL" v-show="store.state.logOut" class="profile">

        </div>
    </nav>
</template>

<script>
import store from '../../vuex/store'
export default {
  name: 'header',
  data () {
    return {
      store
    }
  }
}
</script>

<style>
.chageColer {
  border-bottom-color: rgb(0, 0, 51) !important;
}

.profile {
  width: 59px;
height: 52px;
background: red;
-moz-border-radius: 50px;
-webkit-border-radius: 50px;
border-radius: 205px;
}
</style>
