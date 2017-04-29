<template>
  <nav id="top" class="nav" style="background-color: #ff3; color: rgb(0, 0, 51) !important;">
        <div class="container">
            <div class="nav-left">
              <router-link class="nav-item is-tab" style="color: rgb(0, 0, 51) !important;" to="/">หน้าเเรก</router-link>
              <router-link class="nav-item is-tab" style="color: rgb(0, 0, 51) !important;" to="/create">สร้าง Playlist</router-link>
            </div>
            <div class="nav-right">
              <div class="nav-item is-tab" style="color: rgb(0, 0, 51) !important; cursor: pointer;">login</div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
.chageColer {
  border-bottom-color: rgb(0, 0, 51) !important;
}
</style>
