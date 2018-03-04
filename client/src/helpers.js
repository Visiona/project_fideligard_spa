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

export function convertDateToCount(myDate, startDate = new Date('01/06/2012')) {
  let currentDate = new Date(myDate)
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  let utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  return Math.floor( (utc2- utc1)/_MS_PER_DAY )
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
  let symbols = []
  for(let i = 0; i < stocksData.length; i++) {
    symbols.push(stocksData[i][0])
  }
  return symbols
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
      'today': getStockPriceFromSets(stocksSets[0], symbols[i]) || '-',
      '1d': getStockPriceFromSets(stocksSets[1], symbols[i]) || '-',
      '7d': getStockPriceFromSets(stocksSets[2], symbols[i]) || '-',
      '30d': getStockPriceFromSets(stocksSets[3], symbols[i]) || '-'
    }
  }
  return finalSet
}

function getStockPriceFromSets(array, sym) {
  for(let i = 0; i < array.length; i++) {
    if (array[i][0] === sym) {
      return array[i][5].toFixed(2)
    }
  }
}


export function priceDiff(a, b) {
  let diff = parseFloat(b) - parseFloat(a)
  diff > 0 ? diff = `+${diff.toFixed(2)}` : diff = diff.toFixed(2)
  return diff
}
