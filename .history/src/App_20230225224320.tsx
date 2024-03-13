import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Characters from './components/Characters';
import { NavBar } from './components/library/visual/NavBar';
import ricknmorty from './assets/ricknmorty_biglogo.png';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <>
    <NavBar />
    <img src={ricknmorty} alt="200px" />
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
    </>
  );
};

export default App;
