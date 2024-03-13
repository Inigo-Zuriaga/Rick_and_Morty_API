import Avatar from "../../components/library/visual/Avatar";
import Card from "../../components/library/visual/Card";




export default function Character() {
    return (
        <section className="Character-section">
            <Avatar />
            <Avatar isDead={true}/>


        </section>
    )
}