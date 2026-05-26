import './About.css';

const services = [
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Custom AI agents, chatbots, and workflow automation',
  },
  {
    icon: '💻',
    title: 'Web & Mobile Dev',
    description: 'Full-stack applications built with modern frameworks',
  },
  {
    icon: '🚀',
    title: 'E-Commerce & Enterprise',
    description: 'Scalable platforms for business growth',
  },
];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__inner container">
        <div className="about__header">
          <h2 className="section-title about__title">
            About <span className="gradient-text">RRK Automations</span>
          </h2>

          <p className="section-subtitle about__description">
            RRK Automations is your global partner for every technical service
            your business needs. From AI-powered automation and WhatsApp chatbots
            to full-stack web/mobile development and custom enterprise systems —
            we deliver solutions in 48 hours.
          </p>

          <div className="about__founder">
            <span className="about__founder-text">
              Founded by <strong>S. Mahesh Kumar</strong>
            </span>
          </div>
        </div>

        <div className="about__services">
          {services.map((service) => (
            <div className="about__card glass-card" key={service.title}>
              <span className="about__card-icon">{service.icon}</span>
              <h3 className="about__card-title">{service.title}</h3>
              <p className="about__card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
