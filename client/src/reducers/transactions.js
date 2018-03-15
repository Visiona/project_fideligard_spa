import { CREATE_TRANSACTION,
        SET_FILTER,
        SET_SORT_DATE,
        SET_SORT_SYMBOL } from '../actions/transactions'
import { bake_cookie, read_cookie} from 'sfcookies'


const initialState = {
  ref: 10,
  symbol: '',
  chosenDate: '',
  type: '',
  quantity: '',
  price: '',
  sortName: '',
  sortDateType: 'right',
  sortSymbolType: 'right',
  currentFilterTran: '',
  history: []
}

export function transactions(state = initialState, action) {
  state.history = read_cookie('history')
  switch(action.type) {
    case CREATE_TRANSACTION:
      let history = [...state.history, action.data]
      bake_cookie('history', history)
      return {
        ...state,
        history: [...state.history, action.data]
      }
    case SET_FILTER:
      return {
        ...state,
        currentFilterTran: action.data.currentFilterTran,
      }
    case SET_SORT_DATE:
      return {
        ...state,
        sortDateType: action.data === 'up' ? 'down' : 'up'
      }
    case SET_SORT_SYMBOL:
      return {
        ...state,
        sortSymbolType: action.data === 'up' ? 'down' : 'up'
      }
    default:
      return state
  }
}
