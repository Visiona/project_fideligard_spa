import { CREATE_TRANSACTION,
        SET_FILTER,
        SET_SORT_DATE,
        SET_SORT_SYMBOL } from '../actions/transactions'


const initialState = {
  ref: 10,
  symbol: '',
  date: '',
  type: '',
  quantity: '',
  price: '',
  sortName: '',
  sortDateType: 'right',
  sortSymbolType: 'right',
  currentFilter: '',
  all: []
}

export function transactions(state = initialState, action) {
  switch(action.type) {
    case CREATE_TRANSACTION:
      return {
        ...state,
        all: [...state, action.data]
      }
    case SET_FILTER:
      return {
        ...state,
        currentFilter: action.data,
        sortType: 'right'
      }
    case SET_SORT_DATE:
      return {
        ...state,
        sortType: action.data === 'up' ? 'down' : 'up',
        sortName: 'Date',
      }
    case SET_SORT_SYMBOL:
      return {
        ...state,
        sortType: action.data === 'up' ? 'down' : 'up',
        sortName: 'Symbol',
      }
    default:
      return state
  }
}
