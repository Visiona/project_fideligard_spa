import { UPDATE_FORM,
        UPDATE_SYMBOL,
        UPDATE_FORM_STATUS,
        UPDATE_BUYSELL } from '../actions/trade'


const initialState = {
    chosenDate: '',
    symbol: '',
    price: '',
    quantity: 0,
    isFormCompleted: true,
    buysell: 'BUY'
}

export function trade(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SYMBOL:
      return {
        ...state,
        symbol: action.data
      }
    case UPDATE_BUYSELL:
      return {
        ...state,
        buysell: action.data
      }
    case UPDATE_FORM_STATUS:
      return {
        ...state,
        isFormCompleted: action.data
      }
    case UPDATE_FORM:
      return {
        ...state,
        price: action.data.price || 0,
        quantity: action.data.quantity || 0
      }
    default:
      return state
  }
}
