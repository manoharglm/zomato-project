import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route' 
import TrendingRestaurants from './TrendingRestaurants'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/trending' exact component={TrendingRestaurants} />
        </div>
      </Router>
    );
  }
}

export default App;
