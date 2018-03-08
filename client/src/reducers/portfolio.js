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

// if I bought new stocks - add transactions to porfolio
// if (action.data.buysell === 'BUY') {
//   return {
//     ...state,
//     orders: [...state.orders, action.data]
//   }
// } else {
//   return {
//     ...state,
//     orders:   state.orders.map((order) => {
//         if (order.symbol === action.data.symbol) {
//           if (order.quantity === action.data.quantity) {
//             return null
//           } else {
//             order.quantity = order.quantity - action.data.quantity
//           }
//         }
//       })
//     }
// }
// If I sold stocks, reduce or remove the quantity/stocks form portfolio & update balance

export function portfolio(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PORTFOLIO:
    debugger
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
      // return {
      //   ...state,
      //   orders: '' //cerate function which nullifies buys and sell transactions
      // }
    case UPDATE_BALANCE:
      return {
        ...state,
        accBalance: state.accBalance - action.data //cerate function which nullifies buys and sell transactions
      }
    default:
      return state
  }
}
