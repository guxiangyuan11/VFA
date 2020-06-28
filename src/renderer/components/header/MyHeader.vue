<template>
    <div class="myHeader"></div>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style lang="scss" scoped>
@import "../../assets/css/common";
.myHeader {
    width: 100%;
    height: 42px;
    background-color: $main-backgroun-color;
    border-bottom: 1px solid rgb(21, 21, 21);
}
</style>