import React from "react";
import "./ContactPage.css";

const contactCards = [
  {
    icon: "✉️",
    label: "Email",
    value: "rrkautomations@gmail.com",
    href: "mailto:rrkautomations@gmail.com",
    description: "Drop us an email and we'll respond within 24 hours.",
  },
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+91 8341374436",
    href: "https://wa.me/918341374436",
    description: "Quick chat? Message us directly on WhatsApp.",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "RRK Automations",
    href: "https://linkedin.com/company/rrk-automations",
    description: "Connect with us professionally on LinkedIn.",
  },
];

const ContactPage = () => {
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-page__hero">
        <div className="contact-page__hero-bg">
          <div className="contact-page__orb contact-page__orb--1"></div>
          <div className="contact-page__orb contact-page__orb--2"></div>
        </div>
        <div className="container">
          <h1 className="contact-page__title">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-page__subtitle">
            Have a project in mind? Let's talk about how we can help you achieve
            your goals. We're always excited to take on new challenges.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-page__cards-section section">
        <div className="container">
          <div className="contact-page__cards">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page__card glass-card"
              >
                <span className="contact-page__card-icon">{card.icon}</span>
                <h3 className="contact-page__card-label">{card.label}</h3>
                <span className="contact-page__card-value">{card.value}</span>
                <p className="contact-page__card-desc">{card.description}</p>
                <span className="contact-page__card-action">
                  {card.label === "Email"
                    ? "Send Email →"
                    : card.label === "WhatsApp"
                    ? "Open Chat →"
                    : "Visit Profile →"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="contact-page__info section">
        <div className="container">
          <div className="contact-page__info-card glass-card">
            <div className="contact-page__info-content">
              <h2 className="contact-page__info-title">
                Why Work With <span className="gradient-text">Us</span>?
              </h2>
              <ul className="contact-page__info-list">
                <li>
                  <span className="contact-page__info-check">✓</span>
                  <span>
                    <strong>48-Hour Delivery</strong> — We move fast without
                    cutting corners
                  </span>
                </li>
                <li>
                  <span className="contact-page__info-check">✓</span>
                  <span>
                    <strong>End-to-End Solutions</strong> — From concept to
                    deployment, we handle everything
                  </span>
                </li>
                <li>
                  <span className="contact-page__info-check">✓</span>
                  <span>
                    <strong>Modern Tech Stack</strong> — React, Node.js, AI/ML,
                    n8n, and more
                  </span>
                </li>
                <li>
                  <span className="contact-page__info-check">✓</span>
                  <span>
                    <strong>24/7 Support</strong> — We're available round the
                    clock for our clients
                  </span>
                </li>
                <li>
                  <span className="contact-page__info-check">✓</span>
                  <span>
                    <strong>Transparent Pricing</strong> — No hidden costs, no
                    surprises
                  </span>
                </li>
              </ul>
            </div>
            <div className="contact-page__info-cta">
              <p className="contact-page__info-cta-text">
                Visit our main website for more details
              </p>
              <a
                href="https://rrkautomations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                rrkautomations.com
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 2H14V12M14 2L2 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
