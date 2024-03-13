import Avatar from "../../components/library/visual/Avatar";
import Card from "../../components/library/visual/Card";




export default function MainPage() {
    return (
        <section className="MainPage-section">
            <img src="./src/assets/ricknmorty_biglogo.png" alt="biglogo" style={{ width: "600px", height: "200px" }}/>
            <Card title={"Rick"} subtitle={"awesome"}/>
            <Avatar />
            <Avatar isDead={true}/>


        </section>
    )
}