<template>
  <nav>
    <ul>
      <li
        class="Breadcrumb"
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.label">
        <router-link
          :to="breadcrumb.link">
          {{ breadcrumb.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    computed: {
      breadcrumbs() {
        return this.$route.matched
          .map(({ name, path }) => ({
            link: path || '/',
            label: name.split('-').join(' ')
          }))
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    outline: none;
    text-decoration: none;
  }

  ul {
    padding: 0;
  }

  .Breadcrumb {
    color: $text-color--secondary;
    display: inline;
    font-size: $text-size--micro;
    text-transform: uppercase;

    &:not(:last-child) {
      &:after {
        content: "/";
      }
    }
  }
</style>
