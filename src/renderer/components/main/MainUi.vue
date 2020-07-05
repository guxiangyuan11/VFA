<template>
    <div class="mainUi">
        <side-left/>
        <drawer-box/>
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
            }
        },
        methods: {

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