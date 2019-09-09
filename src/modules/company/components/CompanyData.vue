<template>
  <div class="Panel">
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut vitae ultrices nisi. Aenean ultricies magna et orci
      faucibus, pellentesque ante eu, ultricies magna.
    </span>

    <form>
      <label
        class="Form-item-label"
        for="company-data-name">
        company name
      </label>
      <VMask
        id="company-data-name"
        ref="company-data-name"
        v-bind="titleMaskPattern"
        :value="company.name"
        :unmask="false"
        :required="true"
        placeholder="e.g. Your Company Name"
        @accept="setName"
        @blur="handlePlaceholders"/>

      <label
        class="Form-item-label"
        for="company-data-spend">
        company spend
      </label>
      <VMask
        id="company-data-spend"
        ref="company-data-spend"
        v-bind="moneyMaskPattern"
        :value="company.spend"
        :unmask="true"
        placeholder="e.g. $150,000"
        @accept="setSpend"
        @blur="handlePlaceholders"/>

      <label
        class="Form-item-label"
        for="company-data-spend-ability">
        company spend ability
      </label>
      <VMask
        id="company-data-spend-ability"
        ref="company-data-spend-ability"
        v-bind="moneyRangeMaskPattern"
        :value="concatSpendAbility"
        :unmask="false"
        placeholder="e.g. $150,000 - $330,000"
        @accept="handleSpendAbility"
        @blur="handlePlaceholders"/>
    </form>

    <label
      class="Form-item-label"
      for="company-data-notes">
      notes
    </label>
    <textarea
      id="company-data-notes"
      class="Form-textarea"
      placeholder="e.g. Good Tech Company"
      :readonly="true"
      @click="openModal">{{ company.notes }}</textarea>

    <VModal ref="VModal">
      <label
        class="Form-item-label"
        for="company-data-additional-notes">
        additional notes
      </label>
      <textarea
        id="company-data-additional-notes"
        class="Form-textarea"
        placeholder="e.g. Good Tech Company"
        v-model="additionalNotes">{{ additionalNotes }}</textarea>
      <template slot="actions">
        <button @click="saveNotes">
          save
        </button>
      </template>
    </VModal>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { VMask, handlePlaceholders, maskPatterns } from '@/libs/mask'
  import VModal from '@/components/common/VModal'

  const MONEY_RANGE_DIVIDER = ' - '

  export default {
    components: {
      VMask,
      VModal
    },

    data: () => ({
      additionalNotes: ''
    }),

    computed: {
      ...mapState('company', [
        'company'
      ]),

      concatSpendAbility () {
        const { min, max } = this.company.spendAbility

        return (max)
          ? `${min}${MONEY_RANGE_DIVIDER}${max}`
          : min
      },

      moneyMaskPattern () {
        return maskPatterns.money()
      },

      moneyRangeMaskPattern () {
        const maxStart = this.company.spendAbility.min

        return maskPatterns.moneyRange({
          maxStart,
          divider: MONEY_RANGE_DIVIDER
        })
      },

      titleMaskPattern () {
        return maskPatterns.title()
      }
    },

    methods: {
      ...mapMutations('company', [
        'setName',
        'setNotes',
        'setSpend',
        'setSpendAbility'
      ]),

      handlePlaceholders () {
        handlePlaceholders(
          this.$refs['company-data-spend'],
          this.$refs['company-data-spend-ability']
        )
      },

      handleSpendAbility (concatSpendAbility) {
        const [min, max] = this.splitSpendAbility(concatSpendAbility)

        this.setSpendAbility({ min, max })
      },

      openModal () {
        this.$refs.VModal.open()
      },

      splitSpendAbility (concatSpendAbility) {
        const stringToNumber = str =>
          str.replace(/[^\d]/g, '')

        return concatSpendAbility
            .split(MONEY_RANGE_DIVIDER)
            .map(stringToNumber)
      },

      saveNotes () {
        this.setNotes(this.additionalNotes)
        this.$refs.VModal.close()
      }
    },

    mounted () {
      this.handlePlaceholders()
    }
  }
</script>

<style lang="scss" scoped>
  .Panel {
    background-color: $cont-color--default;
    padding: $cont-spaces--default;

    @include ui--cont-border();
    @include ui--cont-radius();
  }

  $cont-sizeX--field: 25rem;
  $cont-sizeY--textarea: 7.5rem;

  .Form-item-label {
    color: $text-color--secondary;
    cursor: pointer;
    display: table;
    font-size: $text-size--micro;
    padding-bottom: $text-spaces--nano;
    padding-top: $text-spaces--default;
    text-transform: uppercase;

    @include ui--text-shadow($text-color--secondary);

    & + * {
      background-color: $cont-color--default;
      box-sizing: border-box;
      max-width: 100%;
      min-width: $cont-sizeX--field;
      padding: $text-spaces--micro;

      @include ui--cont-border();
      @include ui--cont-radius();

      &::placeholder {
        font-size: $text-size--small;
        opacity: 0.25;
      }
    }
  }

  .Form-textarea {
    box-sizing: border-box;
    display: block;
    height: $cont-sizeY--textarea;
    max-width: 100%;
    min-width: $cont-sizeX--field;
    resize: none;
    width: 100%;

    &:read-only {
      cursor: pointer;
    }
  }
</style>
