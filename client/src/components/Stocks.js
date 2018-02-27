import React from 'react'
import { priceDiff } from '../helpers'
import {Link} from 'react-router-dom'
import Input from './elements/Input'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


const SortSign = ({sortType}) => {
  const classNames = `fi-arrow-${sortType} size-18`

  return (
    <i className={classNames} data-sort-type={sortType}></i>
  )
}

const LinkTrade = ({children, pathname, price, symbol, date}) => {
  debugger
  return (
  <Link to={`/trade/${symbol}`}>
    {children}
  </Link>
  )
}

const Stocks = ({stocks, chosenDate, symbols, isFetching, onChange, onClick, sortType}) => {
  if (!stocks) {
    return null
  }
  debugger
  // let symbols = Object.keys(stocks)
  const stockRow = symbols.map((sym) => (
    <tr key={sym}>
      <td>{sym}</td>
      <td>${stocks[sym]['today']}</td>
      <td>${priceDiff(stocks[sym]['today'], stocks[sym]['1d'])}</td>
      <td>${priceDiff(stocks[sym]['today'], stocks[sym]['7d'])}</td>
      <td>${priceDiff(stocks[sym]['today'], stocks[sym]['30d'])}</td>
      <td><LinkTrade children='trade' pathname='/trade' price={stocks[sym]['today']} symbol={sym} date={chosenDate} /></td>
    </tr>
  ))

      // <td><LinkTrade children='trade' pathname='/trade' price={stocks[sym]['today']} symbol={sym} date={chosenDate} /></td>

  if (isFetching) {
    return <h4>Loading Stocks Data ... </h4>
  } else {
    return (
      <div className='stock-box'>
        <div className="callout clearfix">
          <h4 className='float-left'>Stocks on {chosenDate}</h4>
          <div className='float-right'>
            Filter: <Input onChange={onChange}  />
          </div>
        </div>
        <table className="hover" >
          <thead>
            <tr>
              <th width="150">
                Symbol <a onClick={onClick} ><SortSign sortType={sortType} /></a>
              </th>
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
