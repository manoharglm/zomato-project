import React, { Component } from 'react';
import RequestsAPI from "./RequestsAPI";
import BookingCard from './BookingCard';

class RestaurantBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
  }
  componentDidMount() {
    RequestsAPI.getBookingData(this.props.username).then(bookings => {
      this.setState({
        bookings
      })
    })
  }
  render() {
    return (
      (this.state.bookings.length===0)
        ? <p className='zomato-user-not-signedin'>No Bookings</p>
        :
        <div>
          <h2 className='zomato-bookings-title'>Your Bookings</h2>
          <div className='zomato-bookings'>
            {
              this.state.bookings.map(booking => {
                return <BookingCard
                  bookingData={booking}
                  restaurantData={this.props.restaurantData}
                  handleRestaurantQuickView={this.props.handleRestaurantQuickView}
                />
              })
            }
          </div>
        </div>

    );
  }
}

export default RestaurantBookings;