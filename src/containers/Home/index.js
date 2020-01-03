import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import Navbar from  '../../components/NavBar';
import HomeCart from '../../components/HomeCart';
import CardListWithQuery from '../CardListWithQuery';
import icon from '../../assets/images/movie.png';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Home = (props) => {
  const { classes } = props;
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={9}>
          <div className={classes.title}>
            <Typography variant="h1">Welcome</Typography>
            <img src={icon} alt="cinema icon" className={classes.icon}/>
          </div>
          <Typography variant="body1">please choose some cool movies that you won't find in the silly netflix..</Typography>
          <CardListWithQuery />
        </Grid>
          <Grid item xs={3} className={classes.cart}>
            <HomeCart />
        </Grid>
      </Grid>
    </>        
  )
}

Home.propTypes = {
  classes: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Home);
