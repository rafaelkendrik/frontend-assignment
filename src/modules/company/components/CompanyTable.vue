<template>
  <div class="Panel"></div>
</template>

<style lang="scss" scoped>
  $cont-sizeY--panel: 100vh;

  .Panel {
    background-color: $cont-color--default;
    height: $cont-sizeY--panel;
    padding: $cont-spaces--default;

    @include ui--cont-border();
    @include ui--cont-radius();
  }
</style>
