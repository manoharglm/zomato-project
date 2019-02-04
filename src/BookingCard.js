import React from 'react';
import Button from '@material-ui/core/Button';

let BookingCard = (props) => {
    return (
        <div className='zomato-bookings-card'>
            <img
                className='zomato-bookings-card-image'
                src={props.bookingData.restaurantData.featured_image}
                alt='zomato bookings card'
            >
            </img>
            <div className='zomato-bookings-card-content'>
                <section className='zomato-bookings-card-title'>
                    <p>{props.bookingData.restaurantData.name}</p>
                </section>
                <section>
                    <div>
                        <span>Number of People:</span>
                        <span>{props.bookingData.numberOfPeople}</span>
                    </div>
                </section>
            </div>
            <div className='zomato-bookings-card-submit'>
                <div>
                    <div>
                        <span>{props.bookingData.date} At {props.bookingData.time}</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <Button variant="contained" className='zomato-bookings-card-button'>
                    View Restaurant      
                </Button>
            </div>
        </div>
    );
}



export default BookingCard;