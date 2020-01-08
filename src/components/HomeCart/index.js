import React from 'react';
import PropTypes from 'prop-types';
import QUERY_CART_INFO from './gql';
import { useQuery } from '@apollo/react-hooks';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styles from './styles';

const HomeCart = (props) => {
  const { classes } = props;
  const { data } = useQuery(QUERY_CART_INFO);
  return (
    <div>
      <div>
        <Typography variant="h3" className={classes.title}>synap-Cart</Typography>
      </div>  
      <Typography variant="h5" className={classes.subtitle}>List of selected movies:</Typography>
      <div  className={classes.main}>
        {data.cart.items.map(item => <p key={item.id}>{item.title}</p>)}
        <h4>total:</h4>
        <p>${data.cart.total.toFixed(2)}</p>
      </div>
    </div>   
  )
};

HomeCart.propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    main: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(HomeCart);
