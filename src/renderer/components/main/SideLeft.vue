<template>
    <div class="sideLeft">
        <span class="iconfont icon-menu"></span>
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
    height: 100vh;
    background-color: rgb(54, 55, 56);
    .icon-menu {
        color: #fff;
        font-size: 32px;
        cursor: pointer;
        &:hover {
            color: $hover-highlight-color;
        }
    }
}
</style>