import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Container } from '@material-ui/core';
  import CardContainer from '../Card';

const CardList = (props) => {
  const { classes, items } = props;
  return (   
    <Container maxWidth="xl" className={classes.cardsContainer}>
        <CardContainer  key='container' items={items} />
    </Container>
  )
}
CardList.propTypes = {
  classes: PropTypes.shape({
    cardsContainer: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(CardList);
