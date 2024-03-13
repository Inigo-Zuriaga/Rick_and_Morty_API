import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Characters from './components/Characters';
import { NavBar } from './components/library/visual/NavBar';
import ricknmortypng from './assets/ricknmorty_biglogo.png';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <>
    <NavBar />
    <img src={ricknmortypng} className="ricknmortypng"/>
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
    </>
  );
};

export default App;
