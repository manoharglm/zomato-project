import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { NavLink } from 'react-router-dom'

const SideNavigationBar = (props) => {
    return (
      <div>
        <Drawer 
            open={props.open} 
            onClose={()=>props.openSideNavigationBar()}
        >
          <div className='zomato-side-navbar' onClick={()=>props.openSideNavigationBar()}>
              <NavLink to="/trending"><button>Trending</button></NavLink>
              <NavLink to="/bookings"><button>Bookings</button></NavLink>
              <NavLink to="/profile"><button>Profile</button></NavLink>
              <a href="https://github.com/manoharglm" rel="noopener noreferrer" target='_blank'><button>About Us</button></a>
          </div>
        </Drawer>
      </div>
    );
}
export default SideNavigationBar;
