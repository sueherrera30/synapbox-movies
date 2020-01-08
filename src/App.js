import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Home from '../src/containers/Home';
import { resolvers } from './resolvers';

const cache = new InMemoryCache({})

const client = new ApolloClient({
  cache: cache,
  uri: 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev',
  clientState: {
    defaults:{
      cart:{
        items:[],
        total: 0,
        counter: 0,
        __typename: 'cart',
      },
    },
    resolvers: resolvers,
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
