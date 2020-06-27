<template>
    <div class="editorWarp">
        <my-header/>
        <main-ui/>
    </div>
</template>

<script>
  import MainUi from '../components/main/MainUi'
  import MyHeader from '../components/header/MyHeader'
  export default {
    name: "index",
    components: {
      MainUi,
      MyHeader
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
.editorWarp {
    width: 100%;
    height: 100%;
}
</style>