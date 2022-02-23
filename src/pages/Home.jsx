import Navbar from '../components/Navbar'
import '../styles/home.css'
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGit } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { AiFillApi } from 'react-icons/ai'
import { SiMongodb, SiFirebase } from 'react-icons/si'
import { motion } from 'framer-motion';


const Home = () => {
    return (

        <div className="home">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.4,
                        ease: [0.61, 1, 0.88, 1],
                    }
                }}
            >
                <div className="content-container">
                    <div className='container-left'>
                        <h1 className='home-heading-dark'>Hi, my name is</h1>
                        <h1 className='home-heading-color'>Val</h1>
                        <p className="summary-text">I'm a self taught <span className='span-color'>Front End Developer</span> with a strong passion for building web applications</p>
                    </div>
                    <div className="container-right">
                        <h1 className="heading-technologies">Experience with</h1>
                        <ul className="tech-grid">
                            <li className="tech-grid-item">
                                <FaHtml5 />
                                HTML
                            </li>
                            <li className="tech-grid-item">
                                <FaCss3Alt />
                                CSS
                            </li>
                            <li className="tech-grid-item">
                                <IoLogoJavascript />
                                JavaScript
                            </li>
                            <li className="tech-grid-item">
                                <FaReact />
                                React.js
                            </li>
                            <li className="tech-grid-item">
                                <FaNode />
                                Node.js
                            </li>
                            <li className="tech-grid-item">
                                <AiFillApi />
                                REST APIs
                            </li>
                            <li className="tech-grid-item">
                                <FaGit />
                                Git
                            </li>
                            <li className="tech-grid-item">
                                <SiFirebase />
                                Firebase
                            </li>
                            <li className="tech-grid-item">
                                <SiMongodb />
                                MongoDB
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Home