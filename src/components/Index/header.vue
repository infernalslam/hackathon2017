<template>
  <div>
  <div class="loader loading"></div>
  <nav id="top" class="nav" style="background-color: rgb(0, 0, 51); color: #ff3 !important;">
        <div class="container">
            <div class="nav-left">
              <router-link class="nav-item is-tab" style="color: #ff3;" to="/">HOME</router-link>
              <router-link v-show="checkAdmins" class="nav-item is-tab" style="color:  #ff3 !important;" to="/create">Create Playlist (Admin)</router-link>
              <div class="nav-item is-tab" style="color: #ff3; cursor: pointer;" @click="check()">Create Playlist (User)</div>
              <div class="nav-item is-tab" style="color: #ff3; cursor: pointer;"  @click="playlist()">Playlist Feed</div>
            </div>
            <div class="nav-right" v-show="!store.state.logOut">
              <div class="nav-item is-tab" v-show="store.state.loginFacebook"
              style="color: #ff3; cursor: pointer;"
              @click="store.dispatch('login')">login</div>
            </div>

            <div class="nav-right" v-show="store.state.logOut">
              <div class="nav-item is-tab"
              style="color: #ff3; cursor: pointer;"
              @click="logout">logOut | {{store.state.displayName}}</div>

              <img :src="store.state.photoURL" v-show="store.state.logOut" class="profile">
            </div>


        </div>
    </nav>
  </div>
</template>

<script>
/* global swal */
import axios from 'axios'
import store from '../../vuex/store'
export default {
  name: 'header',
  data () {
    return {
      store
    }
  },
  computed: {
    checkAdmins () {
      if (this.store.state.admins.find(i => i.uid === this.store.state.uid)) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    check () {
      if (store.state.logOut === false) {
        swal('Plase login', 'facebook (A_A)', 'error')
      } else if (store.state.logOut === true) {
        this.$router.push({ path: '/user' })
      }
    },
    logout () {
      this.store.dispatch('logOut')
      this.$router.push({path: '/'})
    },
    playlist () {
      if (store.state.logOut === false) {
        swal('Plase login', 'facebook (A_A)', 'error')
      } else {
        var vm = this
        axios.get('https://fir-auth-12e52.firebaseio.com/playlists.json').then(res => {
          let setData = []
          for (var index in res.data) {
            if (res.data.hasOwnProperty(index)) {
              setData.push({
                ...res.data[index],
                id: index
              })
            }
          }
          vm.store.dispatch('getApiPlaylistUser', setData)
          this.$router.push({path: '/playlistFeed'})
        })
      }
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
.loader {
  -webkit-transition: height 1s;
  transition: height 1s;
  -webkit-animation: barberpole 3s linear infinite;
  animation: barberpole 1s linear infinite;
  opacity: 0;
  z-index: 9999;
  height: 5px;
  width: 100%;
  background: white;
  top: 0;
  background-size: 100px 100px;
  background: linear-gradient(to right,#ff2d55, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  background: linear-gradient(to right,#ff2d55,#4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
}
.loader.loading {
  opacity: 1;
}
@-webkit-keyframes barberpole {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 2000px 300px;
  }
}
@keyframes barberpole {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 2000px 300px;
  }
}

</style>
