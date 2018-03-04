import React, { Component } from 'react'
import Trade from '../components/Trade'
import { connect } from 'react-redux'
import { convertDateToCount } from '../helpers'
import { updateForm, updateSymbol } from '../actions/trade'
import { getStocksData } from '../actions/stocks'
import { setCurrentDate } from '../actions/dates'
import serialize from 'form-serialize'
const dateFormat = require('dateformat');


function getStockPrice(stocks, symbol) {
  if (!stocks[symbol]) {
    return 'error'
  }
  return stocks[symbol]['today']
}

// function prevSymbolIfNonExist(stocks, props, symbol) {
//   debugger
//   if (!stocks[symbol]) {
//     return props.location.pathname.split('/')[2] || props
//   }
//   return symbol
// }


class TradeContainer extends Component {

  componentDidMount() {
    let symbol = this.props.location.pathname.split('/')[2]
    this.props.history.push(`/trade/${symbol}`)
  }

  render() {
    const {symbol, chosenDateCount, price, accBalance, quantity, onSubmit, onChange, myStocks, onChangeDate, onChangeSymbol, formState, orderType} = this.props

    return (
      <div>
        <Trade
          chosenDateCount={chosenDateCount}
          symbol={symbol}
          quantity={quantity}
          accBalance={accBalance}
          price={price}
          myStocks={myStocks}
          onChange={onChange}
          onChangeDate={onChangeDate}
          onChangeSymbol={onChangeSymbol}
          onSubmit={onSubmit}
          formIsHalfFilled={formState}
          orderType={orderType}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  debugger
  let ticker = ownProps.match.params.ticker
  return {
    chosenDateCount: state.dates.chosenDayNumber,
    // symbol: prevSymbolIfNonExist(state.stocks.finalStocksSet, ownProps, ticker),
    symbol: ticker,
    price: getStockPrice(state.stocks.finalStocksSet, ticker),
    quantity: state.trade.quantity || 0,
    accBalance: 10000, //state.portfolio.balance
    formState: state.trade.formState,
    orderType: state.trade.orderType

  }
}
// quantity: e.target.quantity,
// buysell: e.target.buysell,
// symbol: state.symbol,
// price: state.price

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChange: (e) => {
      dispatch(updateForm({[e.target.name]: e.target.value}))
    },
    onChangeDate: (e) => {
      let dateCount = convertDateToCount(e.target.value)
      dispatch(setCurrentDate(dateCount))
    },
    onChangeSymbol: (e) => {
      debugger
      props.history.push(`/trade/${e.target.value}`)
      dispatch(updateSymbol(e.target.value))
    },
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, {hash: true})
      // dispatch(updatePortfolio(data))
      form.reset()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)
