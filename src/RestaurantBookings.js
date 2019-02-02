import React, { Component } from 'react';
import RequestsAPI from "./RequestsAPI";
import BookingCard from './BookingCard';

class RestaurantBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings:[]
    };
  }
componentDidMount(){
  RequestsAPI.getBookingData(this.props.username).then(bookings=>{
    this.setState({
      bookings
    })
  })
}
  render() {
    console.log(this.state.bookings)

    return (
        <div className='zomato-bookings'>
          <h2>Your Bookings</h2>
          {
            this.state.bookings.map(booking =>{
              return <BookingCard
                        bookingData={booking}
                      />
            })
          }
        </div>
    );
  }
}

export default RestaurantBookings;
