import React from 'react'
import { BrowserRouter as Router,
        Route } from 'react-router-dom'

const Trade = ({symbol, chosenDate, price, accBalance, quantity, cost, orderStatus}) => {


  return (
  <div className='trade-box'>
    <h4>Trade</h4>


    <div className="row">
      <div className="columns small-6">

        <form>
          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="symbol" className="text-right middle">Symbol</label>
            </div>
            <div className="small-9 cell">
              <input type="text" name="symbol" value={symbol} />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="buysell" className="text-right middle">Buy/Sell</label>
            </div>
            <div className="small-9 cell">
            <select name="buysell">
              <option value="buy">BUY</option>
              <option value="sell">SELL</option>
              </select>
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="quantity" className="text-right middle">Quantity</label>
            </div>
            <div className="small-9 cell">
              <input type="text" name="quantity" />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="chosenDate" className="text-right middle">Date</label>
            </div>
            <div className="small-9 cell">
              <input type="date" name="chosenDate" value={chosenDate} />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="price" className="text-right middle">Price</label>
            </div>
            <div className="small-9 cell">
              <h5 data-name='price'>{price}</h5>
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="cost" className="text-right middle">Cost</label>
            </div>
            <div className="small-9 cell">
              <h5 data-name='cost'>{cost}</h5>
            </div>
          </div>

          <div className="input-group-button">
            <input type="submit" className="button" value="Place Order"/>
          </div>
        </form>


      </div>
      <div className="columns small-6">

        <h6>Cash Available</h6>
        <p>${accBalance}</p>
        <h6>Order Status</h6>
        <p>{orderStatus}</p>

      </div>
    </div>


    <div className='columns small-6'>


    </div>
  </div>
  )
}


export default Trade
