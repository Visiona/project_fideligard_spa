import React, { Component } from 'react'
import Trade from '../components/Trade'
import { connect } from 'react-redux'
import { convertDateToCount } from '../helpers'
import { updateForm, updateSymbol, updateFormStatus} from '../actions/trade'
import { getStocksData } from '../actions/stocks'
import { setCurrentDate } from '../actions/dates'
import { createTransaction } from '../actions/transactions'
import { updateBalance } from '../actions/portfolio'
import serialize from 'form-serialize'
const dateFormat = require('dateformat');


function getStockPrice(stocks, symbol) {
  if (!stocks[symbol]) {
    return 'error'
  }
  return stocks[symbol]['today']
}


class TradeContainer extends Component {

  componentDidMount() {
    let symbol = this.props.location.pathname.split('/')[2]
    this.props.history.push(`/trade/${symbol}`)
  }

  render() {
    const {symbol, chosenDateCount, price, accBalance, quantity, onSubmit, onChange, myStocks, onChangeDate, onChangeSymbol, formState, orderType, isFormCompleted, updateFormStatus} = this.props

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
          isFormCompleted={isFormCompleted}
          orderType={orderType}
          updateFormStatus={updateFormStatus}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let ticker = ownProps.match.params.ticker
  return {
    chosenDateCount: state.dates.chosenDayNumber,
    symbol: ticker,
    price: getStockPrice(state.stocks.finalStocksSet, ticker),
    quantity: state.trade.quantity || 0,
    accBalance: state.portfolio.accBalance,
    isFormCompleted: state.trade.isFormCompleted,
    orderType: state.trade.orderType

  }
}

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
      props.history.push(`/trade/${e.target.value}`)
      dispatch(updateSymbol(e.target.value))
    },
    onSubmit: (e) => {
      debugger

      const form = e.target
      const data = serialize(form, {hash: true})
      if (!isNaN(data.price*data.quantity)) {
        debugger
        dispatch(updateFormStatus(true))
        dispatch(createTransaction(data))
        dispatch(updateBalance(data.price*data.quantity))
        dispatch(updateForm({
          chosenDate: '',
          symbol: '',
          price: '',
          quantity: 0,
          symbols: []
        }))
        props.history.push(`/transactions/success`)
      } else {
        props.history.push(`/trade/${data.symbol}`)
      }
    },
    updateFormStatus: (e) => {
      dispatch(updateFormStatus(true))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)
