import PageTitle from "../components/pageTitle";
import Paragraph from "../components/Paragraph";
import ImgAlbum from './../assets/album.jpg';
import { Link } from "react-router-dom";
export default function Discography() {
    return (
        <>
            <PageTitle title="Discography and Singles" />
            <section id="disco">
                <div className="container container_center">
                    <DiscoContainer />
                </div>
            </section>
        </>
    )
}
function DiscoContainer() {
    return (
        <div className="discoContainer">
            <DiscoText />
            <DiscoImage />
        </div>
    )
}

function DiscoText() {
    return (
        <div className="discoText">
            <h3>Read Between Lines</h3>
            <Paragraph text="Our first single was released in October 2023. The lyrics, composition, recording and production were entirely in charge of us, as well as the dissemination and promotion of our first single. We are very eager to release our next single and album. We hope you enjoy our single, we'll be back for more soon! Keep checking the information on our website, we will upload news periodically." />
            <span className="discoSignature">Sincerely: Purple circle</span>
        </div>
    )
}

function DiscoImage() {
    return <Link to='https://open.spotify.com/intl-es/artist/2Yjvtj6PygasEQoDJbtm1N?si=rvc82iviSBePvb7ZB01-Tw' rel="noreferrer" target='_blank'>
        <img src={ImgAlbum} alt="Album Portrait" className="discoImage" /></Link>
}