import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styles from './styles';

const HomeCart = (props) => {
  const { classes } = props;
  return (
    <>
      <div>
        <Typography variant="h3" className={classes.title}>synap-Cart</Typography>
      </div>  
      <Typography variant="h5" className={classes.subtitle}>List of selected movies:</Typography>
    </>   
  )
};

HomeCart.propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(HomeCart);
