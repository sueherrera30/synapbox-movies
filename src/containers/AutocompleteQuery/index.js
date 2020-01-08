import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import AutocompleteComponent from '../../components/Autocomplete';

const AutocompleteQuery = gql`
  query getItemsInAutocomplete {
    items {
      id
      title
    }
  }
`;
const AutocompleteQueryComponent = () => {
  return(
    <Query query={AutocompleteQuery}>
      {
        ({loading, error, data }) => {
        if (loading) return <p> take it easy</p>;
        if (error) return <p> upss! </p>;
        const { items } = data;
          return(
            <AutocompleteComponent items={items}/>
          )
        }
      }
    </Query>
  )
}

export default AutocompleteQueryComponent;