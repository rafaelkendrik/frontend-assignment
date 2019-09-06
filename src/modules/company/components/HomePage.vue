<template>
  <div>
    <Breadcrumb/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Breadcrumb from './Breadcrumb'

  export default {
    components: {
      Breadcrumb
    }
  }
</script>
