<template>
    <div
       class="drawerBox"
       :style="{
          width: currentWidth + 'px'
       }"
       v-show="show"
    >
        <resizer v-if="direction==='right'" ref="resizer" type="row" class="row" :level="2"/>
        <UiPlane :info="uiComponents"/>
        <resizer v-if="direction==='left'" ref="resizer" type="row" class="row" :level="2"/>
    </div>
</template>

<script>
    import Resizer from '../dock/Resizer'
    import UiPlane from '../dock/UiPlane'
    export default {
        name: "DrawerBox",
        props: {
          uiComponents: {
            type: Object,
            required: false,
          },
          direction: {
            required: true,
            type: String
          },
          bindDrawerActive: {
            type: Boolean,
            default: true
          },
          propDrawerWidth: {
            // 传入进来的宽度
            type: Number,
            default: 300
          }
        },
        components: {
            Resizer,
            UiPlane
        },
        data() {
            return {
                resizerSize: 3,
                drawerWidth: 200,
                currentWidth: 300,
                show: true
            }
        },
        mounted() {
          if(this.bindDrawerActive){
            this.$PubSub.subscribe('drawerActive', (msg, val) => {
              this.show = val
            })
          }
          if(!this.bindDrawerActive) {
            this.show = true
          }
          this.currentWidth = this.propDrawerWidth
        },
        methods: {
            doMove: function (resizer, move) {
                let key = this.$refs.resizer.type == 'row' ? 'x' : 'y'
                // 由于currentWidth会不停的变所以用drawerWidth存储初始的宽度
                if(this.currentWidth<=200 && move[key]>0){
                    this.currentWidth = 200
                } else {
                    if(this.direction==='left') {
                      this.currentWidth = (this.drawerWidth - move[key])
                    } else {
                      this.currentWidth = (this.drawerWidth + move[key])

                    }
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
        position: relative;
        width: 300px;
        height: 100%;
        background-color: $default-box-background-color;
        /*transition: all 0.3s;*/
        .uiPlane {
            width: 100%;
            /*background-color: green;*/
        }
    }
</style>