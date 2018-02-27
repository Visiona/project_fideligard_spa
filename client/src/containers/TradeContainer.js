import React, { Component } from 'react'
import Trade from '../components/Trade'
import { connect } from 'react-redux'
import { convertCountToDate } from '../helpers'
import { updateForm } from '../actions/tade'
import { BrowserRouter as Router,
        Route } from 'react-router-dom'


class TradeContainer extends Component {

  // componentDidMount() {
  //   this.props.getStocksData(this.props.chosenDate)
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.chosenDate !== nextProps.chosenDate) {
  //     this.props.getStocksData(nextProps.chosenDate)
  //   }
  // }


  render() {
    const {symbol, chosenDate, price, accBalance, quantity, cost, orderStatus, onSubmit, onChange} = this.props
    return (
      <div>
        <Trade
          chosenDate={chosenDate}
          symbol={symbol}
          quantity={quantity}
          accBalance={accBalance}
          cost={cost}
          orderStatus={orderStatus}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    chosenDate: convertCountToDate(state.dates.chosenDayNumber),
    symbol: match.params.ticker,
    price: state.stocks[match.params.ticker]['today'],
    // accBalance: state.portfolio.balance,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(updateForm(e.target.value))
    },
    onSubmit: (e) => {
      e.preventDefault();
      // dispatch(updatePortfolio())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)
