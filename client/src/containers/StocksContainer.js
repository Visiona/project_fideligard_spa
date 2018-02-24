import React, { Component } from 'react'
import Stocks from '../components/Stocks'
import { getStocksData } from '../actions/stocks'
import { connect } from 'react-redux'
import { convertCountToDate } from '../helpers'

class StocksContainer extends Component {

  componentDidMount() {
    this.props.getStocksData()
  }




  componentWillMount() {
    debugger
    console.log(this.props.date)
    this.props.getStocksData(this.props.currentDate)
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     stocks: getStocksData()
  //   }
  //   debugger
  // }


  render() {
    const {stocks} = this.props
    debugger
    return (
      <div>

        <Stocks stocks={stocks.stocks}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    stocks: state.stocks,
    choosenDayNumber: state.choosenDayNumber,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getStocksData: () => {
      dispatch(getStocksData(ownProps.currentDate))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksContainer)
