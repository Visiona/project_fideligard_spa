export const UPDATE_SYMBOL = 'UPDATE_SYMBOL'
export const UPDATE_FORM = 'UPDATE_FORM'


export function updateSymbol(data) {
  return {
    type: UPDATE_SYMBOL,
    data: data
  }
}

export function updateForm(data) {
  debugger
  return {
    type: UPDATE_FORM,
    data: data
  }
}
