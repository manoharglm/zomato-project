import React from 'react';
import RestaurantCard from "./RestaurantCard";

const RestaurantsSearch = (props) => {
    console.log(props)
    return (
        <div className="zomato-search">
            <h1>search restaurants</h1>
            <div className="zomato-restaurant-search-cards">
            {
                props.searchResults.map(restaurant =>{
                    return(
                        <div className="zomato-restaurant-search-card">
                            <RestaurantCard 
                                restaurantData={restaurant} 
                                restaurantDataToBookTable={props.restaurantDataToBookTable}
                                handleRestaurantQuickView={props.handleRestaurantQuickView}
                            />
                        </div>
                    )                
                })
            }
            </div>
        </div>
    );
}

export default RestaurantsSearch;