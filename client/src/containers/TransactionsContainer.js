import React, { Component } from 'react'
import Transactions from '../components/Transactions'
import { connect } from 'react-redux'
import { setSortByDate, setSortBySymbol, setFilter} from '../actions/transactions'


function filterTransactions(stocks, currentFilter, sortType) {
  // let symbols = Object.keys(stocks)
  // if (!currentFilter) {
  //   return sortStocks(symbols, sortType)
  // }
  //
  // let patt = new RegExp('^' + currentFilter.toUpperCase())
  // let filteredSymbols = symbols.filter((name) => patt.test(name))
  // return sortStocks(filteredSymbols, sortType)
}

function sortByDate(symbols, sortType) {
  // if (sortType === 'right') {
  //   return symbols
  // } else if (sortType === 'up') {
  //   return symbols.sort()
  // } else if (sortType === 'down') {
  //   return symbols.reverse()
  // }
}

function sortBySymbol(symbols, sortType) {
  // if (sortType === 'right') {
  //   return symbols
  // } else if (sortType === 'up') {
  //   return symbols.sort()
  // } else if (sortType === 'down') {
  //   return symbols.reverse()
  // }
}



class TransactionsContainer extends Component {


  render() {
    const {transactions, onDateSort, onSymbolSort, onFilter, sortSymbolType, sortDateType} = this.props

    return (
      <div>
        <Transactions
          transactions={transactions}
          onDateSort={onDateSort}
          onSymbolSort={onSymbolSort}
          onFilter={onFilter}
          sortSymbolType={sortSymbolType}
          sortDateType={sortDateType}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {

  return {
  transactions: state.transactions.all,
  sortSymbolType: state.transactions.sortSymbolType,
  sortDateType: state.transactions.sortDateType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateSort: (e) => {
      // dispatch(setSortByDate({[e.target.name]: e.target.value}))
    },
    onSymbolSort: (e) => {
      // dispatch(SetSortBySymbol({[e.target.name]: e.target.value}))
    },
    onFilter: (e) => {
      // dispatch(setFilter({[e.target.name]: e.target.value}))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsContainer)
