<template>
    <div class="plane-ui" :style="{backgroundColor:info.backgroundColor,flex:info.flex}"></div>
</template>

<script>
  export default {
    name: "demo",
    props: {
      info: {
        required: false,
        type: Object
      },
    }
  }
</script>

<style scoped>

</style>