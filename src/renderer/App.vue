<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electronvue'
  }
</script>

<style>
  /* CSS */
  #app {
    width: 100%;
    height: 100%;
  }
  html,body {
    height: 100%;
    width: 100%;
  }
  *::-webkit-scrollbar {
    display: none;
  }
</style>
