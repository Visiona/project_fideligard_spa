import { getHistoricDates } from '../helpers'
export const STOCKS_REQUEST = 'STOCKS_REQUEST'
export const STOCKS_SUCCESS = 'STOCKS_SUCCESS'
export const STOCKS_FAILURE = 'STOCKS_FAILURE'
export const SET_FILTER = 'SET_FILTER'
export const SET_SORT = 'SET_SORT'

export function setCurrentStocks() {

}

export function stocksRequest() {
  return {
    type: STOCKS_REQUEST
  }
}

export function stocksSuccess(data) {
  return {
    type: STOCKS_SUCCESS,
    data: data
  }

}

export function stocksFailure(error) {
  return {
    type: STOCKS_FAILURE,
    data: error
  }
}

export function setFilter(data) {
  return {
    type: SET_FILTER,
    data: data
  }
}

export function setSort(data) {
  return {
    type: SET_SORT,
    data: data
  }
}


export function getStocksData(currentDate = '1999-11-10') {
  let promises = [];
  const apiURL = 'http://localhost:3001/api/fideligard'
  // const apiURL = 'api/fideligard';
  let historicDates = getHistoricDates(currentDate);
  debugger
  return (dispatch) => {
    dispatch(stocksRequest())
    // or i< historicDates.length
    for(let i=0; i< 50; i++) {
      let dateParam = '?date=' + historicDates[i]
      debugger
      promises.push(
        fetch(apiURL + dateParam)
        .then(response => {
          return response.json();
        })
      );
    }
    Promise.all(promises)
    .then(jsonArray => {
      return jsonArray;
    })
    .then(jsonArray => {
      let finalArray = jsonArray.map( (stocksSet) => {
        return stocksSet.datatable.data
      })
      dispatch(stocksSuccess(finalArray))
    })
    .catch((error) => {
      dispatch(stocksFailure(error))
    })
  }
}
