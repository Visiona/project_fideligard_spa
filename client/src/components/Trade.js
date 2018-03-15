import React from 'react'
import { BrowserRouter as Router,
        Route } from 'react-router-dom'
import { Prompt } from 'react-router'
import { convertCountToDate } from '../helpers'
const dateFormat = require('dateformat')


const Trade = ({symbol, chosenDateCount, price, accBalance, quantity, myStocks, onChange, onSubmit, onChangeDate, onChangeSymbol, isFormCompleted, buysell, updateFormStatus, onChangeBuySell}) => {
  let currentDate = convertCountToDate(chosenDateCount)
  const formattedDate = dateFormat(currentDate, "yyyy-mm-dd")
  let cost = price*quantity || 0
  const isCapitalTooLow = cost > accBalance

  function haveEnoughStocks (symbol, quantity, myStocks) {
    let isEnough = false
    for(let i = 0; i < myStocks.length; i++ ) {
      debugger
      if (myStocks[i]['symbol'] === symbol ) {
        isEnough = myStocks[i]['quantity'] >= quantity
      }
    }
    return isEnough
  }

  accBalance = buysell === 'BUY' ? accBalance - cost : accBalance + cost
  debugger
  let orderStatus = (quantity > 0 && !isCapitalTooLow && buysell === 'BUY') || (quantity > 0 &&  haveEnoughStocks(symbol, quantity, myStocks) && buysell === 'SELL')

   function validateSubmission(e) {
      // e.preventDefault()
      if (isNaN(price)) {
        return alert("There is no such a ticker. Try again!")
      }
      if (isCapitalTooLow && buysell === 'BUY') {
        return alert('You don\'t have enough money to buy these shares.')
      }
      if (!haveEnoughStocks(symbol, quantity, myStocks) && buysell === 'SELL') {
        return alert('You don\'t have enough stocks to do this operation.')
      }
      if (quantity > 0) {
        debugger
        onSubmit(e)
      }
    }


  return (
  <div className='trade-box'>

    <h4>Trade</h4>


    <div className="row">
      <div className="columns small-6">

        <form onSubmit={validateSubmission}>
          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="symbol" className="text-right middle">Symbol</label>
            </div>
            <div className="small-9 cell">
              <input type="text" name="symbol" value={symbol} onChange={onChangeSymbol} />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="buysell" className="text-right middle">Buy/Sell</label>
            </div>
            <div className="small-9 cell">
            <select name="buysell" onChange={onChangeBuySell} >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
              </select>
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="quantity" className="text-right middle">Quantity</label>
            </div>
            <div className="small-9 cell">
              <input type="text" name="quantity" autocomplete="off" onChange={onChange} />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="chosenDate" className="text-right middle">Date</label>
            </div>
            <div className="small-9 cell">
              <input type="date" name="chosenDate" value={formattedDate} onChange={onChangeDate}  />
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="price" className="text-right middle">Price</label>
            </div>
            <div className="small-9 cell">
              <h5 data-name='price'>{price}</h5>
              <input type="price" name="price" value={price} hidden/>
            </div>
          </div>

          <div className="grid-x grid-padding-x">
            <div className="small-3 cell">
              <label htmlFor="cost" className="text-right middle">Cost</label>
            </div>
            <div className="small-9 cell">
              <h5 data-name='cost' onChange={onChange}>{cost.toFixed(2)}</h5>
            </div>
          </div>

          <div className="input-group-button">
            <input type="submit" className="button" value="Place Order" onClick={updateFormStatus}
            />
          </div>
        </form>


      </div>
      <div className="columns small-6">

        <h6>Cash Available</h6>
        debugger
        <p>${accBalance.toFixed(2)}</p>
        <h6>Order Status</h6>
        <p>{orderStatus ? 'VALID' : 'INVALID'}</p>

      </div>
      <Prompt
        when={!isFormCompleted }
        message={location => ( (location.pathname.startsWith('/trade')) ? true : "You are in the middle of trading process, are you sure you want to quit?")}
      />

    </div>
  </div>
  )
}


export default Trade
