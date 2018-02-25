import React, { Component } from 'react'
import Stocks from '../components/Stocks'
import { getStocksData } from '../actions/stocks'
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
    const {stocks, chosenDate, isFetching} = this.props
    return (
      <div>
        <Stocks
          stocks={stocks}
          chosenDate={chosenDate}
          isFetching={isFetching}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    chosenDate: convertCountToDate(state.dates.chosenDayNumber),
    stocks: state.stocks.finalStocksSet,
    isFetching: state.stocks.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStocksData: (data) => {
      dispatch(getStocksData(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksContainer)
