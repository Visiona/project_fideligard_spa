export const CHOSEN_DAY_NUMBER = 'CHOSEN_DAY_NUMBER'

export function setCurrentDate(data) {
  return {
    type: CHOSEN_DAY_NUMBER,
    data: data
  }
}
