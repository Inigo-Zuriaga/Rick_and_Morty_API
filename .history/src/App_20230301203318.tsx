import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavBar } from "./components/library/visual/NavBar";
import ricknmortypng from "./assets/ricknmorty_biglogo.png";
import MainPage from "./subpages/MainPage/MainPage";
import Footer from "./components/library/visual/Footer";
import { Route, Routes } from "react-router-dom";
import Locations from "./subpages/Locations/Locations";
import Episodes from "./subpages/Episodes/Episodes";
import CharacterDetails from "./components/newComponents/CharacterDetails";
import IconButton from "./components/library/buttons/IconButton";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <NavBar title1={"Characters"} title2={"Locations"} title3={"Episodes"} />
        <img
        src={ricknmortypng}
        className="ricknmortypng"
        style={{
          width: "25%",
          height: "auto",
          display: "block",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      />  
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/Locations" element={<Locations/>} />
        <Route path="/Episodes" element={<Episodes/>} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        </Routes>

        <Footer title={"Group 3 @ Cph Business Lyngby - Web Development"} />
      </>
    </ApolloProvider>
  );
};

export default App;
