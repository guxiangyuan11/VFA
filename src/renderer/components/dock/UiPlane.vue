<template>
    <div class="uiPlane">
        <template>
            <!--<component :active="editableTabsValue == item.component" v-if="item.component" :is="item.component"></component>-->
        </template>
    </div>
</template>

<script>
    export default {
        name: "UiPlane"
    }
</script>

<style lang="scss" scoped>
.uiPlane {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    overflow: auto;
    &.column {}
    &.row {}
}
</style>