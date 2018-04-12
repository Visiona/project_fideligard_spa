import React from 'react'
import Input from './elements/Input'
import SortSign from './elements/SortSign'

const Transactions = ({transactions, onDateSort, onSymbolSort, onFilterTran, sortDateType, sortSymbolType, currentFilterTran}) => {

  debugger
    let transactionRow = transactions.map((t) => (
      <tr key={t.id}>
        <td>{t.chosenDate}</td>
        <td>{t.symbol}</td>
        <td>{t.buysell}</td>
        <td>{t.quantity}</td>
        <td>${t.price}</td>
      </tr>
    ))


  return (
    <div className='transactions'>


      <div className='stock-box-title'>
        <h4 className='transactions'>TRANSACTIONS</h4>
        <div className='filter-stock'>
          FILTER <Input onChange={onFilterTran} data-filter-type="currentFilterTran" />
        </div>
      </div>

        <table className="transactions-hist">
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
