import React from 'react'
import SortSign from './elements/SortSign'
import LinkTrade from './elements/LinkTrade'

const Portfolio = ({availableCash, portfolioStocks, onClick, onSymbolSort, sortSymbolType}) => {


  const currentFinances = (
    <tr>
      <td>AAPL</td>
      <td>123.45$</td>
      <td>+1.45$</td>
      <td>-2.12$</td>
      <td>-23.34$</td>
      <td>trade</td>
    </tr>
  )

  // <td><LinkTrade children='trade' pathname='/trade' price={stocks[sym]['today']} symbol={sym} date={chosenDate} /></td>
  const currentPortfolio = (
    <tr>
      <td>APPL</td>
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
  )

  return (
          <div className='stock-box'>
            <div className="callout clearfix">
              <h4 className='float-left'>Portfolio</h4>
              <div className='float-right'>
                Available Cash: ${availableCash}
              </div>
            </div>
            <table className="balance" >
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


            <table className="hover breakdown" >
              <thead>
                <tr>
                  <th>Symbol<a onClick={onSymbolSort} ><SortSign sortType={sortSymbolType} /></a></th>
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
                { currentPortfolio }
              </tbody>
            </table>
          </div>
  )

}


export default Portfolio
