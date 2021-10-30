<template>
  <div id="app">
    <intro-header></intro-header>
    <music-search></music-search> 
  </div>
</template>
<script>
import introHeader from './components/IntroHeader.vue'
import musicSearch from './components/musicSearch.vue'

export default {
  components: {
    'intro-header': introHeader,
    'music-search': musicSearch
  }
}
</script>
<style>
</style>
