import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";

const NavigationBar = (props) => {
  return (
    <div className="zomato-trending-app-bar">
      <AppBar position="static">
        <Toolbar className="zomato-app-bar">
          <section className="zomato-app-bar-title-menu">
            <IconButton 
              color="inherit" 
              aria-label="Open drawer"
              onClick={()=>props.openSideNavigationBar()}
              >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Zomato
              </Typography>
          </section>
          <form className="zomato-trending-app-bar-search" onSubmit={(e) => props.getSearchResults(e)}>
            <InputBase 
              placeholder="Search" 
              // onFocus={()=>{props.redirectTOSearch(true)}} 
              // onBlur={()=>{props.redirectTOSearch(false)}}
              onChange={(e) => props.getSearchText(e)} 
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBar;
