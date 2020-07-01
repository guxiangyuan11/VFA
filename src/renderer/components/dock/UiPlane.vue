<template>
    <div class="uiPlane column">
        <template v-for="(item,_index) in info.children">
            <!--<component :active="editableTabsValue == item.component" v-if="item.component" :is="item.component"></component>-->
            <div class="plane-ui"  :style="{backgroundColor:item.backgroundColor,flex:item.flex}"></div>
            <Resizer v-if="_index !== info.children.length-1" ref="resizer" type="column" class="column" :level="2"/>
        </template>
    </div>
</template>

<script>
    import Resizer from '../dock/Resizer'
    export default {
        name: "UiPlane",
        components: {
            Resizer
        },
        props: {
          info: {
            required: false,
            type: Object,
            default() {
              return {
                children: [
                  {flex:1, backgroundColor:'red'},
                  {flex:1, backgroundColor:'green'},
                  {flex:1, backgroundColor:'blue'},
                ]
              }
            }
          },
        },
        data() {
            return {
                preBrother: null,
                nextBrother: null,
                boxSize: {
                    width: 0,
                    iwidth: 0, // 减去当前框下resizer的宽度
                    height: 0,
                    iheight: 0, // 减去当前框下resizer的高度
                },
                resizerSize: 3
            }
        },
        methods: {
          initBounding: function () {
            var box = this.$el.getBoundingClientRect()
            var length = this.$children.length
            this.boxSize.width = box.width
            this.boxSize.iwidth = box.width - Math.floor(length / 2) * this.resizerSize
            this.boxSize.height = box.height
            this.boxSize.iheight = box.height - Math.floor(length / 2) * this.resizerSize
          },
          doMove: function (resizer, move) {
            var key = this.info.type == 'row' ? 'x' : 'y'
            var preFlex = parseFloat(this.preFlex - move[key])
            var nextFlex = parseFloat(this.nextFlex + move[key])
            if (this.preBrother && this.nextBrother) {
              this.preBrother.info.flex = preFlex + 'px'
              this.nextBrother.info.flex = nextFlex + 'px'
            }
          },
          getBrother: function (resizer) {
            var index = 0
            var child = this.$children
            child.find((value, key) => {
              if (value == resizer) {
                index = key
                return true
              }
            })
            if (index) {
              this.preBrother = child[index - 1]
              this.nextBrother = child[index + 1]
            }
          },
          mousedown: function (params) {
            this.getBrother(params)
            this.initBounding()
            if (this.preBrother && this.nextBrother) {
              this.preFlex = parseFloat(this.preBrother.info.flex)
              this.nextFlex = parseFloat(this.nextBrother.info.flex)
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
.uiPlane {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    overflow: auto;
    .plane-ui {
        flex: 1;
    }
    &.row {
        flex-direction: row;
        flex-wrap: nowrap;
    }

    &.column {
        flex-direction: column;
        flex-wrap: nowrap;
    }
}
</style>