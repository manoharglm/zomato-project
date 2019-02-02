import React, { Component } from 'react';
import RequestsAPI from "./RequestsAPI";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
    };
  }
  componentDidMount() {
    RequestsAPI.getUserData(this.props.username)
      .then(userDetails => {
        this.setState({
          userDetails
        })
      })
  }

  render() {
    console.log(this.state.userDetails)
    return (
      <div className='zomato-user-profile'>
        <div className='zomato-user-profile-avatar'>
          <img alt='user avatar' src={this.state.userDetails.photoURL}></img>
        </div>
        <div className='zomato-user-profile-details'>
          <section>
            <p>{this.state.userDetails.username}</p>
          </section>
          <section>
            <span>{`Member since ${this.state.userDetails.date}`}</span>
            <h5>User Details</h5>
            <p>{this.state.userDetails.email}</p>
            <p>{this.state.userDetails.phone}</p>
          </section>
        </div>

      </div>
    );
  }
}

export default UserProfile;
