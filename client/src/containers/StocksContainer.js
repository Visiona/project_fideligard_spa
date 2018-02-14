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

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     stocks: getStocksData()
  //   }
  //   debugger
  // }


  render() {
    // const {stocks} = this.props
    return (
      <div>

        <Stocks {...this.props}
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
