export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO'
export const UPDATE_BALANCE = 'UPDATE_BALANCE'



export function updatePortfolio(data) {
  return {
    type: UPDATE_PORTFOLIO,
    data: data
  }
}

export function updateBalance(data) {
  return {
    type: UPDATE_BALANCE,
    data: data
  }
}
