import React from 'react'

const Stocks = ({props}) => (
    <div className='stock-box'>
      <h4>Stocks------------------<b>FILTER</b></h4>
      {this.props}
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
    </div>

)

export default Stocks
