export const CREATE_TRANSACTION = 'CREATE_TRANSACTION'
export const SET_FILTER = 'SET_FILTER'
export const SET_SORT_DATE = 'SET_SORT_DATE'
export const SET_SORT_SYMBOL = 'SET_SORT_SYMBOL'

let ref = 10;

export function createTransaction(data) {
  return {
    type: CREATE_TRANSACTION,
    data: {
      ...data,
      id: ref++
    }
  }
}

export function setFilterTransactions(data) {
  return {
    type: SET_FILTER,
    data: data
  }
}

export function setSortByDate(data) {
  return {
    type: SET_SORT_DATE,
    data: data
  }
}

export function setSortBySymbol(data) {
  return {
    type: SET_SORT_SYMBOL,
    data: data
  }
}
