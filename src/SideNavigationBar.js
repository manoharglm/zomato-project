import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";

const SideNavigationBar = (props) => {
    return (
      <div>
        <Drawer 
            open={props.open} 
            onClose={props.openSideNavigationBar}
        >
          <div className='zomato-side-navbar' onClick={props.openSideNavigationBar}>
              <NavLink to="/trending"><button>Trending</button></NavLink>
              <NavLink to="/bookings"><button>Bookings</button></NavLink>
              <NavLink to="/profile"><button>Profile</button></NavLink>
              <a href="https://github.com/manoharglm" rel="noopener noreferrer" target='_blank'><button>About Us</button></a>
          </div>
        </Drawer>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps) (SideNavigationBar);
