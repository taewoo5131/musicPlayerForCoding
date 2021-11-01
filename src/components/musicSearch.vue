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
        <router-view></router-view>
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
            fetch('https://ws.audioscrobbler.com/2.0/?method=track.search&track='+this.keyword+'&api_key=9e3a6f5f8b72c4534279b7763b0d368e&format=json')
            .then((result)=>{
                result.json()
                    .then((json) => {
                        if(json["results"]["trackmatches"]["track"].length > 0){
                            console.log(json["results"]["trackmatches"]["track"])
                            this.resultMusic = json["results"]["trackmatches"]["track"]
                            document.querySelector('audio').src = this.resultMusic[0].url+".mp3"
                        }else{
                            alert('music is undefined')
                        }
                    })
                    .catch((e)=>{
                        alert('inner',e)
                    })
            })
            .catch((e)=>{
                alert('outer',e)
            })
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