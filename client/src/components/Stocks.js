import React from 'react'

const Stocks = ({stocks}) => {

  if (!stocks[0]) {
    return null
  }
  console.log(stocks)
  debugger
  const stockRow = stocks.map((stock) => (
    <tr id={stock.datatable.data[0][0]}>
      <td>{stock.datatable.data[0][0]}</td>
      <td>123.45$</td>
      <td>+1.45$</td>
      <td>-2.12$</td>
      <td>-23.34$</td>
      <td>trade</td>
    </tr>
  ))


  return (
    <div className='stock-box'>
      <h4>Stocks------------------<b>FILTER</b></h4>
      <h4>{stocks}</h4>
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
