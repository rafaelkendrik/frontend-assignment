<template>
  <transition name="fade">
    <div v-show="isOpen" class="VModal" @click.self="close">
      <div class="VModal-content">
        <slot></slot>
        <div v-show="hasActions" class="VModal-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data: () => ({
      isOpen: false
    }),

    computed: {
      hasActions () {
        return Boolean(this.$slots.actions.length)
      }
    },

    methods: {
      close () {
        this.isOpen = false
      },

      open () {
        this.isOpen = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $cont-color--clickable: #64599a;
  $text-color--clickable: #ffffff;

  .VModal {
    position: fixed;

    @extend .ui--cont-centralize;

    &:before {
      background-color: $cont-color--accent;
      content: "";
      cursor: pointer;
      display: block;
      opacity: 0.85;
      position: fixed;
      z-index: -1;

      @extend .ui--cont-centralize;
      @extend .ui--cont-viewport;
    }
  }

  .VModal-content {
    background-color: $cont-color--default;
    padding: $cont-spaces--large;

    @include ui--cont-border();
    @include ui--cont-radius();
    @include ui--cont-shadow();
  }

  .VModal-actions {
    direction: rtl;
    padding-top: $cont-spaces--large;
    text-align: right;

    > :nth-child(n) {
      background-color: $cont-color--clickable;
      border: none;
      color: $text-color--clickable;
      cursor: pointer;
      font-size: $text-size--micro;
      outline: none;
      padding: $cont-spaces--micro $cont-spaces--large;
      text-transform: uppercase;

      @include ui--cont-radius();
      @include ui--text-shadow($text-color--clickable);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 250ms;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
