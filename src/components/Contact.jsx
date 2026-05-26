import './Contact.css';

const contactCards = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'rrkautomations@gmail.com',
    href: 'mailto:rrkautomations@gmail.com',
  },
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '+91 8341374436',
    href: 'https://wa.me/918341374436',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'RRK Automations',
    href: 'https://linkedin.com/company/rrk-automations',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Interested in working together? Reach out to us through any of these channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact__cards">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card glass-card"
            >
              <span className="contact__card-icon">{card.icon}</span>
              <span className="contact__card-label">{card.label}</span>
              <span className="contact__card-value">{card.value}</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <p className="contact__cta">
          Or visit our website at{' '}
          <a
            href="https://rrkautomations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__cta-link"
          >
            rrkautomations.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
