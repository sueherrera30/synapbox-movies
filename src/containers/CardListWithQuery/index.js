import React from 'react';
import CardList from '../../components/CardList';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const queryCardList = gql`
  query getUsers {
    items {
      id
      title
      description
      image
      price
    }
  }
`;
const CardListWithQuery = () => {
  return(
    <Query query={queryCardList}>
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