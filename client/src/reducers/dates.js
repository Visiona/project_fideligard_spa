import { CHOSEN_DAY_NUMBER } from '../actions'
import { daysFromMinToYesterday } from '../helpers'


const initialState = {
  min: 0,
  max: daysFromMinToYesterday(),
  chosenDayNumber: 0,
  isFetching: false
}

export function dates(state = initialState, action) {
  switch(action.type) {
    case CHOSEN_DAY_NUMBER:
      return {
        ...state,
        chosenDayNumber: action.data
      }
    default:
      return state
  }
}
