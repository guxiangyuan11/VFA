<template>
    <div class="mainUi">
        <side-left/>
        <drawer-box direction="left" :uiComponents="leftData"/>
        <edit-center/>
        <!--<drawer-box direction="right" :bindDrawerActive="false"/>-->
    </div>
</template>

<script>
    import SideLeft from './SideLeft'
    import EditCenter from './EditCenter'
    import DrawerBox from './DrawerBox'

    export default {
        name: "MainUi",
        components: {
            SideLeft,
            EditCenter,
            DrawerBox,
        },
        data() {
          return {
            leftData: {
              type: 'column',
              children: [
                {flex:1, limit:100, componentName: 'widgetComponent'},
              ]
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
    .mainUi {
        display: flex;
        position: relative;
        height: calc(100% - 42px);
        width: 100%;
        box-sizing: border-box;
    }
</style>