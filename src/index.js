import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev'
})


ReactDOM.render(
  <ApolloProvider client={client}>
     <App />
  </ApolloProvider>,
   document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
