import React, { Component } from 'react'
import Transactions from '../components/Transactions'
import { connect } from 'react-redux'
import { setSortByDate, setSortBySymbol, setFilterTransactions} from '../actions/transactions'


function filterTransactions(transactions, currentFilterTran, sortSymbolType, sortDateType) {
  if (!currentFilterTran) {
    return sortByDate(sortBySymbol(transactions, sortSymbolType), sortDateType)
  }
  debugger
  // let symbols = Object.keys(stocks)
  let patt = new RegExp('^' + currentFilterTran.toUpperCase())
  let filteredSymbols = transactions.filter((order) => patt.test(order.symbol))
  // return sortStocks(filteredSymbols, sortType)
  return sortByDate(sortBySymbol(filteredSymbols, sortSymbolType), sortDateType)
}

function compareDates(a,b) {
  if (a.chosenDate < b.chosenDate) return -1;
  if (a.chosenDate > b.chosenDate) return 1;
  // return 0;
}

function compareSymbols(a,b) {
  if (a.symbol < b.symbol) return -1;
  if (a.symbol > b.symbol) return 1;
  // return 0;
}

function sortByDate(transactions, sortDateType) {
  debugger
  if (sortDateType === 'up') {
    return transactions.sort(compareDates)
  } else if (sortDateType === 'down') {
    return transactions.reverse(compareDates)
  }
  return transactions
}

function sortBySymbol(transactions, sortSymbolType) {
  if (sortSymbolType === 'up') {
    return transactions.sort(compareSymbols)
  } else if (sortSymbolType === 'down') {
    return transactions.reverse(compareSymbols)
  }
  return transactions
}



class TransactionsContainer extends Component {


  render() {
    const {transactions, onDateSort, sortDateType, onSymbolSort, sortSymbolType, onFilterTran, currentFilterTran} = this.props

    return (
      <div>
        <Transactions
          transactions={transactions}
          onDateSort={onDateSort}
          sortDateType={sortDateType}
          onSymbolSort={onSymbolSort}
          onFilterTran={onFilterTran}
          sortSymbolType={sortSymbolType}
          currentFilterTran={currentFilterTran}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  debugger
  return {
  transactions: filterTransactions(state.transactions.history, state.transactions.currentFilterTran, state.transactions.sortSymbolType, state.transactions.sortDateType),
  currentFilterTran: state.transactions.currentFilterTran,
  sortSymbolType: state.transactions.sortSymbolType,
  sortDateType: state.transactions.sortDateType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateSort: (e) => {
      e.preventDefault();
      dispatch(setSortByDate(e.target.getAttribute('data-sort-type')))
    },
    onSymbolSort: (e) => {
      e.preventDefault();
      dispatch(setSortBySymbol(e.target.getAttribute('data-sort-type')))
    },
    onFilterTran: (e) => {
      debugger
      dispatch(setFilterTransactions({ currentFilterTran: e.target.value }))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsContainer)
