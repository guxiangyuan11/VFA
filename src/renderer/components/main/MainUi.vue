<template>
    <div class="mainUi" @mouseup="mouseup($event)" @mousemove="mousemove($event)">
        <drawer-box/>
        <side-left/>
        <edit-center/>
    </div>
</template>

<script>
    import SideLeft from './SideLeft'
    import EditCenter from './EditCenter'
    import DrawerBox from './DrawerBox'
    export default {
        name: "MainUi",
        components: {
            SideLeft,
            EditCenter,
            DrawerBox
        },
        data(){
            return {
                value1: true
            }
        },
        methods: {
            mouseup(event){
                this.$PubSub.publish('main-mouseup', event)
            },
            mousemove(event){
                this.$PubSub.publish('main-mousemove', event)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .mainUi {
        display: flex;
        position: relative;
        height: calc(100% - 42px);
        width: 100%;
        box-sizing: border-box;
    }
</style>