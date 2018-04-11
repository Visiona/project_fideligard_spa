import React from 'react'
import SortSign from './elements/SortSign'
import LinkTrade from './elements/LinkTrade'

const Portfolio = ({stocks, chosenDate, availableCash, portfolioStocks, onClick, onSymbolSort, sortSymbolType}) => {

  let portfolioStats = {
    cost: 0,
    currentValue: 0,
    '1d': 0,
    '7d': 0,
    '30d': 0
  }

  function costBasisPortfolio(stocks, portfolioStocks) {
    if (!portfolioStocks[0]) return portfolioStats
    for( let element of portfolioStocks) {
      portfolioStats.cost = parseInt(portfolioStats.cost + element.quantity*element.price).toFixed(2)
      portfolioStats.currentValue = portfolioStats.currentValue + stocks[element.symbol]['today']*element.quantity
      portfolioStats['1d'] = portfolioStats['1d'] + stocks[element.symbol]['1d']*element.quantity
      portfolioStats['7d'] = portfolioStats['7d'] + stocks[element.symbol]['7d']*element.quantity
      portfolioStats['30d'] = portfolioStats['30d'] + stocks[element.symbol]['30d']*element.quantity
    }
    return portfolioStats
  }

  portfolioStats = costBasisPortfolio(stocks, portfolioStocks)


  const currentFinances = (
    <tr>
      <td>$ {portfolioStats.cost}</td>
      <td>$ {portfolioStats.currentValue.toFixed(2)}</td>
      <td>$ {(portfolioStats.currentValue - portfolioStats.cost).toFixed(2)}</td>
      <td>$ {(portfolioStats['1d'] - portfolioStats.cost).toFixed(2)}</td>
      <td>$ {(portfolioStats['7d'] - portfolioStats.cost).toFixed(2)}</td>
      <td>$ {(portfolioStats['30d'] - portfolioStats.cost).toFixed(2)}</td>
    </tr>
  )

  if (portfolioStocks[0]) {
    var currentPortfolio = portfolioStocks.map((p) => (
      <tr key={p.symbol}>
        <td>{p.symbol}</td>
        <td>{p.quantity}</td>
        <td>${(p.quantity*p.price).toFixed(2)}</td>
        <td>${(stocks[p.symbol]['today']*p.quantity).toFixed(2)}</td>
        <td>${((stocks[p.symbol]['today'] - p.price)*p.quantity).toFixed(2)}</td>
        <td>${stocks[p.symbol]['today']}</td>
        <td>${stocks[p.symbol]['1d']}</td>
        <td>${stocks[p.symbol]['7d']}</td>
        <td>${stocks[p.symbol]['30d']}</td>
        <td><LinkTrade children='trade' pathname='/trade' symbol={p.sym} date={chosenDate} /></td>
      </tr>
    ))
  } else {
    var currentPortfolio = null
  }


  return (
      <div className='portfolio'>
        <div className='stock-box-title'>
          <h4 className='quotations'>PORTFOLIO</h4>

          <table className="account">
            <thead>
              <tr>
                <th>Available Cash</th>
                <th>Value of Whole Portfolio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$ {availableCash.toFixed(2)}</td>
                <td>$ {availableCash + portfolioStats.currentValue}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className="balance scroll" >
          <thead>
            <tr>
              <th>Cost Basis</th>
              <th>Current Value</th>
              <th>Profit/Loss</th>
              <th>1d</th>
              <th>7d</th>
              <th>30d</th>
            </tr>
          </thead>
          <tbody>
            { currentFinances }
          </tbody>
        </table>

        <div className='table-scroll'>
          <table className="hover breakdown" >
            <thead>
              <tr>
                <th>Symbol<a onClick={onSymbolSort} ><SortSign sortType={sortSymbolType} /></a></th>
                <th>Quantity</th>
                <th >Cost Basis</th>
                <th>Current Value</th>
                <th>Profit/Loss</th>
                <th>Current Price</th>
                <th>1d</th>
                <th>7d</th>
                <th>30d</th>
                <th>Trade?</th>
              </tr>
            </thead>
            <tbody>
              { currentPortfolio }
            </tbody>
          </table>
        </div>
      </div>
  )

}


export default Portfolio
