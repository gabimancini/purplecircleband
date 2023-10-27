import { Link } from "react-router-dom"
export default function Home() {
    return (
        <section id="home">
            <div className="container container_center">
            <div style={{margin:"100px", display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <h1><span>Purple</span><span className="cLetter">C</span><span>ircle</span></h1>
                <Link to='https://open.spotify.com/intl-es/artist/2Yjvtj6PygasEQoDJbtm1N?si=rvc82iviSBePvb7ZB01-Tw' rel="noreferrer" target='_blank' className="linkBtn btnHome">Listen Us</Link>
                </div>
            </div>
        </section>
    )
}