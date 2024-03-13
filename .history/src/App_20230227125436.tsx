import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavBar } from "./components/library/visual/NavBar";
import ricknmortypng from "./assets/ricknmorty_biglogo.png";
import MainPage from "./subpages/MainPage/MainPage";

const App = () => {


  return (
    <>
      <NavBar />
      <MainPage />
    </>
  );
};

export default App;
