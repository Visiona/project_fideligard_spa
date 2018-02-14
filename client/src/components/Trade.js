import React from 'react'

const Trade = () => (
  <div className='trade-box'>
    <h4>Trade------------------<b>FILTER</b></h4>
  <div className='columns small-6'>
    <form>
      <table className="" >
        <tbody>
          <tr>
            <td><label>Symbol</label></td>
            <td><input type="text" placeholder="APPL" /></td>
          </tr>
          <tr>
            <td>Buy/Sell</td>
            <td><input type="text" placeholder="dropdown!!!" /></td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td><input type="text" placeholder="1000" /></td>
          </tr>
          <tr>
            <td>Date</td>
            <td><input type="text" placeholder="13/12/2016" /></td>
          </tr>
          <tr>
            <td>Price</td>
            <td>123.23$</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>123.23$</td>
          </tr>
          <tr>
            <td><input type="submit" className="button" value="Place Order" /></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>

    <div className='columns small-6'>
    <h6>Cash Available</h6>
    <p>123123123.44$</p>
    <h6>Order  Status</h6>
    <p>VALID</p>

    </div>
  </div>
)


export default Trade
