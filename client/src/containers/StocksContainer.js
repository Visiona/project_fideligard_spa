import React, { Component } from 'react'
import Stocks from '../components/Stocks'
import { getStocksData, setFilter, setSort } from '../actions/stocks'
import { connect } from 'react-redux'
import { convertCountToDate,
          getHistoricDates,
          convertFourSetsIntoOne } from '../helpers'

class StocksContainer extends Component {

  componentDidMount() {
    this.props.getStocksData(this.props.chosenDate)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.chosenDate !== nextProps.chosenDate) {
      this.props.getStocksData(nextProps.chosenDate)
    }
  }


  render() {
    const {stocks, symbols, chosenDate, isFetching, onChange, onClick, sortType} = this.props
    return (
      <div>
        <Stocks
          stocks={stocks}
          chosenDate={chosenDate}
          isFetching={isFetching}
          symbols={symbols}
          onChange={onChange}
          onClick={onClick}
          sortType={sortType}
        />
      </div>
    )
  }
}

function filterStocks(stocks, currentFilter, sortType) {
  let symbols = Object.keys(stocks)
  if (!currentFilter) {
    return sortStocks(symbols, sortType)
  }

  let patt = new RegExp('^' + currentFilter.toUpperCase())
  let filteredSymbols = symbols.filter((name) => patt.test(name))
  return sortStocks(filteredSymbols, sortType)
}

function sortStocks(symbols, sortType) {
  // debugger
  if (sortType === 'right') {
    return symbols
  } else if (sortType === 'up') {
    return symbols.sort()
  } else if (sortType === 'down') {
    return symbols.reverse()
  }
}


const mapStateToProps = (state) => {
  return {
    chosenDate: convertCountToDate(state.dates.chosenDayNumber),
    stocks: state.stocks.finalStocksSet,
    isFetching: state.stocks.isFetching,
    currentFilter: state.stocks.currentFilter,
    symbols: filterStocks(state.stocks.finalStocksSet, state.stocks.currentFilter, state.stocks.sortType),
    sortType: state.stocks.sortType
  }
}

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    getStocksData: (data) => {
      dispatch(getStocksData(data))
    },
    onChange: (e) => {
      dispatch(setFilter(e.target.value))
    },
    onClick: (e) => {
      e.preventDefault();
      debugger
      dispatch(setSort(e.target.getAttribute('data-sort-type')))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksContainer)
