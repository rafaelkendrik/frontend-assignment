import { IMaskComponent as VMask } from 'vue-imask'

const handlePlaceholders = (...elements) => {
  elements.forEach(element => {
    if (!element.$props.value) {
      element.$el.value = ''
    }
  })
}

const maskPatterns = {
  money: () => ({
    mask: '$num',

    blocks: {
      num: numThousandsPattern
    }
  }),

  moneyRange: ({ minStart = 0, maxStart, divider = ' - ' }) => ({
    mask: `\$min${divider}\`\$max`,

    blocks: {
      min: { ...numThousandsPattern, min: minStart },
      max: { ...numThousandsPattern, min: maxStart }
    }
  }),

  title: () => ({
    mask: /^([a-zA-Z]+ ?)*$/,

    prepare (letter, { _value: title }) {
      const lastChar = title.charAt(title.length - 1)

      const isLastCharSpace = (lastChar === ' ')

      const isFirstWordLetter = (!title || isLastCharSpace)

      return (isFirstWordLetter)
        ? letter.toUpperCase()
        : letter
    }
  })
}

const numThousandsPattern = {
  mask: Number,
  thousandsSeparator: ','
}

export {
  VMask,
  handlePlaceholders,
  maskPatterns
}
