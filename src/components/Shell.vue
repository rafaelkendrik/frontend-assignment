<template>
  <div>
    <MainMenu/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import MainMenu from './layout/MainMenu'
  import Footer from './layout/Footer'

  export default {
    components: {
      MainMenu,
      Footer
    }
  }
</script>

<style>
  html, body {
    --cont-color--body: #e7e6f3;

    background-color: var(--cont-color--body);
    color: var(--text-color--default);
    font-family: var(--text-family--default);
    font-size: var(--text-size--default);

    box-sizing: border-box;
    margin: 0;
  }
</style>
