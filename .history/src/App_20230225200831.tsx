import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Characters from './components/Characters';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Characters page={1} />
    </ApolloProvider>
  );
};

export default App;
