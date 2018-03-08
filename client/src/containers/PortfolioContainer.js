import React, { Component } from 'react'
import Portfolio from '../components/Portfolio'
import { connect } from 'react-redux'
import { updatePortfolio } from '../actions/portfolio'
import { convertCountToDate } from '../helpers'


class PortfolioContainer extends Component {

  render() {
    const {stocks, chosenDate, availableCash, portfolioStocks, onClick, onSymbolSort, sortSymbolType} = this.props

    return (
      <div>
        <Portfolio
          portfolioStocks={portfolioStocks}
          onClick={onClick}
          onSymbolSort={onSymbolSort}
          sortSymbolType={sortSymbolType}
          availableCash={availableCash}
          stocks={stocks}
          chosenDate={chosenDate}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {

  return {
    portfolioStocks: state.portfolio.orders,
    availableCash: state.portfolio.accBalance,
    chosenDate: convertCountToDate(state.dates.chosenDayNumber),
    stocks: state.stocks.finalStocksSet
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (e) => {
      // dispatch(updatePortfolio({[e.target.name]: e.target.value}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioContainer)
