

const initialState = {
    stocks: ['APPL']
}

export function stocks(state = initialState, action) {
  switch(action.type) {
    // case CHOSEN_DAY_NUMBER:
    //   return {
    //     ...state,
    //     chosenDayNumber: action.data
    //   }
    default:
      return state
  }
}
