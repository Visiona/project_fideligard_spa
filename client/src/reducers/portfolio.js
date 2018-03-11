import { UPDATE_PORTFOLIO,
        UPDATE_BALANCE} from '../actions/portfolio'


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
    if (action.data.buysell === 'BUY') {
      return {
        ...state,
        orders: [...state.orders, action.data]
      }
    } else {
      return {
        ...state,
        orders:   state.orders.map((order) => {
            if (order.symbol === action.data.symbol) {
              if (order.quantity === action.data.quantity) {
                return null
              } else {
                order.quantity = order.quantity - action.data.quantity
              }
            }
          })
        }
    }
    case UPDATE_BALANCE:
      return {
        ...state,
        accBalance: state.accBalance - action.data
      }
    default:
      return state
  }
}
