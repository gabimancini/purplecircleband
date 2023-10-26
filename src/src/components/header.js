import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {BsXLg} from  'react-icons/bs';
import {
    FaSpotify,
    FaApple,
    FaDeezer,
    FaYoutubeSquare,
    FaTiktok,
    FaInstagramSquare,
    FaFacebookSquare
} from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
      setShowNav(!showNav)
    }
    return (
        <header onClick={toggleNavItems}>
            <div className='container_header'>
            {showNav? <span className='menu-icon' onClick={toggleNavItems}><BsXLg size={24} strokeWidth={1} color='#630B35' /></span>
            : <span className='menu-icon' onClick={toggleNavItems}><FaBars size={24} color='#630B35' /></span>}
              {showNav? <NavMobile className="open" />:<NavDesktop />}
            </div>
        </header>
    )
}
function NavDesktop() {
   
    return (
        <nav className='navDesktop' >
            <MenuLinks />
            <SocialLinks />
        </nav>
    )
}
function NavMobile() {
   
    return (
        <nav className='navMobile'>
            <MenuLinks />
            <SocialLinks />
        </nav>
    )
}
function MenuLinks() {
    return (
        <ul className='menu_links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/bio'>Bio</Link></li>
            <li><Link to='/discography'>Discography</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact</Link> </li>
        </ul>
    )
}
function SocialLinks() {
    return (
        <ul className='social_links'>
            <li><Link to='https://open.spotify.com/intl-es/artist/2Yjvtj6PygasEQoDJbtm1N?si=rvc82iviSBePvb7ZB01-Tw' rel="noreferrer" target='_blank'><FaSpotify /></Link></li>
            <li><Link to='https://music.apple.com/us/artist/purple-circle/1711652197' rel="noreferrer" target='_blank'><FaApple /></Link></li>
            <li><Link to='https://www.deezer.com/us/artist/236857141' rel="noreferrer" target='_blank'><FaDeezer /></Link></li>
            <li><Link to='https://music.youtube.com/channel/UCeMF2-IYvYuf3T4vrX7yUdw?si=GTD9Xvyq5ocq9Vnk' rel="noreferrer" target='_blank'><FaYoutubeSquare /></Link></li>
            <li><Link to='https://www.tiktok.com/@purplecircleband' rel="noreferrer" target='_blank'><FaTiktok /></Link></li>
            <li><Link to='https://www.instagram.com/purple.circle.band/' rel="noreferrer" target='_blank'><FaInstagramSquare /></Link></li>
            <li><Link to='' rel="noreferrer" target='_blank'><FaFacebookSquare /></Link></li>
        </ul>
    )
}