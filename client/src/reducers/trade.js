import { UPDATE_FORM,
        UPDATE_SYMBOL } from '../actions/trade'


const initialState = {
    chosenDate: '',
    symbol: '',
    price: '',
    quantity: '',
    symbols: [],
    formState: 'EMPTY',
    orderType: ''
}

export function trade(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SYMBOL:
      return {
        ...state,
        symbol: action.data
      }
    case UPDATE_FORM:
      return {
        ...state,
        symbol: action.data.symbol || '',
        price: action.data.price || 0,
        quantity: action.data.quantity || 0,
        formState: 'FULL' ? action.data.symbol && action.data.price && action.data.quantity : 'EMPTY',
        orderType: action.data.buysell
      }
    default:
      return state
  }
}
