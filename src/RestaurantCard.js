import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

class RestaurantCard extends Component{
  render(){
    return (
        <div className="zomato-trending-card" key={this.props.restaurantData.id}>
          <Card className="zomato-trending-card-content">
            <CardActionArea 
              onClick={()=>this.props.handleRestaurantQuickViewFun(this.props.restaurantData)}
            >
              <CardMedia
                className="zomato-trending-card-image"
                image={this.props.restaurantData.featured_image}
                title={this.props.restaurantData.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.restaurantData.name}
                </Typography>
                  <p><b>{this.props.restaurantData.location.city}</b></p>
                  <p>{this.props.restaurantData.location.address}</p>
                  <p>
                    <b>Cuisines:</b>
                    {this.props.restaurantData.cuisines}
                  </p>
              </CardContent>
            </CardActionArea>
            <CardActions className='zomato-trending-card-footer'>
              <Button size="small" color="primary" onClick={()=>this.props.restaurantDataToBookTable(this.props.restaurantData)}>
                Book Table
              </Button>
              <p 
                style={{backgroundColor:`#${this.props.restaurantData.user_rating.rating_color}`}} 
                className='zomato-trending-card-rating-button'>
                  &#9733;{this.props.restaurantData.user_rating.aggregate_rating}                    
              </p>
            </CardActions>
          </Card>
        </div>
      );
}
}


const mapStateToProps = state => {
  return {
    openRestaurantQuickView: state.openRestaurantQuickView,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRestaurantQuickView: () => dispatch({ type: "HANDLE_RESTAURANT_QUICK_VIEW"}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps) (RestaurantCard);