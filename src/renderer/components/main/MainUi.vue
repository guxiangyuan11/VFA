<template>
    <div class="mainUi">
        <side-left/>
    </div>
</template>

<script>
  import SideLeft from './SideLeft'
  export default {
    name: "MainUi",
    components: {
      SideLeft
    }
  }
</script>

<style lang="scss" scoped>
.mainUi {
    width: 100%;
    height: 100%;
}
</style>