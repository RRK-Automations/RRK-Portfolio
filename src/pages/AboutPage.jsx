import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const services = [
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Custom AI agents, chatbots, workflow automation using n8n, Make.com, and Zapier. We build intelligent systems that save you hours every day.",
  },
  {
    icon: "💻",
    title: "Web & Mobile Development",
    description:
      "Full-stack web and mobile applications built with React, React Native, Node.js, and modern frameworks. Responsive, fast, and scalable.",
  },
  {
    icon: "🚀",
    title: "E-Commerce & Enterprise",
    description:
      "Scalable e-commerce platforms, warehouse management systems, CRM/ERP integrations, and custom business software that drives growth.",
  },
  {
    icon: "💬",
    title: "WhatsApp Business Solutions",
    description:
      "WhatsApp chatbots, automated lead capture, customer engagement flows, and business API integrations that convert leads into revenue.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Custom dashboards, reporting systems, data pipelines, and analytics platforms that give you actionable business insights.",
  },
  {
    icon: "🎨",
    title: "UI/UX & Branding",
    description:
      "Premium website designs, personal brand portfolios, and visual identities that make a lasting first impression.",
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
            Your global partner for every technical service your business needs.
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
                RRK Automations is a global AI & automation agency founded by{" "}
                <strong>S. Mahesh Kumar</strong>. We specialize in turning
                complex business challenges into elegant, automated solutions —
                and we do it fast.
              </p>
              <p className="about-page__text">
                From AI-powered chatbots and WhatsApp automation to full-stack
                web/mobile development and custom enterprise systems, we deliver
                end-to-end technical solutions tailored to your business. Our
                mission is simple: automate, accelerate, and amplify your
                growth.
              </p>
              <p className="about-page__text">
                With <strong>15+ projects delivered</strong> across diverse
                industries — from luxury jewelry brands to warehouse management
                to fitness platforms — we bring the experience, speed, and
                precision that growing businesses need.
              </p>
            </div>
            <div className="about-page__story-stats">
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  15+
                </span>
                <span className="about-page__stat-label">
                  Projects Delivered
                </span>
              </div>
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  48hr
                </span>
                <span className="about-page__stat-label">
                  Average Delivery
                </span>
              </div>
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  100%
                </span>
                <span className="about-page__stat-label">
                  Client Satisfaction
                </span>
              </div>
              <div className="about-page__stat-card glass-card">
                <span className="about-page__stat-number gradient-text">
                  24/7
                </span>
                <span className="about-page__stat-label">
                  Support Available
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
