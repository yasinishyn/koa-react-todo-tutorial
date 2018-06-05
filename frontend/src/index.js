import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';
import App from './App';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.getElementById('root'))
