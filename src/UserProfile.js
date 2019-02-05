import React from 'react';

const UserProfile = (props)=> {
    return (
      <div className='zomato-user-profile'>
      <i onClick={()=>props.handleEditUserDetails()} class="fas fa-edit"></i>
        <div className='zomato-user-profile-avatar'>
          <img alt='user avatar' src={props.userDetails.photoURL}></img>
        </div>
        <div className='zomato-user-profile-details'>
          <section>
            <span className='zomato-user-profile-username'>{props.userDetails.name}</span>
            <span>{`Member since ${props.userDetails.date}`}</span>
          </section>
          <section>
            <h5>User Details</h5>
            <p>{props.userDetails.email}</p>
            <p>{props.userDetails.phone}</p>
          </section>
        </div>
      </div>
    );
}

export default UserProfile;
