import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ButtonComponent from '../Card';
  import {
    Container,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography } from '@material-ui/core';

const CardList = (props) => {
  const { classes, items } = props;
  return (   
    <Container maxWidth="xl" className={classes.cardsContainer}>
      {
        items.map(item => (
            <Card className={classes.card} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="move image"
                  height="140"
                  image={item.image}
                />
                <CardContent className={classes.cardText}>
                  <Typography gutterBottom variant="h5" component="h2">{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">{item.description}</Typography>
                  <Typography component="p" className={classes.price}>${item.price}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonContainer}>
              <ButtonComponent id={item.id}/>
              </CardActions>
            </Card>  
          )
        )
      }
    </Container>
  )
}
CardList.propTypes = {
  classes: PropTypes.shape({
    cardsContainer: PropTypes.string,
    card: PropTypes.string,
    cardText: PropTypes.string,
    buttonContainer: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(CardList);
