import { useState } from "react";
import emailjs from 'emailjs-com'
import { toast } from "react-toastify";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Navbar from "../components/Navbar";
import '../styles/contact.css'
import { motion } from 'framer-motion';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_569o49j';
            const templateId = 'template_7e9rf6w';
            const userId = 'user_jECjXn2SmyeTB6JvsOx9f';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            toast.success('Email has been sent.');
        } else {
            toast.error('Please fill in all fields.');
        }
    }

    return (

        <div className="contact-page">
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
                <div className="contact-content">
                    <div className="links">
                        <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valery-piuchanka/"><FaLinkedin /></a>
                        <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://github.com/val-pivchenko"><FaGithub /></a>
                    </div>
                    <h1 className={emailSent ? "hide" : 'contact-heading-dark'}>Send me an email</h1>
                    <span className={emailSent ? 'contact-heading-dark visible' : 'hide'}>Thank you for your message!</span>
                    <div className="contact-form" id="contact-form">
                        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <textarea placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <button className="submit-btn" onClick={submit}>Send Message</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact