import React from 'react'

const Portfolio = () => (
  <div className='stock-box'>
    <h4>Portfolio</h4>
    <table className="balance" >
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
        <tr>
          <td>AAPL</td>
          <td>123.45$</td>
          <td>+1.45$</td>
          <td>-2.12$</td>
          <td>-23.34$</td>
          <td>trade</td>
        </tr>
      </tbody>
    </table>


    <table className="hover breakdown" >
      <thead>
        <tr>
          <th width="150">Symbol</th>
          <th>Quantity</th>
          <th width="50">Cost Basis</th>
          <th width="50">Current Value</th>
          <th width="50">Profit/Loss</th>
          <th>Current Price</th>
          <th width="50">1d</th>
          <th width="50">7d</th>
          <th width="50">30d</th>
          <th>Trade?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CASH</td>
          <td>123,456$</td>
          <td>123,456$</td>
          <td>123,456$</td>
          <td>0.0$</td>
          <td>0.0$</td>
          <td>0.0$</td>
          <td>0.0$</td>
          <td>0.0$</td>
          <td>trade</td>
        </tr>
      </tbody>
    </table>
  </div>
)


export default Portfolio
