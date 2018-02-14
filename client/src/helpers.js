const dateFormat = require('dateformat');

export function getCurrentDate(date = new Date()) {
  return dateFormat(date, "d/ m/ yyyy");
}

export function convertCountToDate(count, startDate = new Date('01/06/2012')) {
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  let utc2 = Math.floor(utc1 + count*_MS_PER_DAY)
  return dateFormat(utc2, "d/ m/ yyyy");
}


export function dateDiffInDays(a, b) {
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  let utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export function daysFromMinToYesterday() {
  let min = new Date("01/06/2012")
  let max = new Date()
  let difference = dateDiffInDays(min, max) - 1
  return difference
}
