import React, { Component } from 'react';
import RequestsAPI from "./RequestsAPI";
import EditUserDetails from './EditUserDetails'

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: '',
      editUserDetails:false,
    };
  }
  componentDidMount() {
    if (this.props.username) {
      RequestsAPI.getUserData(this.props.username)
        .then(userDetails => {
          this.setState({
            userDetails
          })
        })
    }
  }
  handleEditUserDetails=()=>{
    this.setState({
      editUserDetails:!this.state.editUserDetails
    })
  }
  editUserDetailsFun=(name,phone,email)=>{
    let updateDetails=this.state.userDetails
    updateDetails.name=name
    updateDetails.phone=phone
    RequestsAPI.editUserDetails(name,phone,email).then(_=>{
      this.setState({
        userDetails:updateDetails
      })
    })
  }
  render() {
    return (
      (!this.state.userDetails.email)
        ? <p className='zomato-user-not-signedin'>You are not signed in</p>
        :
        <div className='zomato-user-profile'>
          <EditUserDetails
            // key ={this.state.editUserDetails}
            userDetails={this.state.userDetails}
            editUserDetails={this.state.editUserDetails}
            editUserDetailsFun={this.editUserDetailsFun}
            handleEditUserDetails={this.handleEditUserDetails}
          />
          <i onClick={() => this.handleEditUserDetails()} class="fas fa-edit"></i>
          <div className='zomato-user-profile-avatar'>
            <img alt='user avatar' src={this.state.userDetails.photoURL}></img>
          </div>
          <div className='zomato-user-profile-details'>
            <section>
              <span className='zomato-user-profile-username'>{this.state.userDetails.name}</span>
              <span>{`Member since ${this.state.userDetails.date}`}</span>
            </section>
            <section>
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
