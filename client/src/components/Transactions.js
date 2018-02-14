import React from 'react'

const Transactions = () => (
    <div className='stock-box'>
      <h4>Transactions------------------<b>FILTER</b>&transaction dropdown</h4>

      <table className="hover" >
        <thead>
          <tr>
            <th width="150">Date</th>
            <th>Symbol</th>
            <th width="50">Type</th>
            <th width="50">Quantity</th>
            <th width="50">price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/1/2014</td>
            <td>APPL</td>
            <td>BUY</td>
            <td>1000</td>
            <td>321.32</td>
          </tr>
        </tbody>
      </table>
    </div>

)

export default Transactions
