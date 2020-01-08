import { gql } from 'apollo-boost';

const QUERY_CARD_LIST = gql`
  query getItemsInCard {
      items {
      id
      title
      description
      image
      price
    }
  }
`;

export default QUERY_CARD_LIST;