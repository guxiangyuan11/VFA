<template>
    <div
       class="widgetComponent"
       :style="{flex:info.flex}"
    >
        <Input class="search-com" v-model="searchValue" placeholder="输入要搜索的组件名" size="small" >
            <Select v-model="searchSelect" slot="prepend" style="width: 80px">
                <Option value="base">组件</Option>
            </Select>
            <Button slot="append" icon="ios-search"></Button>
        </Input>
        <Tabs  type="line" :animated="false" size="small">
            <TabPane label="基本组件列表">
                <BigList/>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
  /**
   * 组件库
   * */
  import BigList from './BigList'
  export default {
    name: "widgetComponent",
    props: {
      info: {
        required: false,
        type: Object
      },
    },
    components: {
      BigList
    },
    data() {
      return {
        searchValue:'',
        searchSelect: 'base'
      }
    }
  }
</script>

<style lang="scss" scoped>
.widgetComponent {
    overflow: hidden;
    .search-com {
    }
}
</style>
<style lang="scss">
    @import "../../../assets/css/common";
    .ivu-tabs-nav .ivu-tabs-tab:hover{
        color: $hover-highlight-color;
    }
    .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
        border-radius: 0;
    }
    .ivu-input-group-append, .ivu-input-group-prepend {
        border-radius: 0;
        border: 1px solid #505152;
    }
    .ivu-input-group-small>.ivu-input-group-prepend {
        border-radius: 0;
    }
    .ivu-input-group-small .ivu-input, .ivu-input-group-small>.ivu-input-group-append, .ivu-input-group-small>.ivu-input-group-prepend {
        border-radius: 0;
        background-color: #3C3F41;
    }
    .ivu-btn-icon-only {
        border-radius: 0;
    }
    .ivu-select-dropdown {
        border-radius: 0;
        background-color: #3C3F41;
    }
    .ivu-input {
        border: 1px solid #505152;
        color: #fff;
        /*border-bottom: 1px solid #505152;*/
        /*border-left:none;*/
        /*border-right: none;*/
    }
    .ivu-select-item:hover {
        background-color: #2d3032;
        color: $hover-highlight-color;
    }
    .ivu-input:hover,.ivu-input:focus {
        border-color: $hover-highlight-color;
    }
    .ivu-select {
        color: #858577;
    }
    .ivu-btn:focus {
        box-shadow:none;
    }
</style>