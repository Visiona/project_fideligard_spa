export const STOCKS_REQUEST = 'STOCKS_REQUEST'
export const STOCKS_SUCCESS = 'STOCKS_SUCCESS'
export const STOCKS_FAILURE = 'STOCKS_FAILURE'


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


export function getStocksData() {
  debugger
  return (dispatch) => {
    dispatch(stocksRequest())

    fetch('api/fideligard')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`)
      }
      debugger
      return response.json()
    })
    .then((json) => {
      dispatch(stocksSuccess(json.data))
    })
    .catch((error, json) => {
      dispatch(stocksFailure(error))
    })
  }
}
