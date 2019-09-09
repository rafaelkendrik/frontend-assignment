<template>
  <div class="Layout">
    <div class="Panel"></div>
    <div class="Panel"></div>
    <div class="Panel"></div>
    <div class="Panel"></div>
    <div class="Panel"></div>
  </div>
</template>

<style lang="scss" scoped>
  $cont-sizeY--panel-1: 10rem;
  $cont-sizeY--panel-2: auto;
  $cont-sizeY--panel-3: 10rem;
  $cont-sizeY--panel-4: 15rem;
  $cont-sizeY--panel-5: 10rem;

  .Layout {
    display: grid;
    grid-template-columns: repeat(2, calc((100% - #{$cont-spaces--default}) / 2));
    grid-template-rows:
      $cont-sizeY--panel-1
      $cont-sizeY--panel-3
      $cont-sizeY--panel-4
      $cont-sizeY--panel-5;
    column-gap: $cont-spaces--default;
    row-gap: $cont-spaces--default;
  }

  .Panel {
    background-color: $cont-color--default;
    box-sizing: border-box;
    padding: $cont-spaces--default;

    @include ui--cont-border();
    @include ui--cont-radius();
  }

  .Panel:nth-child(1) {
    height: $cont-sizeY--panel-1;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .Panel:nth-child(2) {
    height: $cont-sizeY--panel-2;
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 5;
  }

  .Panel:nth-child(3) { height: $cont-sizeY--panel-3 }
  .Panel:nth-child(4) { height: $cont-sizeY--panel-4 }
  .Panel:nth-child(5) { height: $cont-sizeY--panel-5 }
</style>
