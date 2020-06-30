<template>
    <div class="drawerBox active">
        <div class="drawerContent">

        </div>
        <resizer type="column" class="row" :level="2"/>
    </div>
</template>

<script>
    import Resizer from '../dock/Resizer'
    export default {
        name: "DrawerBox",
        components: {
            Resizer
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/common";
    .drawerBox {
        display: flex;
        position: absolute;
        left: -100%;
        bottom: 0;
        width: 200px;
        height: 100%;
        background-color: red;
        padding-left: $side-left-box-width;
        transition: all 0.3s ease-in-out;
        &.active {
            left: 0;
        }
        .drawerContent {
            width: 100%;
            background-color: green;
        }
    }
</style>