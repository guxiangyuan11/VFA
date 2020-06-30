<template>
    <div
       class="drawerBox active"
       :style="{
          width: drawerWidth
       }"
    >
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
        data() {
            return {
                resizerSize: 3,
                drawerWidth: '200px'
            }
        },
        methods: {
            initBounding: function () {
                // 初始化并获取抽屉的宽高
               /* let box = this.$el.getBoundingClientRect()
                let length = this.$children.length
                this.boxSize.width = box.width
                this.boxSize.iwidth = box.width - Math.floor(length / 2) * this.resizerSize
                this.boxSize.height = box.height
                this.boxSize.iheight = box.height - Math.floor(length / 2) * this.resizerSize*/
            },
            doMove: function (resizer, move) {
                let key = this.info.type == 'row' ? 'x' : 'y'
                this.drawerWidth = (this.drawerWidth + move[key]) +  'px'
            },
            mousedown(e) {
                this.initBounding()
            }
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
        &.active {
            left: 0;
        }
        .drawerContent {
            width: 100%;
            background-color: green;
        }
    }
</style>