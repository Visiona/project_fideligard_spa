import React from 'react'
import Input from './elements/Input'
import SortSign from './elements/SortSign'

const Transactions = ({transactions, onDateSort, onSymbolSort, onFilter, sortDateType, sortSymbolType}) => {
  // let transactionRow = (
  //     <tr>
  //       <td>1/1/2014</td>
  //       <td>APPL</td>
  //       <td>BUY</td>
  //       <td>1000</td>
  //       <td>321.32</td>
  //     </tr>
  //   )
    let transactionRow = transactions.map((t) => (
      <tr key={t.ref}>
        <td>{t.chosenDate}</td>
        <td>{t.symbol}</td>
        <td>{t.buysell}</td>
        <td>{t.quantity}</td>
        <td>${t.price}</td>
      </tr>
    ))


  return (
    <div className='stock-box'>
      <div className="callout clearfix">
        <h4 className='float-left'>Transactions</h4>
        <div className='float-right'>
          Filter: <Input onChange={onFilter}  />
        </div>
      </div>

      <table className="hover">
        <thead>
          <tr>
            <th width="150">Date <a onClick={onDateSort} ><SortSign sortType={sortDateType} /></a></th>
            <th>Symbol<a onClick={onSymbolSort} ><SortSign sortType={sortSymbolType} /></a></th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { transactionRow }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
