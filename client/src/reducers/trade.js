import { UPDATE_FORM,
        UPDATE_SYMBOL,
        UPDATE_FORM_STATUS} from '../actions/trade'


const initialState = {
    chosenDate: '',
    symbol: '',
    price: '',
    quantity: 0,
    symbols: [],
    isFormCompleted: true,
    orderType: 'BUY'
}

export function trade(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SYMBOL:
      return {
        ...state,
        symbol: action.data
      }
    case UPDATE_FORM_STATUS:
    debugger
      return {
        ...state,
        isFormCompleted: action.data
      }
    case UPDATE_FORM:
      return {
        ...state,
        symbol: action.data.symbol || '',
        price: action.data.price || 0,
        quantity: action.data.quantity || 0,
        orderType: action.data.buysell
      }
    default:
      return state
  }
}
