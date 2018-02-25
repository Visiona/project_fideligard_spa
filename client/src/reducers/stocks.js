import { STOCKS_REQUEST,
        STOCKS_SUCCESS,
        STOCKS_FAILURE,
        SET_FILTER } from '../actions/stocks'
import { convertFourSetsIntoOne } from '../helpers'


const initialState = {
    currentSymbols: [], //getStockSymbols(stocksData)
    historicDates: [], //getHistoricDates(chosenDate)
    finalStocksSet: {}, //convertFourSetsIntoOne(stocksSets, symbols)
    fourSetsOfStocks: []
}

export function stocks(state = initialState, action) {
  switch(action.type) {
    case STOCKS_SUCCESS:
      return {
        ...state,
        finalStocksSet: convertFourSetsIntoOne(action.data),
        isFetching: false
      }
    case STOCKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case STOCKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case SET_FILTER:
      return {
        ...state,
        currentFilter: action.data,
        isFetching: false
      }
    default:
      return state
  }
}
