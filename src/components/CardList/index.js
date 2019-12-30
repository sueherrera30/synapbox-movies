import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography } from '@material-ui/core';
const CardList = (props) => {
  const { classes } = props;
  return (
    <Container maxWidth="xl" className={classes.cardsContainer}>
      {
        Array.from(Array(12), (e, i) => {
          return (
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://66.media.tumblr.com/f2f9f0457b9319b8921e095ceb91a07f/tumblr_pnhrjeqtVU1wrnpguo1_1280.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.cardText}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Title 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonContainer}>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>   
          );
        })
      }
    </Container > 
  )
}
CardList.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string,
    cardsContainer: PropTypes.string,
    cardText: PropTypes.string,
    buttonContainer: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(CardList);
