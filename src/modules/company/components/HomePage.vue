<template>
  <div>
    <Breadcrumb/>
    <Menu/>
    <router-view></router-view>
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
