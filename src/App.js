import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import TrendingRestaurants from './TrendingRestaurants'
import RestaurantsSearch from './RestaurantsSearch'
import NavigationBar from "./NavigationBar";
import RequestsAPI from "./RequestsAPI";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
    };
  }
  getSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  getSearchResults = (e) => {
    e.preventDefault()
    RequestsAPI.getSearchResults(this.state.searchText).then(restaurants => {
      this.setState({
        searchResults: restaurants
      });
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar
            getSearchText={this.getSearchText}
            getSearchResults={this.getSearchResults}
          />
          <Switch>
            <Route path='/trending' exact component={TrendingRestaurants} />
            <Route path='/search' render = {() => 
                (this.state.searchText !== '')
                  ? <RestaurantsSearch
                    searchResults={this.state.searchResults}
                  />
                  : null
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
