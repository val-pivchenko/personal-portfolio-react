import Navbar from '../components/Navbar'
import '../styles/projects.css'
import { motion } from 'framer-motion';

const Projects = () => {
    return (

        <div className='projects'>
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
                <div className="projects-container">
                    <div className="projects-grid">
                        <div className="projects-grid-item" style={{ backgroundImage: `url(${require("../assets/images/screenshots/space-travel.jpg")})` }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://space-tourism-val-pivchenko.netlify.app/" className="deploy-link">Space Tourism</a>
                        </div>
                        <div className="projects-grid-item" style={{ backgroundImage: `url(${require("../assets/images/screenshots/house-marketplace.jpg")})` }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://house-marketplace-val-pivchenko.vercel.app/" className="deploy-link">House Marketplace</a>
                        </div>
                        <div className="projects-grid-item" style={{ backgroundImage: `url(${require("../assets/images/screenshots/calc.jpg")})` }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://val-pivchenko.github.io/calculator-app-main/" className="deploy-link">Calculator</a>
                        </div>
                        <div className="projects-grid-item" style={{ backgroundImage: `url(${require("../assets/images/screenshots/ip-tracker.jpg")})` }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://val-pivchenko.github.io/ip-address-tracker-master/" className="deploy-link">IP Address Tracker</a>
                        </div>
                        <div className="projects-grid-item" style={{ backgroundImage: `url(${require("../assets/images/screenshots/github-finder.jpg")})` }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://github-finder-react-app-val-pivchenko.vercel.app/" className="deploy-link">GitHub Finder</a>
                        </div>
                        <div className="projects-grid-item" style={{ backgroundImage: `url(${require("../assets/images/screenshots/tip-calc.jpg")})` }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="https://val-pivchenko.github.io/tip-calculator-app-main/" className="deploy-link">Tip Calculator</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default Projects