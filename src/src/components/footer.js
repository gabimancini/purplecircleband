export default function Footer() {
    return (
        <footer>
            <div className="container" style={{padding:"30px 16px"}}>
                <div className="footer_inner">
                    <Newsletter />
                    <Powered />
                    <Copyright />
                </div>
            </div>
        </footer>
    )
}

function Newsletter() {
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: '20px' }}>
            <input type="email" placeholder="Enter your Email" className="newsletter" /> <button type="submit" className="newsletterBtn">Suscribe</button>
        </div>
    )
}

function Copyright() {
    return (
        <>
            <p style={{ marginBottom: '20px' }}>© 2023 Purple Circle | All rights reserved. </p>
        </>
    )
}
function Powered() {
    return (
        <>
            <p className="powered">Powered by <span style={{ color: '#FA3636' }}>Devmagister</span></p>
        </>
    )
}