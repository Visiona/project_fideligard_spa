export const UPDATE_SYMBOL = 'UPDATE_SYMBOL'
export const UPDATE_FORM = 'UPDATE_FORM'
export const UPDATE_FORM_STATUS = 'UPDATE_FORM_STATUS'
export const UPDATE_BUYSELL = 'UPDATE_BUYSELL'


export function updateSymbol(data) {
  return {
    type: UPDATE_SYMBOL,
    data: data
  }
}

export function updateForm(data) {
  return {
    type: UPDATE_FORM,
    data: data
  }
}

export function updateFormStatus(data) {
  return {
    type: UPDATE_FORM_STATUS,
    data: data
  }
}

export function updateBuySell(data) {
  return {
    type: UPDATE_BUYSELL,
    data: data
  }
}
