import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Characters from "../../components/Characters";
import Avatar from "../../components/library/visual/Avatar";
import Card from "../../components/library/visual/Card";
import { NavBar } from "../../components/library/visual/NavBar";
import ricknmortypng from '../../assets/ricknmorty_logo.png';



const MainPage = () => {
    const client = new ApolloClient({
      uri: 'https://rickandmortyapi.com/graphql',
      cache: new InMemoryCache()
    });
  
    return (
        <section className="MainPage-section">
<NavBar />
    <img src={ricknmortypng} className="ricknmortypng" style={{ width: '30%', height: 'auto',display: 'block', margin: 'auto'}}/>
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>

        </section>
    )
}
/*            <img src="./src/assets/ricknmorty_biglogo.png" alt="biglogo" style={{ width: "600px", height: "200px" }}/>
            <Card title={"Rick"} subtitle={"awesome"}/>
            <Avatar />
            <Avatar isDead={true}/>*/
            export default MainPage;