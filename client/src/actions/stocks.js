import { getHistoricDates } from '../helpers'
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


// export function getStocksData(currentDate = '1999-11-10') {
//   // debugger
//   let dateParam = '?date=' + currentDate
//   return (dispatch) => {
//     dispatch(stocksRequest())
//     fetch('api/fideligard' + dateParam)
//     .then((response) => {
//       debugger
//       if (!response.ok) {
//         throw new Error(`${response.status} - ${response.statusText}`)
//       }
//       return response.json()
//     })
//     .then((json) => {
//       debugger
//       dispatch(stocksSuccess(json.datatable.data))
//     })
//     .catch((error) => {
//       dispatch(stocksFailure(error))
//     })
//   }
// }

export function getStocksData(currentDate = '1999-11-10') {
  let promises = [];
  const apiURL = 'api/fideligard';
  let historicDates = getHistoricDates(currentDate);
  debugger
  return (dispatch) => {
    dispatch(stocksRequest())
    for(let i=0; i< historicDates.length; i++) {
      let dateParam = '?date=' + historicDates[i]
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
