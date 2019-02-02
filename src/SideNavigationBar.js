import React from 'react';
import Drawer from '@material-ui/core/Drawer';

const SideNavigationBar = (props) => {
    return (
      <div>
        <Drawer 
            open={props.open} 
            onClose={()=>props.openSideNavigationBar()}
        >
          <div className='zomato-side-navbar' onClick={()=>props.openSideNavigationBar()}>
              <button onClick={()=>props.gotoTrending()}>Trending</button>
              <button onClick={()=>props.gotoBookings()}>Bookings</button>
              <button onClick={()=>props.gotoProfile()}>Profile</button>
              <button>About Us</button>
          </div>
        </Drawer>
      </div>
    );
}
export default SideNavigationBar;
