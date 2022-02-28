import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import { AnimatePresence } from "framer-motion";

function App() {


  return (
    <>
      <Router>
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 300,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  duration: 1,
                  opacity: .5,
                  size: 6,
                },
              },
            },
            particles: {
              color: {
                value: ["#EB5E28", "#252422", "#CCC5B9"]
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "top",
                enable: true,
                outMode: "out",
                random: true,
                speed: 2,
              },
              number: {
                density: {
                  enable: false,
                },
                value: 200,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 3,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
            },
            detectRetina: true,
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router >
      <ToastContainer />
    </>
  );
}

export default App;
