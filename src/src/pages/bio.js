import PageTitle from "../components/pageTitle";
import Parahraph from "../components/Paragraph";
import { Link } from "react-router-dom";
export default function Bio() {
    return (
        <>
            <PageTitle title="Bio" />
            <section id="bio">
                <div className="container container_center" style={{marginTop:"5%",marginBottom:"5%" }}>
                    <BioParagraphs />
                    <Link to='/contact' className="linkBtn" style={{padding:'15px 30px', marginTop:'60px'}}>Contact Us</Link>
                </div>
            </section>
        </>
    )
}
function BioParagraphs() {
    return (
        <div className="bioParagraphs">
            <Parahraph text="Purple Circle is an entirely family band, made up of father, daughter and uncle, the band is originally from Easton PA. The members that make it up are: Berenice Ritta on lead vocals and backing vocals - Guillermo Ritta on Spanish guitar, acoustic guitar, bass and percussion - Alejandro Ritta on electric guitar, keyboards, synthesizers and bass." />
            <Parahraph text="We identify with musical genres such as indie/rock, folk, pop and folkloric nuances from South America." />
            <Parahraph text="Our band is characterized by including native instruments from South America in the recordings of our songs, giving it a unique color dreamed of by us. With our music we seek to reach all types of ears, transcending sound and social barriers." />
            <Parahraph text="We are excited to share our story and music with you, so keep checking back for the latest updates and exclusive content, soon we will be releasing our first album with a selection of songs made from the heart." />
        </div>
    )
}