import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
  import { gql } from 'apollo-boost';
  import { useMutation  } from '@apollo/react-hooks';

const MUTATION_ADD_ITEM_TO_CART = gql`
  mutation ($id: String!) {
    addItemToCart(id: $id) @client
  }
`;
const ButtonComponent = (props) => {
 const { id } = props;

  const [ addItemToCart ] = useMutation(
    MUTATION_ADD_ITEM_TO_CART,
    { variables: { id: id } }
  );
  return (
    <Button size="small" color="primary"  onClick={addItemToCart} >Buy</Button>
  )
}
ButtonComponent.propTypes = {
 id:  PropTypes.string,
};

export default ButtonComponent;
