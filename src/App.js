import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import TrendingRestaurants from './TrendingRestaurants'
import RestaurantsSearch from './RestaurantsSearch'
import NavigationBar from "./NavigationBar";
import RequestsAPI from "./RequestsAPI";
import SideNavigationBar from './SideNavigationBar';
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
      sideNavBar: false,
      username: null,
      bookTableDialogBox: false,
      restaurantData: [],
      restaurantQucikView: false,
      restaurantQucikViewData: '',
      signedIn: false,
    };
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
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
  openSideNavigationBar = () => {
    this.setState({
      sideNavBar: !this.state.sideNavBar
    })
  }
  restaurantDataToBookTable = (restaurant) => {
    if (this.state.signedIn) {
      this.setState({
        bookTableDialogBox: !this.state.bookTableDialogBox,
        restaurantData: restaurant
      })
    } else {
      alert('Please Signin')
    }
  }
  handleRestaurantQuickView = (restaurant) => {
    this.setState({
      restaurantQucikView: !this.state.restaurantQucikView,
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
  render() {
    return (
      <Router>
        <div className="App">
          <SideNavigationBar
            openSideNavigationBar={this.openSideNavigationBar}
            open={this.state.sideNavBar}
            gotoBookings={this.gotoBookings}
            gotoProfile={this.gotoProfile}
            gotoTrending={this.gotoTrending}
          />
          <NavigationBar
            getSearchText={this.getSearchText}
            getSearchResults={this.getSearchResults}
            openSideNavigationBar={this.openSideNavigationBar}
            signedIn={this.state.signedIn}
            uiConfig={this.uiConfig}
            signOut={this.signOut}
          />
          <BookTable
            bookTableDialogBox={this.state.bookTableDialogBox}
            restaurantDataToBookTable={this.restaurantDataToBookTable}
            bookTable={this.bookTable}
          />
          <RestaurantQucikView
            openQuickView={this.state.restaurantQucikView}
            handleRestaurantQuickView={this.handleRestaurantQuickView}
            restaurantData={this.state.restaurantQucikViewData}
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