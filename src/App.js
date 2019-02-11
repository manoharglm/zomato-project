import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import TrendingRestaurants from './TrendingRestaurants'
import RestaurantsSearch from './RestaurantsSearch'
import NavigationBar from "./NavigationBar"
import RequestsAPI from "./RequestsAPI"
import SideNavigationBar from './SideNavigationBar'
import RestaurantBookings from './RestaurantBookings'
import UserProfile from './UserProfile'
import BookTable from './BookTable'
import RestaurantQucikView from './RestaurantQuickView'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCX0DNvg_Mu3BgfG5tgwljLCdiLsoPZM04',
  authDomain: 'zomato-project-manohar.firebaseapp.com'
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
      gotoSearch: false,
      username: null,
      restaurantData: [],
      restaurantQucikViewData: '',
      signedIn: false,
    };
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        signedIn: !!user,
        username: user.email
      })
      if (!!user) {
        RequestsAPI.createUser(user)
      }
    })
  }
  getSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }
  getSearchResults = (e) => {
    e.preventDefault()
    if ((this.state.searchText).length >= 0) {
      RequestsAPI.getSearchResults(this.state.searchText).then(restaurants => {
        this.setState({
          searchResults: restaurants
        });
      });
    }
  }
  restaurantDataToBookTable = (restaurant) => {
    if (this.state.signedIn) {
      this.setState({
        restaurantData: restaurant
      })
    } else {
      alert('Please Signin')
    }
  }
  handleRestaurantQuickViewFun = (restaurant) => {
    this.setState({
      restaurantQucikViewData: restaurant
    })
  }
  bookTable = (people, date, time) => {
    RequestsAPI.bookTable(people, date, time, this.state.restaurantData, this.state.username)
  }
  signOut = () => {
    firebase.auth().signOut()
    this.setState({
      username: '',
      signedIn: false,
    })
  }
  render(){
    return (
      <Router>
        <div className="App">
          <SideNavigationBar
            openSideNavigationBar={this.openSideNavigationBar}
            open={this.state.sideNavBar}
          />
          <NavigationBar
            getSearchText={this.getSearchText}
            getSearchResults={this.getSearchResults}
            openSideNavigationBar={this.openSideNavigationBar}
            signedIn={this.state.signedIn}
            signOut={this.signOut}
          />
          <BookTable
            bookTableDialogBox={this.state.bookTableDialogBox}
            restaurantDataToBookTable={this.restaurantDataToBookTable}
            bookTable={this.bookTable}
          />
          <RestaurantQucikView
            restaurantData={this.state.restaurantQucikViewData}
            handleRestaurantQuickViewFun={this.handleRestaurantQuickViewFun}
          />
          <Switch>
            <Route path='/trending' exact render={() =>
              <TrendingRestaurants
                restaurantDataToBookTable={this.restaurantDataToBookTable}
                handleRestaurantQuickView={this.handleRestaurantQuickView}
              />}
            />
            <Route path='/bookings' exact render={() =>
              <RestaurantBookings
                key={this.state.username}
                username={this.state.username}
                bookings={this.state.bookings}
                restaurantData={this.state.restaurantData}
                handleRestaurantQuickView = {this.handleRestaurantQuickView}
              />
            } />
            <Route path='/profile' exact render={() =>
                <UserProfile
                  key={this.state.username}
                  username={this.state.username}
                />
            } />

            <Route path='/search' exact render={() =>
              <RestaurantsSearch
                searchResults={this.state.searchResults}
                restaurantDataToBookTable={this.restaurantDataToBookTable}
                handleRestaurantQuickView={this.handleRestaurantQuickView}
              />
            } />
          </Switch>
          {
            (this.state.searchResults.length !== 0)
              ? <Redirect to='/search' />
              : null
          }
        </div>
      </Router>
    );
  }
}
export default App;