import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ricknmortypng from "../../assets/ricknmorty_biglogo.png";
import EpisodesCards from "../../components/newComponents/Episodes-cards";

function Episodes() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <section className="MainPage-section">
      <img
        src={ricknmortypng}
        className="ricknmortypng"
        style={{
          width: "25%",
          height: "auto",
          display: "block",
          margin: "auto",
          marginTop: "80px",
          marginBottom: "20px",
        }}
        alt="Rick and Morty Logo"
      />
      <ApolloProvider client={client}>
        <EpisodesCards />
      </ApolloProvider>
    </section>
  );
}

export default Episodes;
