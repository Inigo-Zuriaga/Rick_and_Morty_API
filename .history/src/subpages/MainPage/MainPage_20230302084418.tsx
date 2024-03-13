import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Characters from "../../components/newComponents/Characters";
import ricknmortypng from "../../assets/ricknmorty_biglogo.png";
import "./MainPage.css"
const MainPage = () => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <section className="MainPage-section">
      
      <ApolloProvider client={client}>
        <Characters />
        
      </ApolloProvider>
    </section>
  );
};

export default MainPage;

/*            <img src="./src/assets/ricknmorty_biglogo.png" alt="biglogo" style={{ width: "600px", height: "200px" }}/>
            <Card title={"Rick"} subtitle={"awesome"}/>
            <Avatar />
            <Avatar isDead={true}/>*/
