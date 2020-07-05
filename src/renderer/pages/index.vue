<template>
    <div class="editorWarp" @mouseup.prevent="mouseup($event)" @mousemove.prevent="mousemove($event)" >
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
      mouseup(event){
        this.$PubSub.publish('main-mouseup', event)
      },
      mousemove(event){
        this.$PubSub.publish('main-mousemove', event)
      }
    }
  }
</script>

<style lang="scss" scoped>
.editorWarp {
    width: 100%;
    height: 100%;
}
</style>