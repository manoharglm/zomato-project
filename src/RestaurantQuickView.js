import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const RestaurantQuickView = (props) => {

    return (
        <div>
            <Dialog
                fullScreen
                open={props.openQuickView}
                onClose={props.handleRestaurantQuickView}
                TransitionComponent={Transition}
                className='restaurant-quickview'
            >
                <div className='restaurant-quickview-close-button-container'>
                    <CloseIcon className='restaurant-quickview-close-button' onClick={props.handleRestaurantQuickView} />
                </div>
                <div className="restaurant-quickview-container">
                    <img className='restaurant-quickview-image' src={props.restaurantData.featured_image} alt="" />
                    <div className="restaurant-quickview-content">
                        <p className="restaurant-quickview-content-title">{props.restaurantData.name}</p>
                        {
                            (props.restaurantData.location !== undefined)
                                ?
                                <div>
                                    <p>{props.restaurantData.location.city}</p>
                                    <span>{props.restaurantData.location.address}</span>
                                </div>
                                : null
                        }

                        <p><b>Cuisines: </b>{props.restaurantData.cuisines}</p>
                        <p><b>Cost for Two: </b>{props.restaurantData.average_cost_for_two}</p>
                        <a href={props.restaurantData.url} rel="noopener noreferrer" target='_blank'>Visit Site</a>
                    </div>
                </div>
                <div className="restaurant-quickview-description">
                    <p><b>About {props.restaurantData.name}</b></p>
                    <p>{props.restaurantData.name} is a place designed to take the adventure, excitement and joy of eating to all new heights. A place dedicated to you and your favourite people in the world – your GANGS. Where your job is to WISH. And ours is to make your wishes come TRUE – in unprecedented, flavour-packed, deliciously delightful ways!</p>
                </div>

                {/* <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                        </ListItem>
                    </List> */}
            </Dialog>
        </div>
    );
}

export default RestaurantQuickView;