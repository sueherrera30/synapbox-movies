import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import AutocompleteComponent from '../Autocomplete';

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="secondary">
        <img src={logo} alt="Logo" className={classes.img} />
        <AutocompleteComponent />
      </AppBar>
    </div>
  )
}
Navbar.propTypes = {
  classes: PropTypes.shape({
    img: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Navbar);
