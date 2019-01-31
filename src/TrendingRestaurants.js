import React, { Component } from "react";
import RequestsAPI from "./RequestsAPI";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

class TrendingRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingRestaurants: []
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
        <div className="zomato-trending-app-bar">
          <AppBar position="static">
            <Toolbar className="zomato-app-bar">
              <section className="zomato-app-bar-title-menu">
                <IconButton color="inherit" aria-label="Open drawer">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Zomato
                </Typography>
              </section>
              <div />
              <div>
                <div>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search…" />
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <h1>Zomato:Trending</h1>
        <div className="zomato-trending-cards">
          {this.state.trendingRestaurants.map(restaurant => {
            return (
              <div className="zomato-trending-card" key={restaurant.id}>
                <Card className="zomato-trending-card-content">
                  <CardActionArea>
                    <CardMedia
                      className="zomato-trending-card-image"
                      image={restaurant.featured_image}
                      title={restaurant.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {restaurant.name}
                      </Typography>
                      <Typography component="p">
                        <span>{restaurant.location.address}</span>
                        <span>{restaurant.cuisines}</span>
                        <span>{restaurant.average_cost_for_two}</span>
                        <spa>{restaurant.user_rating.votes}</spa>
                        <spa>{restaurant.user_rating.aggregate_rating}</spa>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TrendingRestaurants;
