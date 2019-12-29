import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Home from '../src/containers/Home';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev'
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
