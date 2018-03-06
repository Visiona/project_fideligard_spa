import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Navlink,
  Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import StocksContainer from '../containers/StocksContainer'
import DateContainer from '../containers/DateContainer'
import TradeContainer from '../containers/TradeContainer'
import PortfolioContainer from '../containers/PortfolioContainer'
import TransactionsContainer from '../containers/TransactionsContainer'

class App extends Component {


  // <Route exact path='/trade/:ticker' component={TradeContainer} />
  // <Route path="/protected-page" render={() => (
  //   this.state.stocks.finalStocksSet[0] ?
  //     <Route exact path='/trade/:ticker' component={TradeContainer} /> :
  //     <Route exact path='/trade/:ticker' component={TradeContainer} />
  // )} />


  render() {
    return (
      <Router>
        <div className='main'>
          <Navbar />
          <DateContainer />
          <div className='wrap row small-up-2 medium-up-2'>
            <div className="column">
              <StocksContainer />
            </div>
            <div className="column ">
              <Switch>
                <Route exact path='/trade/:ticker?' component={TradeContainer} />
                <Route exact path='/portfolio' component={PortfolioContainer} />
                <Route exact path='/transactions' component={TransactionsContainer} />
                <Route exact path='/transactions/success' render={() => <h1>Transaction was successfull</h1>} component={TransactionsContainer} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
