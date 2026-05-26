import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid-overlay"></div>
      </div>

      <div className="hero__content container">
        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">Our Work Speaks</span>
          <span className="hero__title-line hero__title-line--2">
            <span className="gradient-text">for Itself</span>
          </span>
        </h1>

        <p className="hero__subtitle">
          Explore the projects we have delivered for our clients. From AI-powered
          platforms to luxury e-commerce — we bring ideas to life.
        </p>

        <div className="hero__cta-group">
          <Link to="/projects" className="btn btn-primary hero__btn">
            View Our Projects
          </Link>
          <Link to="/contact" className="btn btn-outline hero__btn">
            Contact Us
          </Link>
        </div>

        <div className="hero__stats glass-card">
          <div className="hero__stat">
            <span className="hero__stat-number">15+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">100%</span>
            <span className="hero__stat-label">Client Satisfaction</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">48hr</span>
            <span className="hero__stat-label">Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
