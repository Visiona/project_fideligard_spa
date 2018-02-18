import React, { Component } from 'react'
import Stocks from '../components/Stocks'
import { getStocksData } from '../actions/stocks'
import { connect } from 'react-redux'

class StocksContainer extends Component {

  componentDidMount() {
    debugger
    this.props.getStocksData()
    console.log(this.props)
  }

  componentWillMount() {
    this.props.getStocksData()
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

        <Stocks stocks={stocks}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStocksData: () => {
      dispatch(getStocksData())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksContainer)
