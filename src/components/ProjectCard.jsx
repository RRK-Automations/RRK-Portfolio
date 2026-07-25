import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="project-card glass-card">
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt={project.name}
          className="project-card__image"
          loading="lazy"
        />
        {project.featuredBadge && (
          <span className="project-card__featured-badge">{project.featuredBadge}</span>
        )}
        <span className="project-card__category tag-teal">{project.category}</span>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.shortDescription}</p>

        <div className="project-card__tech-row">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span key={index} className="project-card__tech-tag tag">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="project-card__tech-tag project-card__tech-more">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <span className="project-card__link">
          View Details <span className="project-card__arrow">→</span>
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
