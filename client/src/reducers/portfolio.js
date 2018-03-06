import { UPDATE_PORTFOLIO,
        UPDATE_BALANCE} from '../actions/portfolio'


// transactions = {
//   symbol: '',
//   date: '',
//   type: '',
//   quantity: '',
//   price: '',
//   sortName: '',
//   sortType: 'right',
//   currentFilter: '',
//   all: []
// }

const initialState = {
  // totalCost: 0,
  // profitLoss: 0,
  // currentValue: 0,
  // historicalValues: {'1d': 0, '7d': 0, '30d': 0},
  accBalance: 5000,
  orders: []

}

export function portfolio(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PORTFOLIO:
      return {
        ...state,
        orders: '' //cerate function which nullifies buys and sell transactions
      }
    case UPDATE_BALANCE:
      return {
        ...state,
        accBalance: state.accBalance - action.data //cerate function which nullifies buys and sell transactions
      }
    default:
      return state
  }
}
