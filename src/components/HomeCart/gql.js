import { gql } from 'apollo-boost';

const QUERY_CART_INFO = gql`
  query {
    cart @client {
      items {
        id
        title
        description
        image
        price
      }
      total
      counter
    }
  }
`;

export default QUERY_CART_INFO;