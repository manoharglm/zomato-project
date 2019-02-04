import React, { Component } from "react";
import RequestsAPI from "./RequestsAPI";
import RestaurantCard from "./RestaurantCard";

class TrendingRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingRestaurants: [],
      searchText:'',
      searchResults:[],
    };
  }
  componentDidMount() {
    this.getTrendingRestaurants();
  }
  getTrendingRestaurants = () => {
    RequestsAPI.getTrendingRestaurants().then(restaurants => {
      this.setState({
        trendingRestaurants: restaurants
      });
    });
  };

  render() {
    return (
      <div className="zomato-trending">
        <p className="zomato-trending-title">Trending restaurants</p>
        <div className="zomato-trending-cards">
          {
            this.state.trendingRestaurants.map(restaurant => {
              return <RestaurantCard 
                        restaurantData={restaurant} 
                        restaurantDataToBookTable={this.props.restaurantDataToBookTable}
                        handleRestaurantQuickView={this.props.handleRestaurantQuickView}
                      />
            })
          }
        </div>
      </div>
    );
  }
}

export default TrendingRestaurants;
