import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import TrendingRestaurants from './TrendingRestaurants'
import RestaurantsSearch from './RestaurantsSearch'
import NavigationBar from "./NavigationBar";
import RequestsAPI from "./RequestsAPI";
import HomePage from './HomePage'
import SideNavigationBar from './SideNavigationBar';
import RestaurantBookings from './RestaurantBookings'
import UserProfile from './UserProfile'
import BookTable from './BookTable'
import RestaurantQucikView from './RestaurantQuickView'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey:'AIzaSyCX0DNvg_Mu3BgfG5tgwljLCdiLsoPZM04',
  authDomain:'zomato-project-manohar.firebaseapp.com'
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
      gotoSearch: false,
      login: false,
      sideNavBar: false,
      bookingsPage: false,
      profilePage: false,
      trndingPage:false,
      username:'manohar',
      bookTableDialogBox:false,
      restaurantData:[],
      restaurantQucikView:false,
      restaurantQucikViewData:'',
      signedIn:false,
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
  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({
        signedIn:!!user
      })
    })
  }
  getSearchText = (e) => {
      this.setState({
        searchText: e.target.value
      })
  }
  getSearchResults = (e) => {
    e.preventDefault()
    if((this.state.searchText).length >= 0){
      RequestsAPI.getSearchResults(this.state.searchText).then(restaurants => {
        this.setState({
          searchResults: restaurants
        });
      });
    }
  }
  handleLogin = (bool) => {
    this.setState({
      login: bool
    })
  }
  openSideNavigationBar = () => {
    this.setState({
      sideNavBar: !this.state.sideNavBar
    })
  }
  gotoBookings = () => {
    this.setState({
      bookingsPage: !this.state.bookingsPage
    })
  }
  gotoProfile = () => {    
    this.setState({
      profilePage: !this.state.profilePage
    })
  }
  gotoTrending = () => {
    this.setState({
      trndingPage: !this.state.trndingPage
    })  
    // function Transition(props) {
    //     return <Slide direction="up" {...props} />;
    // }
    
  }
  restaurantDataToBookTable = (restaurant) =>{
    this.setState({
      bookTableDialogBox: !this.state.bookTableDialogBox,
      restaurantData:restaurant
    })
  }
  handleRestaurantQuickView=(restaurant)=>{
    this.setState({
      restaurantQucikView:!this.state.restaurantQucikView,
      restaurantQucikViewData:restaurant
    })
  }
  bookTable =(people,date,time)=>{
    RequestsAPI.bookTable(people,date,time,this.state.restaurantData,this.state.username)
  }
  render() {
    return (
      <Router>
        <div className="App">
      (this.state.signedIn)
      ? {console.log("signed in");
      }
      : <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
    
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
          />
          <BookTable
            bookTableDialogBox={this.state.bookTableDialogBox}
            restaurantDataToBookTable={this.restaurantDataToBookTable}
            bookTable = {this.bookTable}
          />
          <RestaurantQucikView
            openQuickView={this.state.restaurantQucikView}
            handleRestaurantQuickView={this.handleRestaurantQuickView}
            restaurantData={this.state.restaurantQucikViewData}
          />
          <Switch>
            <Route path='/' exact render={() =>
              <HomePage
                handleLogin={this.handleLogin}
              />
            } />
            <Route path='/trending' exact render={() =>
              <TrendingRestaurants
                restaurantDataToBookTable={this.restaurantDataToBookTable}
                handleRestaurantQuickView={this.handleRestaurantQuickView}
              />}  
            />
            <Route path='/bookings' exact render={() =>
              <RestaurantBookings
                username={this.state.username}
              />
            } />
            <Route path='/profile' exact render={() =>
              <UserProfile
                username={this.state.username}
              />
            } />

            <Route path='/search' exact render={() =>
              <RestaurantsSearch
                searchResults={this.state.searchResults}
                restaurantDataToBookTable={this.restaurantDataToBookTable}
              />
            } />
          </Switch>
          {
            (this.state.searchResults.length !== 0)
              ? <Redirect to='/search' />
              : null
          }
          {
            (this.state.login)
              ? <Redirect to='/trending' />
              : null
          }
          {
            (this.state.bookingsPage)
              ? <Redirect to={{
                pathname: '/bookings',
                username: this.state.username,
              }}/>
              : null
          }
          {
            (this.state.profilePage)
            ? <Redirect to={{
              pathname: '/profile',
              username: this.state.username,
            }}/>              
            : null
          }
          {
            (this.state.trndingPage)
              ? <Redirect to='/trending'  />
              : null
          }
        </div>
      </Router>
    );
  }
}

export default App;
