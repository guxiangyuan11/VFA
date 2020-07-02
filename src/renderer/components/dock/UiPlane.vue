<template>
    <div class="uiPlane column">
        <template v-for="(item,_index) in info.children">
            <Demo :info="item"/>
            <!--<component :active="editableTabsValue == item.component" v-if="item.component" :is="item.component"></component>-->
            <!--<div class="plane-ui" :ref="'planeui'+_index"  :style="{backgroundColor:item.backgroundColor,flex:item.flex}"></div>-->
            <Resizer v-if="_index !== info.children.length-1" ref="resizer" type="column" class="column" :level="2"/>
        </template>
    </div>
</template>

<script>
    import Resizer from '../dock/Resizer'
    import Demo from './demo'
    export default {
        name: "UiPlane",
        components: {
            Resizer,
            Demo
        },
        props: {
          info: {
            required: false,
            type: Object,
            default() {
              return {
                type: 'column',
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
                resizerSize: 3,
                preFlex: 0,
                nextFlex: 0,
            }
        },
        mounted() {
          // console.log(this.$refs['planeui0'][0].style.backgroundColor = 'yellow')
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
          dealPx: function () {
            var key = this.info.type == 'row' ? 'width' : 'height'
            var total = this.boxSize['i' + key]
            // 查询是否有不是百分比的数据，如果有的话。统一容错处理
            var px = this.info.children.find(element => {
              if ((element.flex + '').indexOf('px') != -1) {
                return true
              }
            })
            if (px) {
              this.info.children.forEach(element => {
                element.flex = 1 / this.info.children.length
              })
            }
            this.info.children.forEach(element => {
              this.$set(element, 'flex', element.flex * total + 'px')
            })
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
          /**
           * 拖动完成后，需要把孩子元素的px转换为百分比
           */
          mouseup: function () {
            this.initBounding()
            var key = this.info.type == 'row' ? 'width' : 'height'
            var total = this.boxSize['i' + key]
            this.info.children.forEach(element => {
              this.$set(element, 'flex', parseFloat(element.flex) / total)
            })
          },
          mousedown: function (params) {
            this.getBrother(params)
            this.initBounding()
            this.dealPx()
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