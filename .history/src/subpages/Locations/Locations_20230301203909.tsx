import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ricknmortypng from "../../assets/ricknmorty_biglogo.png";
import LocationsCards from "../../components/newComponents/Locations-cards";

const Locations = () => {
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
          marginTop: "70px",
          marginBottom: "20px"
        }}
      />
      <ApolloProvider client={client}>
        <LocationsCards />
      </ApolloProvider>
    </section>
  );
};

export default Locations;

/*            <img src="./src/assets/ricknmorty_biglogo.png" alt="biglogo" style={{ width: "600px", height: "200px" }}/>
            <Card title={"Rick"} subtitle={"awesome"}/>
            <Avatar />
            <Avatar isDead={true}/>*/
