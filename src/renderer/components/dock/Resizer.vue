<template>
    <div class="ui-dock-resizer" :class="{ active :active}" :style="{'z-index':level}" @mousedown="mousedown($event)">
        <div class="bar"></div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'dockResizer',
        components: {},
        props: {
            type: {
                type: String
            },
            info: {
                type: Object
            },
            level: {
                type: Number
            }
        },
        data: function () {
            return {
                move: {
                    start: {x: 0, y: 0},
                    end: {x: 0, y: 0},
                },
                active: false
            }
        },
        watch: {
        },
        computed: {
        },
        mounted: function () {
            this.$PubSub.subscribe('main-mouseup', (msg,event) => {
                if (this.active && this.$parent['mouseup']) {
                    this.$parent.mouseup()
                }
                this.active = false
            })
            this.$PubSub.subscribe('main-mousemove', (msg,event) => {
                 if (this.active) {
                     this.move.end = {
                         x: event.pageX,
                         y: event.pageY
                     }
                     this.$parent.doMove(this, {
                         x: this.move.start.x - this.move.end.x,
                         y: this.move.start.y - this.move.end.y
                     })
                 }
            })
        },
        methods: {
            mousedown: function (event) {
                this.move.start = {
                    x: event.pageX,
                    y: event.pageY
                }
                this.active = true
                if (this.active) {
                    this.$parent.mousedown(this)
                }
            }
        }
    }
</script>

<style lang="scss"  scoped>
    .ui-dock-resizer {
        position: relative;
        flex: none;
        white-space: nowrap;
        z-index: 2;
        user-select: none;

        &.column {
            width: auto;
            height: 2px;
            margin: 0 0;
            box-shadow: inset 0 -4px 6px -5px #7b7b7b, inset 0px 4px 6px -5px #000;

            .bar {
                top: -1px;
                left: 0;
                height: 6px;
                width: 100%;
                cursor: row-resize;
            }
        }

        &.row {
            width: 4px;
            height: auto;
            margin: 0 0;
            box-shadow: inset -4px 0 6px -5px #000, inset 4px 0px 6px -5px #a0a0a0;

            .bar {
                top: 0;
                left: -1px;
                width: 6px;
                height: 100%;
                cursor: col-resize;
            }
        }

        &.active {
            .bar {
                background-color: #d48806;
            }
        }

        .bar {
            position: absolute;
        }
    }
</style>