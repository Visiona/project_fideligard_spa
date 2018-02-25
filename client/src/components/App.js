import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navlink,
  Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import StocksContainer from '../containers/StocksContainer'
import DateContainer from '../containers/DateContainer'
import Trade from './Trade'
import Portfolio from './Portfolio'
import Transactions from './Transactions'

class App extends Component {
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
                <Route exact path='/trade' component={Trade} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/transactions' component={Transactions} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
