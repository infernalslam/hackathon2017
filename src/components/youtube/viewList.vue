<template>
  <div>
  <div class="columns">
    <div class="column">
    <div class="box" v-for="(item,index) in data">
      <article class="media" @click="addTracks(item)">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="item.snippet.thumbnails.high.url" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{item.snippet.title}}</strong> | {{item.id.videoId}}
              <br>
            </p>
          </div>
        </div>
      </article>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'viewList',
  props: ['data', 'addTracks']
}
</script>
