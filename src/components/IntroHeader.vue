<template>
  <div id="header">
      <h3>{{introMsg}}</h3>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            introMsg: '코딩할때 노래듣기'
        }
    }
}
</script>

<style>
  #header{
    background-color: #fff;
    text-align: center;
  }
</style>