const moment = require('moment-business-days');
const dateFormat = require('dateformat');

export function getCurrentDate(date = new Date()) {
  let tradingDate = getTradingDay(date)
  return dateFormat(tradingDate, "yyyy/mm/dd");
}

export function convertCountToDate(count, startDate = new Date('01/06/2012')) {
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  let utc2 = Math.floor(utc1 + count*_MS_PER_DAY)
  utc2 = new Date(utc2)
  let tradingDate = getTradingDay(utc2)
  return dateFormat(tradingDate, "yyyy/mm/dd");
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

function getTradingDay(date) {
  let isItToday = !dateDiffInDays(date, new Date())
  if ( !moment(date).isBusinessDay() || isItToday ) {
    return  moment(date).prevBusinessDay()._d
  }
  return date
}

export function getStockSymbols(stocksData) {
  return Object.keys(stocksData)
}

export function getHistoricDates(chosenDate) {
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let oneDay = moment(chosenDate).businessSubtract(1)._d
  let sevenDay = moment(chosenDate).businessSubtract(7)._d
  let thirtyDay = moment(chosenDate).businessSubtract(30)._d
  return [chosenDate, dateFormat(oneDay, "yyyy/mm/dd"), dateFormat(sevenDay, "yyyy/mm/dd"), dateFormat(thirtyDay, "yyyy/mm/dd")]
}

// [today, 1d,7d,30d]
export function convertFourSetsIntoOne(stocksSets) {
  let symbols = getStockSymbols(stocksSets[0])
  let finalSet = {};
  for(let i = 0; i < symbols.length; i++) {
    finalSet[ symbols[i] ] = {
      'today': stocksSets[0][ symbols[i] ] || '-',
      '1d': stocksSets[1][ symbols[i] ] || '-',
      '7d': stocksSets[2][ symbols[i] ] || '-',
      '30d': stocksSets[3][ symbols[i] ] || '-'
    }
  }
  return finalSet
}

export function priceDiff(a, b) {
  return parseInt(b) - parseInt(a)
}
