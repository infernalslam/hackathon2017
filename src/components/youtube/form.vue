<template>
  <div>
  <div class="columns">


    <div class="column">
           <div class="box" v-for="item in tracks">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="item.img" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{item.artist}}</strong> | {{item.youtubeID}}
                      <br>
                      <span class="tag is-danger is-large" @click="delTracks(item)">delete<button class="delete"></button></span>
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
  name: 'form',
  props: ['tracks', 'delTracks']
}
</script>
