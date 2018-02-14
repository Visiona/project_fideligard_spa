import { STOCKS_REQUEST,
        STOCKS_SUCCESS,
        STOCKS_FAILURE } from '../actions/stocks'

const initialState = {
    stocks: ['APPL']
}

export function stocks(state = initialState, action) {
  switch(action.type) {
    case STOCKS_SUCCESS:
        debugger
      return {
        ...state,
        stocks: action.data,
        isFetching: false
      }
    case STOCKS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case STOCKS_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
