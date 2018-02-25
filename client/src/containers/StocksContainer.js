import React, { Component } from 'react'
import Stocks from '../components/Stocks'
import { getStocksData, setFilter } from '../actions/stocks'
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
    const {stocks, symbols, chosenDate, isFetching, onChange} = this.props
    return (
      <div>
        <Stocks
          stocks={stocks}
          chosenDate={chosenDate}
          isFetching={isFetching}
          symbols={symbols}
          onChange={onChange}
        />
      </div>
    )
  }
}

function filterStocks(stocks, currentFilter) {
  let symbols = Object.keys(stocks)
  if (!currentFilter) {
    return symbols
  }

  let patt = new RegExp('^' + currentFilter.toUpperCase())
  return symbols.filter((name) => patt.test(name))
}


const mapStateToProps = (state) => {
  return {
    chosenDate: convertCountToDate(state.dates.chosenDayNumber),
    stocks: state.stocks.finalStocksSet,
    isFetching: state.stocks.isFetching,
    currentFilter: state.stocks.currentFilter,
    symbols: filterStocks(state.stocks.finalStocksSet, state.stocks.currentFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    getStocksData: (data) => {
      dispatch(getStocksData(data))
    },
    onChange: (e) => {
      dispatch(setFilter(e.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksContainer)
