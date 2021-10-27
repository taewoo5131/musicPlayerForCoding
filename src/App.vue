<template>
  <div id="app">
    <intro-header></intro-header>
    <intro-body></intro-body> 
  </div>
</template>
<script>
import introHeader from './components/IntroHeader.vue'
import introBody from './components/IntroBody.vue'

export default {
  components: {
    'intro-header': introHeader,
    'intro-body': introBody
  }
}
</script>
<style>
</style>
