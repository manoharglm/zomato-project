import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

const NavigationBar = (props) => {
  return (
    <div className="zomato-trending-app-bar">
      <AppBar position="static">
        <Toolbar className="zomato-app-bar">
          <section className="zomato-app-bar-title-menu">
            <IconButton 
              color="inherit" 
              aria-label="Open drawer"
              onClick={props.openSideNavigationBar}
              >
              <MenuIcon/>
            </IconButton>
            <NavLink to='/trending' className='zomato-navbar-title-navlink' exact>
            <p className='zomato-navbar-title'>
              Book A Table
            </p>
            </NavLink>
          </section>
          <form className="zomato-trending-app-bar-search" onSubmit={(e) => props.getSearchResults(e)}>
            <InputBase 
              placeholder="Search" 
              // onFocus={()=>{props.redirectTOSearch(true)}} 
              // onBlur={()=>{props.redirectTOSearch(false)}}
              onChange={(e) => props.getSearchText(e)} 
            />

          </form>
          {
            (props.signedIn)
              ? <button className='navbar-logout' onClick={() => props.signOut()}>logout</button>
              : <StyledFirebaseAuth
                className='navbar-google-signin'
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    open: state.open,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    openSideNavigationBar: () => dispatch({ type: "HANDLE_SIDE_NAV"}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)  (NavigationBar);
