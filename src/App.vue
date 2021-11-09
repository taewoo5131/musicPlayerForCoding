<template>
  <div id="app">
    <intro-header></intro-header>
    <router-view></router-view>
  </div>
</template>
<script>
import introHeader from './components/IntroHeader.vue'

export default {
  components: {
    'intro-header': introHeader,
  }
}
</script>
<style>
</style>
