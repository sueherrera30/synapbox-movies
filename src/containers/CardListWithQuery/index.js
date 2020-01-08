import React from 'react';
import CardList from '../../components/CardList';
import { Query } from 'react-apollo';
import QUERY_CARD_LIST from './gql';

const CardListWithQuery = () => {
  return(
    <Query query={QUERY_CARD_LIST}>
      {
        ({loading, error, data }) => {
        if (loading) return <p> wait a minute baby </p>;
        if (error) return <p> upss! something is wrong  </p>;
        const { items } = data;
          return(
            <CardList items={items}/>
          )
        }
      }
    </Query>
  )
}

export default CardListWithQuery;