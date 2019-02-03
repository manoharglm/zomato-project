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
    return (
      <div>          
        <h2 className='zomato-bookings-title'>Your Bookings</h2>
        <div className='zomato-bookings'>
          {
            this.state.bookings.map(booking =>{
              return <BookingCard
                        bookingData={booking}
                      />
            })
          }
        </div>
        </div>

    );
  }
}

export default RestaurantBookings;
