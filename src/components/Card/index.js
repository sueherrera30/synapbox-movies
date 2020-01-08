import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../CardList/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography } from '@material-ui/core';
  import { gql } from 'apollo-boost';
  import { useMutation  } from '@apollo/react-hooks';

const MUTATION_ADD_ITEM_TO_CART = gql`
  mutation ($id: String!) {
    addItemToCart(id: $id) @client
  }
`;
const CardContainer = (props) => {
 const { classes, items,id } = props;

  const [ addItemToCart ] = useMutation(
    MUTATION_ADD_ITEM_TO_CART,
    { variables: { id: id } }
  );
  return (
    <Fragment>
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
                <Button size="small" color="primary"  onClick={addItemToCart}>Buy</Button>
              </CardActions>
            </Card>  
          )
        )
      }
    </Fragment> 
  )
}
CardContainer.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string,
    cardText: PropTypes.string,
    buttonContainer: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(CardContainer);
