import React from 'react'
import { getStockSymbols,
        priceDiff } from '../helpers'

const Stocks = ({stocks, chosenDate, isFetching}) => {
  debugger
  if (!stocks) {
    return null
  }


  // debugger
  let symbols = Object.keys(stocks)
  const stockRow = symbols.map((sym) => (
    <tr key={sym}>
      <td>{sym}</td>
      <td>${stocks[sym]['today']}</td>
      <td>${priceDiff(stocks[sym]['today'], stocks[sym]['1d'])}</td>
      <td>${priceDiff(stocks[sym]['today'], stocks[sym]['7d'])}</td>
      <td>${priceDiff(stocks[sym]['today'], stocks[sym]['30d'])}</td>
      <td>trade</td>
    </tr>
  ))

  if (isFetching) {
    return <h4>Loading Stocks Data ... </h4>
  } else {
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
}

export default Stocks
