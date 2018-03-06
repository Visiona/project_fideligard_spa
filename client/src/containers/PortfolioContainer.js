import React, { Component } from 'react'
import Portfolio from '../components/Portfolio'
import { connect } from 'react-redux'
import { updatePortfolio } from '../actions/portfolio'



let reconciledTransactions = (transactions) => {
  
}

class PortfolioContainer extends Component {


  render() {
    const {availableCash, portfolioStocks, onClick, onSymbolSort, sortSymbolType} = this.props

    return (
      <div>
        <Portfolio
          portfolioStocks={portfolioStocks}
          onClick={onClick}
          onSymbolSort={onSymbolSort}
          sortSymbolType={sortSymbolType}
          availableCash={availableCash}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {

  return {
    portfolioStocks: state.portfolio.orders,
    availableCash: state.portfolio.accBalance
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
