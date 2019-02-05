import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const RestaurantCard = (props)=> {
    return (
        <div className="zomato-trending-card" key={props.restaurantData.id}>
          <Card className="zomato-trending-card-content">
            <CardActionArea 
              onClick={()=>props.handleRestaurantQuickView(props.restaurantData)}
            >
              <CardMedia
                className="zomato-trending-card-image"
                image={props.restaurantData.featured_image}
                title={props.restaurantData.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.restaurantData.name}
                </Typography>
                <Typography component="p">
                  <p><b>{props.restaurantData.location.city}</b></p>
                  <p>{props.restaurantData.location.address}</p>
                  <p><b>Cuisines:</b>{props.restaurantData.cuisines}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='zomato-trending-card-footer'>
              <Button size="small" color="primary" onClick={()=>props.restaurantDataToBookTable(props.restaurantData)}>
                Book Table
              </Button>
              <p style={{backgroundColor:`#${props.restaurantData.user_rating.rating_color}`}} className='zomato-trending-card-rating-button'>
                  &#9733;{props.restaurantData.user_rating.aggregate_rating}                    
              </p>
            </CardActions>
          </Card>
        </div>
      );
}

export default RestaurantCard;
