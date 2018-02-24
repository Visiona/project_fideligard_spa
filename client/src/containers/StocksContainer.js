import React, { Component } from 'react'
import Stocks from '../components/Stocks'
import { getStocksData } from '../actions/stocks'
import { connect } from 'react-redux'
import { convertCountToDate,
          getHistoricDates,
          convertFourSetsIntoOne } from '../helpers'

class StocksContainer extends Component {

  componentDidMount() {
    // debugger
    this.props.getStocksData(this.props.chosenDate)
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (this.props.chosenDate !== nextProps.chosenDate) {
      this.props.getStocksData(nextProps.chosenDate)
    }
  }



  render() {
    const {finalStocksSet, chosenDate} = this.props
    debugger
    return (
      <div>

        <Stocks
          stocks={finalStocksSet}
          chosenDate={chosenDate}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    chosenDate: convertCountToDate(state.dates.chosenDayNumber),
    finalStocksSet: state.finalStocksSet,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStocksData: (data) => {
      debugger
      dispatch(getStocksData(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksContainer)
