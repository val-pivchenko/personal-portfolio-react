/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const [isActive, setIsActive] = useState(false)

    return (
        <nav>
            <a className='nav-logo' onClick={() => {
                navigate('/')
            }}><FaCode size={40} /></a>
            <ul className={isActive ? 'nav-ul active' : 'nav-ul'}>
                <li className="nav-li"><button className="nav-btn" onClick={() => {
                    navigate('/')
                }}>Home</button></li>
                <li className="nav-li"> <button className="nav-btn" onClick={() => {
                    navigate('/projects')
                }}> Projects</button></li>
                <li className="nav-li"> <button className="nav-btn" onClick={() => {
                    navigate('/contact')
                }}> Contact</button></li>
            </ul >
            <div className={isActive ? 'hamburger-container active' : 'hamburger-container'} onClick={() => { setIsActive(!isActive) }}>
                <div onClick={() => { setIsActive(!isActive) }} className={isActive ? 'hamburger active' : 'hamburger'}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav >
    )
}

export default Navbar