<template>
    <div class="sideLeft">
        <span class="iconfont icon-menu" alt="菜单"></span>
    </div>
</template>

<script>
  export default {
    name: "SideLeft",
    data(){
      return { }
    }
  }
</script>

<style lang="scss">
@import "../../assets/css/common";
.sideLeft {
    position: relative;
    width: 43px;
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
    }
}
</style>