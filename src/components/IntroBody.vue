<template>
  <div id="introBtn">
      <button v-on:click="enter">{{introBtnMsg}}</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            introBtnMsg: '입장하기'
        }
    },
    methods: {
        enter: function(){
            this.$router.push({ name: 'Enter' })
        }
    }
}
</script>

<style>
    #introBtn{
        text-align: center;
    }
</style>