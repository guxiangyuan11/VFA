<template>
    <div class="sideLeft">
        <span
             class="iconfont icon-menu"
             :class="{active: active === index}"
             alt="菜单"
             v-for="(item,index) in leftMenuList"
             :key='"menu" + index'
             @click="applyMethod(item.methodName, index)"
        ></span>
    </div>
</template>

<script>
    import leftMenuJson from '../../config/leftMenu'
    export default {
        name: "SideLeft",
        data(){
            return {
                active: -1,
                leftMenuList: leftMenuJson
            }
        },
        methods: {
            applyMethod(methodName, data) {
                this[methodName](data)
            },
            openLeftDrawer(_index) {
                if(this.active === _index){
                    this.active = -1
                    this.$PubSub.publish('drawerActive', false)
                } else {
                    this.active = _index
                    this.$PubSub.publish('drawerActive', true)
                }
            },
        }
    }
</script>

<style lang="scss">
    @import "../../assets/css/common";
    .sideLeft {
        position: relative;
        width: $side-left-box-width;
        box-sizing: border-box;
        background-color: $main-backgroun-color;
        text-align: center;
        .iconfont {
            color: $default-font-color;
            font-size: 32px;
            cursor: pointer;
            &:hover {
                color: $hover-highlight-color;
            }
            &.active {
                color: $hover-highlight-color;
            }
        }
    }
</style>