<template>
    <div
       class="drawerBox"
       :class="{active: active && currentWidth>=200}"
       :style="{
          width: currentWidth + 'px'
       }"
    >
        <div class="drawerContent">

        </div>
        <resizer ref="resizer" type="row" class="row" :level="2"/>
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
                drawerWidth: 200,
                currentWidth: 200,
                active: true
            }
        },
        mounted() {
          this.$PubSub.subscribe('drawerActive', (msg, val) => {
              this.active = val
          })
        },
        methods: {
            doMove: function (resizer, move) {
                let key = this.$refs.resizer.type == 'row' ? 'x' : 'y'
                // 由于currentWidth会不停的变所以用drawerWidth存储初始的宽度
                this.currentWidth = (this.drawerWidth - move[key])
            },
            mousedown(e) {
                this.drawerWidth = this.currentWidth
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