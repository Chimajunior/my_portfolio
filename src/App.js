import React, {useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThankYou from "./pages/ThankYou";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ThankYou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 400,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#ccf",
              // value: "#fff",
            },
            opacity: {
              value: 0.04,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 7,
              random: true,
              anim: {
                enable: true,
                speed: 10,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
            },
          },
        }}
      />
    </div>
  );
}

export default App;
