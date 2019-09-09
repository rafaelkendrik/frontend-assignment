export const setName = (state, name) => {
  state.company.name = name
}

export const setNotes = (state, notes) => {
  state.company.notes = notes
}

export const setSpend = (state, spend) => {
  state.company.spend = spend
}

export const setSpendAbility = (state, spendAbility) => {
  state.company.spendAbility.min = spendAbility.min
  state.company.spendAbility.max = spendAbility.max
}
