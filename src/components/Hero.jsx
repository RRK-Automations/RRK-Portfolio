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
          <span className="hero__title-line hero__title-line--1">From AI Agents</span>
          <span className="hero__title-line hero__title-line--2">
            <span className="gradient-text">to Enterprise Software</span>
          </span>
        </h1>

        <p className="hero__subtitle">
          RRK Automations builds custom software that automates and scales your
          business. AI agents, WhatsApp automation, web &amp; mobile apps, ERP,
          CRM, and SaaS platforms — delivered fast.
        </p>

        <div className="hero__cta-group">
          <Link to="/projects" className="btn btn-primary hero__btn">
            View Our Work
          </Link>
          <Link to="/contact" className="btn btn-outline hero__btn">
            Start a Project
          </Link>
        </div>

        <div className="hero__stats glass-card">
          <div className="hero__stat">
            <span className="hero__stat-number">523+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">400+</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Mobile &amp; Web Apps</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
