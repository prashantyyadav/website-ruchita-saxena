import React from 'react';
import './RuchitaSaxena.scss';
import villaPhoto from './ml.jpg';
import modernHousePhoto from './modern.jpg';
import luxuryPhoto from './luxury.jpg';
import heroBackground from './hero-bg.jpg'; // Add your background image here
import { useState } from 'react';
import interiorBg from './imt.jpg';
import architectureBg from './apt.jpg';
import turnkeyBg from './tp.jpg';

const RuchitaSaxenaWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="ruchita">
      {/* Navbar */}
      <nav className="navbar">
  <div className="logo">Ruchita Saxena</div>
  <div className={`nav-links ${menuOpen ? "open" : ""}`}>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
  <div className="hamburger" onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>


      {/* Hero Section */}
     <header className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-content">
          <h1>Elegant Architectural Solutions</h1>
          <p>Designing timeless interiors & exteriors</p>
          <a href="#contact" className="hero-btn">Get Consultation</a>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>About Ruchita</h2>
          <p>
            Ruchita Saxena is a visionary architect known for creating luxurious,
            sustainable and detail-oriented residential and commercial spaces across India.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-card landscape" style={{ backgroundImage: `url(${interiorBg})` }}>
              <h3 className="darktext">Interior Design</h3>
              <p className="darktext">Premium, custom interiors crafted for beauty and function.</p>
            </div>
            <div className="service-card landscape" style={{ backgroundImage: `url(${architectureBg})` }}>
              <h3 className="darktext">Architecture Planning</h3>
              <p className="darktext">Innovative structural planning tailored to your needs.</p>
            </div>
            <div className="service-card landscape" style={{ backgroundImage: `url(${turnkeyBg})` }}>
              <h3 className="darktext">Turnkey Projects</h3>
              <p className="darktext">End-to-end design and execution for hassle-free delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <div className="container">
          <h2>Our Projects</h2>
          <p>Explore our recently completed architectural marvels.</p>
          <div className="project-gallery">
            <div className="project-item">
              <img src={villaPhoto} alt="Villa Project" />
              <h4>Villa</h4>
            </div>
            <div className="project-item">
              <img src={modernHousePhoto} alt="Modern House" />
              <h4>Modern House</h4>
            </div>
            <div className="project-item">
              <img src={luxuryPhoto} alt="Luxury Architecture" />
              <h4>Luxury</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Ruchita Saxena. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default RuchitaSaxenaWebsite;
