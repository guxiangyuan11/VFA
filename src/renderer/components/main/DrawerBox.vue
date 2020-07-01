<template>
    <div
       class="drawerBox"
       :class="{active: active}"
       :style="{
          width: currentWidth + 'px'
       }"
    >
        <UiPlane/>
        <resizer ref="resizer" type="row" class="row" :level="2"/>
    </div>
</template>

<script>
    import Resizer from '../dock/Resizer'
    import UiPlane from '../dock/UiPlane'
    export default {
        name: "DrawerBox",
        components: {
            Resizer,
            UiPlane
        },
        data() {
            return {
                resizerSize: 3,
                drawerWidth: 200,
                currentWidth: 300,
                active: false
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
                if(this.currentWidth<=200 && move[key]>0){
                    this.currentWidth = 200
                } else {
                    this.currentWidth = (this.drawerWidth - move[key])
                }
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
        width: 300px;
        height: 100%;
        background-color: $default-box-background-color;
        padding-left: $side-left-box-width;
        &.active {
            left: 0;
        }
        .uiPlane {
            width: 100%;
            /*background-color: green;*/
        }
    }
</style>