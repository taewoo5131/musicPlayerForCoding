<template>
  <div id="introBtn">
        
        <!-- <input type="text" placeholder="keyword" v-model="keyword"> -->
        <v-btn large v-on:click="play">{{introBtnMsg}}</v-btn>
        <ul id="resultList">
            <li v-for="music in resultMusic" v-bind:key="music.id">{{music.name}}</li>
        </ul>
        <audio autoplay controls>
            <source src="@/music/01 - Epic Gardener - Anywhere.mp3" type="audio/mp3">
        </audio>
        <router-view>dasdasdas</router-view>
  </div>
</template>

<script>
export default {
    el: "#introBtn",
    data: function() {
        return {
            introBtnMsg: 'play',
            keyword: '',
            resultMusic: []
        }
    },
    methods: {
        enter: function(){
            this.$router.push({ name: 'Enter' })
        },
        search: function() {
        },
        play: function() {
            // <audio src="src/music/01 - Epic Gardener - Anywhere.mp3" autoplay></audio>
        }
    }
}
</script>

<style>
    #introBtn{
        text-align: center;
    }
</style>