import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
// import styles from './styles';


const CardList = (props) => {
  // const { classes } = props;
  return (
    <Paper>
      Holaaaaaaaa
    </Paper>
  )
}
CardList.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    imgContainer: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

// export default withStyles(styles)(CardList);
export default CardList;