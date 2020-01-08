import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import AutocompleteQueryComponent from '../../containers/AutocompleteQuery';
import QUERY_CART_INFO from '../HomeCart/gql';
import { useQuery } from '@apollo/react-hooks';

const Navbar = (props) => {
  const { classes } = props;
  const { data } = useQuery(QUERY_CART_INFO);
 const counter = data.cart.counter;
  return (
    <div>
      <AppBar position="static" color="secondary" className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={logo} alt="Logo" />
          <p className={classes.title} color="primary">Movies</p>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.cart}>
          {
            counter >= 1 && ( <span>{counter}</span> ) 
          }
          <IconButton>
            <ShoppingCart className={classes.icon} />
          </IconButton>
          </div>
          <AutocompleteQueryComponent />
        </div>
      </AppBar>
    </div>
  )
}
Navbar.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    imgContainer: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    cart: PropTypes.string,
    infoContainer: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Navbar);
