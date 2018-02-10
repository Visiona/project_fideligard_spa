import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navlink,
  Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Stocks from './Stocks'
import DateWidget from './DateWidget'
import Trade from './Trade'
import Portfolio from './Portfolio'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='components-container'>
          <Navbar />
          <DateWidget />
          <div className='row'>
          <div class="columns small-6">
            <Stocks />
          6 columns</div>
          <div class="columns small-6">
          <Switch>
            <Route path='/trade' component={Trade} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
          6 columns</div>


          </div>
        </div>
      </Router>

    );
  }
}

export default App;
