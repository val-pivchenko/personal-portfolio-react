/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <nav>
            <Link to={'/'} className='nav-logo'><FaCode size={40} /></Link>
            <ul className={isActive ? 'nav-ul active' : 'nav-ul'}>
                <li className="nav-li"><Link to={'/'} className="nav-btn">Home</Link></li>
                <li className="nav-li"> <Link to={'/projects'} className="nav-btn"> Projects</Link></li>
                <li className="nav-li"> <Link to={'/contact'} className="nav-btn"> Contact</Link></li>
            </ul >
            <div className={isActive ? 'hamburger-container active' : 'hamburger-container'} >
                <div onClick={() => {
                    setIsActive(!isActive)
                }} className={isActive ? 'hamburger active' : 'hamburger'}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav >
    )
}

export default Navbar