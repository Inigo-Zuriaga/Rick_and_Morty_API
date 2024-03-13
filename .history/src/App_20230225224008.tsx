import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Characters from './components/Characters';
import { NavBar } from './components/library/visual/NavBar';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <>
    <NavBar />
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
    </>
  );
};

export default App;
