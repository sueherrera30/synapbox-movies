import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import AutocompleteQueryComponent from '../../containers/AutocompleteQuery';

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="secondary" className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={logo} alt="Logo" />
          <p className={classes.title} color="primary">Movies</p>
        </div>
        <div className={classes.infoContainer}>
          <IconButton>
            <ShoppingCart className={classes.icon} />
          </IconButton>
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
    infoContainer: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Navbar);
