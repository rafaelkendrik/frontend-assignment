<template>
  <div>
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
        v-model="company.name"
        :unmask="false"
        :required="true"
        placeholder="e.g. Your Company Name"
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
        v-model="company.spend"
        :unmask="true"
        :required="true"
        placeholder="e.g. $150,000"
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
        :required="true"
        placeholder="e.g. $150,000 - $330,000"
        @accept="handleSpendAbility"
        @blur="handlePlaceholders"/>
    </form>

    <textarea readonly>

    </textarea>
  </div>
</template>

<script>
  import { VMask, handlePlaceholders, maskPatterns } from '@/libs/mask'
  import { Company } from '@/modules/company/data/constructors'

  const MONEY_RANGE_DIVIDER = ' - '

  export default {
    components: {
      VMask
    },

    data: () => ({
      company: new Company()
    }),

    computed: {
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

      splitSpendAbility (concatSpendAbility) {
        const stringToNumber = str =>
          str.replace(/[^\d]/g, '')

        return concatSpendAbility
            .split(MONEY_RANGE_DIVIDER)
            .map(stringToNumber)
      },

      setSpendAbility ({ min, max }) {
        this.company.spendAbility.min = min
        this.company.spendAbility.max = max
      }
    },

    mounted () {
      this.handlePlaceholders()
    }
  }
</script>

<style lang="scss" scoped>
  .Form-item-label {
    color: $text-color--secondary;
    cursor: pointer;
    text-transform: uppercase;
  }
</style>
