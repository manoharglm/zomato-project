import React, { Component } from 'react';
import RequestsAPI from "./RequestsAPI";
import RestaurantCard from "./RestaurantCard";

class RestaurantsSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
          restaurants: this.props.searchResults,
        };
    }
    componentDidMount() {
        RequestsAPI.getTrendingRestaurants().then(restaurants => {
            this.setState({
                restaurants
            });
        });
    }

    // updateSearchResults =() =>{
    //     this.setState({
    //         restaurants:this.props.searchResults
    //     });
    // }

    render(){
        return (
            <div className="zomato-search">
                <p className="zomato-trending-title">search restaurants</p>
                <div className="zomato-restaurant-search-cards">
                {
                    this.state.restaurants.map(restaurant =>{
                        return(
                            <div className="zomato-restaurant-search-card">
                                <RestaurantCard 
                                    restaurantData={restaurant} 
                                    restaurantDataToBookTable={this.props.restaurantDataToBookTable}
                                    handleRestaurantQuickView={this.props.handleRestaurantQuickView}
                                />
                            </div>
                        )                
                    })
                }
                </div>
            </div>
        );
    }
}

export default RestaurantsSearch;