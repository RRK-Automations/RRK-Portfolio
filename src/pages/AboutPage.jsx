import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const services = [
  {
    icon: "🤖",
    title: "AI Agents & Automation",
    description:
      "Custom AI agents, workflow automation with n8n and Make.com, intelligent chatbots, and process automation that saves hours every day.",
  },
  {
    icon: "💻",
    title: "Web & Mobile Apps",
    description:
      "Full-stack web and mobile applications built with React, React Native, Node.js, and modern frameworks. Responsive, fast, and built to scale.",
  },
  {
    icon: "🏢",
    title: "ERP & Enterprise Software",
    description:
      "Custom ERP systems, warehouse management, inventory tracking, and enterprise platforms that streamline operations and reduce manual work.",
  },
  {
    icon: "📱",
    title: "WhatsApp Business Solutions",
    description:
      "WhatsApp chatbots, automated lead capture, customer engagement flows, and Business API integrations that convert conversations into revenue.",
  },
  {
    icon: "📊",
    title: "CRM & SaaS Platforms",
    description:
      "Custom CRM systems, SaaS platforms with subscription management, analytics dashboards, and data-driven tools for business growth.",
  },
  {
    icon: "🛍️",
    title: "E-Commerce & Marketplaces",
    description:
      "Feature-rich e-commerce platforms with product management, payment integration, order tracking, and admin dashboards for brands of all sizes.",
  },
];

const AboutPage = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-page__hero">
        <div className="about-page__hero-bg">
          <div className="about-page__orb about-page__orb--1"></div>
          <div className="about-page__orb about-page__orb--2"></div>
          <div className="about-page__orb about-page__orb--3"></div>
        </div>
        <div className="container">
          <h1 className="about-page__title">
            About <span className="gradient-text">RRK Automations</span>
          </h1>
          <p className="about-page__subtitle">
            Custom software, AI agents, and automation for modern businesses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-page__story section">
        <div className="container">
          <div className="about-page__story-grid">
            <div className="about-page__story-content">
              <h2 className="about-page__section-title">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="about-page__text">
                RRK Automations is a custom software development agency founded
                by <strong>S. Mahesh Kumar</strong>. We build AI agents, web and
                mobile applications, enterprise platforms, and automation
                systems that help businesses operate faster and scale smarter.
              </p>
              <p className="about-page__text">
                From e-commerce storefronts and learning management systems to
                warehouse management and fitness platforms — every project we
                deliver is built with modern technology, clean architecture, and
                a focus on real business outcomes. Our mission is to automate,
                accelerate, and amplify growth for every client we work with.
              </p>
              <p className="about-page__text">
                With <strong>500+ projects delivered</strong> across retail,
                logistics, education, fitness, and enterprise — we bring the
                experience, speed, and technical breadth that growing businesses
                need.
              </p>
            </div>
            <div className="about-page__story-stats">
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  523+
                </span>
                <span className="about-page__stat-label">
                  Projects Delivered
                </span>
              </div>
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  400+
                </span>
                <span className="about-page__stat-label">
                  Happy Clients
                </span>
              </div>
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  End-to-End
                </span>
                <span className="about-page__stat-label">
                  Development
                </span>
              </div>
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  Modern
                </span>
                <span className="about-page__stat-label">
                  Tech Stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-page__services section">
        <div className="container">
          <div className="about-page__services-header">
            <h2 className="about-page__section-title">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="section-subtitle">
              We offer a comprehensive range of technical services to power your
              business.
            </p>
          </div>
          <div className="about-page__services-grid">
            {services.map((service) => (
              <div className="about-page__service-card glass-card" key={service.title}>
                <span className="about-page__service-icon">{service.icon}</span>
                <h3 className="about-page__service-title">{service.title}</h3>
                <p className="about-page__service-desc">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-page__cta section">
        <div className="container">
          <div className="about-page__cta-card glass-card">
            <h2 className="about-page__cta-title">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="about-page__cta-text">
              Let's discuss your project and see how RRK Automations can help
              you achieve your goals.
            </p>
            <div className="about-page__cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
