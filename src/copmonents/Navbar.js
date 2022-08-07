
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                DIAGTECH
            </Link>
            <div className='meniu-icon' onClick={handleClick}>
                <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        HEM
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        OM OSS
                    </Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        TJÄNSTER
                    </Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        KONTAKT
                    </Link>
                </li>  
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
