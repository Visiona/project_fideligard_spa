import { CHOSEN_DAY_NUMBER } from '../actions/dates'
import { daysFromMinToYesterday,
          convertCountToDate } from '../helpers'


const initialState = {
  min: 0,
  max: daysFromMinToYesterday(),
  chosenDayNumber: 0,
  isFetching: false
}

export function dates(state = initialState, action) {
  debugger
  switch(action.type) {
    case CHOSEN_DAY_NUMBER:
      return {
        ...state,
        chosenDayNumber: action.data,
        currentDate: convertCountToDate(action.data)
      }
    default:
      return state
  }
}
