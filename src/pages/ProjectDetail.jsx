import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById, getAdjacentProjects } from "../data/projectsData";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const { prev, next } = getAdjacentProjects(id);

  if (!project) {
    return (
      <div className="project-detail-not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="project-detail">
      {/* Hero Banner */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-bg">
          <div className="project-detail-orb project-detail-orb-1"></div>
          <div className="project-detail-orb project-detail-orb-2"></div>
        </div>
        <div className="container">
          <Link to="/projects" className="project-detail-back">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Projects
          </Link>
          <div className="project-detail-header">
            <span className="project-detail-category tag tag-teal">
              {project.category}
            </span>
            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-detail-subtitle">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-detail-image-section">
        <div className="container">
          <div className="project-detail-image-wrapper glass-card">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="project-detail-image"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="project-detail-info">
        <div className="container">
          <div className="project-detail-grid">
            {/* Main Content */}
            <div className="project-detail-content">
              <h2 className="project-detail-section-title">
                About This Project
              </h2>
              <p className="project-detail-description">
                {project.fullDescription}
              </p>
            </div>

            {/* Sidebar */}
            <aside className="project-detail-sidebar">
              {/* Tech Stack */}
              <div className="project-detail-sidebar-card glass-card">
                <h3>Tech Stack</h3>
                <div className="project-detail-tech-tags">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo Link */}
              <div className="project-detail-sidebar-card glass-card">
                <h3>Live Demo</h3>
                {project.demoLink && project.demoLink !== "#" ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-detail-demo-btn"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    View Live Demo
                  </a>
                ) : (
                  <div className="project-detail-no-demo">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>
                      {project.noLinkReason ||
                        "This is an internal/automation project — no public demo available."}
                    </span>
                  </div>
                )}
              </div>

              {/* Category */}
              <div className="project-detail-sidebar-card glass-card">
                <h3>Category</h3>
                <span className="tag tag-teal">{project.category}</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="project-detail-nav-section">
        <div className="container">
          <div className="project-detail-nav">
            {prev ? (
              <Link
                to={`/project/${prev.id}`}
                className="project-detail-nav-link project-detail-nav-prev glass-card"
              >
                <span className="project-detail-nav-label">
                  ← Previous Project
                </span>
                <span className="project-detail-nav-name">{prev.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
            {next ? (
              <Link
                to={`/project/${next.id}`}
                className="project-detail-nav-link project-detail-nav-next glass-card"
              >
                <span className="project-detail-nav-label">
                  Next Project →
                </span>
                <span className="project-detail-nav-name">{next.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
