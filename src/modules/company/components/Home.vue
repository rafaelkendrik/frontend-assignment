<template>
  <div class="Page">
    <Breadcrumb class="Page-breadcrumb"/>
    <Menu class="Page-menu"/>
    <section class="Page-panels">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import Breadcrumb from './Breadcrumb'
  import Menu from './Menu'

  export default {
    components: {
      Breadcrumb,
      Menu
    }
  }
</script>

<style lang="scss" scoped>
  $cont-size--menu: 15rem;

  .Page {
    padding-bottom: calc(#{$cont-spaces--default} * 2.5);
    padding-left: $cont-spaces--default;
    padding-right: $cont-spaces--default;
  }

  .Page-menu {
    display: inline-block;
    max-width: $cont-size--menu;
    vertical-align: top;
    width: 100%;
  }

  .Page-panels {
    box-sizing: border-box;
    display: inline-block;
    margin-left: $cont-spaces--small;
    width: calc(
      100%
      - #{$cont-size--menu}
      - #{$cont-spaces--default}
    );
  }
</style>
