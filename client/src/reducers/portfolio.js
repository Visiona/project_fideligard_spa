import { UPDATE_PORTFOLIO,
        UPDATE_BALANCE} from '../actions/portfolio'
import { bake_cookie, read_cookie} from 'sfcookies'


function reconcileOrders(orders, data) {
  let ordersArr = [];
  orders.forEach((order) => {
      if (order.symbol === data.symbol) {
        if (order.quantity !== data.quantity) {
         ordersArr.push({ symbol: order.symbol,
                  buysell: 'SELL',
                  quantity: order.quantity - data.quantity,
                  chosenDate: order.chosenDate,
                  price: order.price })
        }
      }
    })
  return ordersArr
}


// let data = {symbol: "AAL", buysell: "SELL", quantity: "4", chosenDate: "2012-01-06", price: "5.60"}
// let orders = [{symbol: "AAL", buysell: "BUY", quantity: "5", chosenDate: "2012-01-06", price: "5.60"}]

const initialState = {
  accBalance: parseInt(read_cookie('history')) || 5000,
  orders: []
}

export function portfolio(state = initialState, action) {
  // state.accBalance = read_cookie('balance')
  state.orders = read_cookie('orders')
  switch(action.type) {
    case UPDATE_PORTFOLIO:
    if (action.data.buysell === 'BUY') {
      let orders = [...state.orders, action.data]
      bake_cookie('orders', orders)
      return {
        ...state,
        orders: orders
      }
    } else {
      let orders = reconcileOrders(state.orders, action.data)
      bake_cookie('orders', orders)
      return {
        ...state,
        orders: orders
        }
    }
    case UPDATE_BALANCE:
      let balance = state.accBalance - action.data
      bake_cookie('balance', balance)
      return {
        ...state,
        accBalance: balance
      }
    default:
      return state
  }
}
