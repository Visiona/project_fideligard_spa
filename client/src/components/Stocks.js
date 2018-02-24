import React from 'react'
import { getStockSymbols,
        priceDiff } from '../helpers'

const Stocks = ({stocks, chosenDate}) => {
  debugger
  if (stocks) {
    return 'asdasd'
  }

  if (!!Object.keys(stocks)) {
    return null
  }
  let symbols = getStockSymbols(stocks)
  const stockRow = symbols.map((sym) => (
    <tr key={sym}>
      <td>{sym}</td>
      <td>{stocks[sym]['today']}</td>
      <td>{priceDiff(stocks[sym]['today'], stocks[sym]['today'])}</td>
      <td>{priceDiff(stocks[sym]['today'], stocks[sym]['1d'])}</td>
      <td>-{priceDiff(stocks[sym]['today'], stocks[sym]['30d'])}</td>
      <td>trade</td>
    </tr>
  ))


  return (
    <div className='stock-box'>
      <h4>Stocks on {chosenDate} ------<b>FILTER</b></h4>
      <table className="hover" >
        <thead>
          <tr>
            <th width="150">Symbol</th>
            <th>Price</th>
            <th width="50">1d</th>
            <th width="50">7d</th>
            <th width="50">30d</th>
            <th>Trade?</th>
          </tr>
        </thead>
        <tbody>
          {stockRow}
        </tbody>
      </table>
    </div>
  )
}

export default Stocks
