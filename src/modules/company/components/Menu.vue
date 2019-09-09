<template>
  <nav class="Menu">
    <router-link
      class="Menu-item"
      v-for="item in menu"
      :key="item.link"
      :to="item.link"
      append>
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      menu: [
        { link: '/company-data', label: 'Company Data' },
        { link: '/company-table', label: 'Company Table' },
        { link: '/company-page', label: 'Company Page' }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  $cont-color--active: #fafbfc;

  a {
    color: inherit;
    outline: none;
    text-decoration: none;
  }

  .Menu {
    > :first-child {
      @include ui--cont-radius(
        $cont-radius--default,
        'top'
      );
    }

    > :last-child {
      @include ui--cont-radius(
        $cont-radius--default,
        'bottom'
      );
    }

    > :nth-child(n) {
      @include ui--cont-border();
    }
  }

  .Menu-item {
    background-color: $cont-color--default;
    color: $text-color--main;
    display: block;
    font-size: $text-size--small;
    padding: $text-spaces--large;
    text-transform: uppercase;

    @include ui--all-transition();
    @include ui--text-shadow($text-color--main);

    &:hover,
    &.router-link-exact-active {
      background-color: $cont-color--active;
      color: $text-color--default;

      @include ui--text-shadow();
      @include ui--cont-border(
        $cont-radius--default,
        'left',
        $cont-color--main
      );
    }
  }
</style>
